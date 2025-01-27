import {
  data,
  redirect,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from '@remix-run/node'
import {Form, useActionData, useLoaderData} from '@remix-run/react'
import {
  createUserSession,
  insertFingerprint,
  isUserAuthenticated,
  login,
} from '~/models/auth.server'
import {Button} from '~/components/modules/button'
import {useEffect, useState} from 'react'
import {checkValkeySession, createValkeySession} from '~/valkey/valkey.server'
import useFingerprint from '~/hooks/useFingerprint'
import {checkIFingerprintExists} from '~/models/session.server'
import {cx} from 'class-variance-authority'
import {IconCheckmark} from '~/components/icons/checkmark'
import {getSession} from '~/session.server'

enum AuthState {
  IDLE = 'idle',
  TWO_FACTOR = '2fa',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export const loader = async ({request}: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'))

  if (!session.get('userId')) {
    return null
  }

  return {id: session.get('userId')}
}

export const action = async ({request}: ActionFunctionArgs) => {
  const body = await request.formData()
  const username = body.get('username') as string
  const password = body.get('password') as string
  const remember = body.get('remember') as string
  const fingerprint = body.get('fingerprint') as string
  const fingerprintData = body.get('fingerprintData') as string

  if (!username || !password) {
    return {error: 'fill all fields'}
  }

  // #1 check db user password match
  const user = await login({username, password})

  if (!user) {
    return {error: 'invalid credentials'}
  }

  // #2 check if device exists for this user
  const exists = await checkIFingerprintExists({
    userId: user.id,
    hash: fingerprint,
  })

  // #2.1 if it doesnt, try to insert
  if (!exists) {
    try {
      await insertFingerprint({
        userId: user.id,
        fingerprint: fingerprintData,
        hash: fingerprint,
        isActive: true,
      })
    } catch (error) {
      console.error('error inserting log data:', error)
      return {error: 'error inserting log data'}
    }
  }

  // #3 create user session
  try {
    const createSession = await createUserSession(user.id, request)

    return new Response(
      JSON.stringify({
        authState: AuthState.TWO_FACTOR,
      }),
      {
        status: 200,
        headers: {
          'Set-Cookie': createSession,
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('error creating user session:', error)
    return {error: 'error creating user session'}
  }
}

const Login = () => {
  const actionData = useActionData<typeof action>()
  const loaderData = useLoaderData<typeof loader>()
  const {fingerprint, generateFingerprint} = useFingerprint()
  const [remember, setRemember] = useState<boolean>(false)

  const toggleRemember = () => {
    setRemember(!remember)
  }

  console.log(actionData, ' actionData')
  console.log(loaderData, ' loaderData')

  useEffect(() => {
    const fetchFingerprint = async () => {
      await generateFingerprint()
    }

    fetchFingerprint()
  }, [generateFingerprint])

  if (actionData?.authState === AuthState.TWO_FACTOR) {
    return <div>2fa</div>
  }

  return (
    <div>
      {actionData?.error && <h1>{actionData.error}</h1>}

      <Form method="post">
        <input type="hidden" name="intent" value="login" />

        <div className="flex flex-col font-ms-sans-serif text-xs">
          <label htmlFor="username">username</label>
          <input
            // required
            type="text"
            name="username"
            className="w-fit bg-white p-1 text-xs shadow-input"
            // onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col font-ms-sans-serif text-xs">
          <label htmlFor="password">password</label>
          <input
            // required
            type="password"
            name="password"
            className="w-fit bg-white p-1 text-xs shadow-input"
            // onChange={e => setPassword(e.target.value)}
          />
        </div>

        <input
          type="hidden"
          name="fingerprint"
          value={fingerprint?.hash || ''}
        />
        <input
          type="hidden"
          name="fingerprintData"
          value={fingerprint ? JSON.stringify(fingerprint.data) : ''}
        />

        <div className="flex font-ms-sans-serif text-xs">
          <button
            type="button"
            aria-label="remember me"
            onClick={e => {
              e.preventDefault()
              toggleRemember()
            }}
            className={cx(
              'block h-3.5 w-3.5 cursor-pointer shadow-input',
              'inset-input bg-white',
            )}
          >
            {remember && <IconCheckmark />}
          </button>
          remember me
        </div>

        <input
          type="hidden"
          name="remember"
          value={remember ? 'true' : 'false'}
        />

        <Button intent="admin" type="submit" name="login">
          login
        </Button>
      </Form>
    </div>
  )
}

export default Login

