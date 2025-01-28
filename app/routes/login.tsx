import {
  data,
  redirect,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from '@remix-run/node'
import {Form, useActionData, useLoaderData, useNavigate} from '@remix-run/react'
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
import {InputText} from '~/components/ui/admin/input-text'
import {generateHashCode} from '~/utils/code-gen'
import {
  checkIfCodeMatches,
  insertTwoFactorCode,
} from '~/models/auth-codes.server'
import {sendCodeEmail} from '~/utils/mailer'

enum AuthState {
  IDLE = 'idle',
  TWO_FACTOR = '2FA',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export const loader = async ({request}: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')

  if (!userId) {
    return null
  }

  await checkValkeySession(userId)
  console.log('-------------------------------------------------------')

  return {id: session.get('userId')}
}

export const action = async ({request}: ActionFunctionArgs) => {
  const body = await request.formData()
  const action = body.get('action') as string
  const remember = Boolean(body.get('remember'))
  const fingerprint = body.get('fingerprint') as string
  const fingerprintData = body.get('fingerprintData') as string

  switch (action) {
    case '2FA': {
      // #1 check form code & generate hashed code
      const code = body.get('code') as string

      if (!code) {
        return {error: 'add code'}
      }

      // #2 get user data from session (session created in case: 'login')
      const session = await getSession(request.headers.get('Cookie'))
      const userId = session.get('userId')

      if (!userId) {
        return {error: 'error with user'}
      }

      // #3 compare form code w/ hashed code in db
      try {
        const matches = await checkIfCodeMatches({userId, code})

        if (!matches) {
          return {error: 'invalid code'}
        }

        // #3.1 if match change cookie auth & insert browser data
        session.set('authenticated', true)

        await Promise.all([
          insertFingerprint({
            userId: userId,
            fingerprint: fingerprintData,
            hash: fingerprint,
            isActive: true,
          }),
          createValkeySession({userId, fingerprint, is2FA: true, remember}),
        ])

        return redirect('/')
      } catch (error) {
        console.error('error verifying code:', error)
        return {
          authState: AuthState.ERROR,
          error: 'error verifying code',
        }
      }
    }

    case 'login': {
      const username = body.get('username') as string
      const password = body.get('password') as string

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

      // #2.1 if it doesnt, try to insert fingerprint, auth code & send email w/ auth code && render 2FA
      if (!exists) {
        const hashedCode = await generateHashCode()
        // insert cookie without authenticated flag
        const createSession = await createUserSession(user.id, false, request, remember)

        try {
          await Promise.allSettled([
            insertTwoFactorCode(user.id, hashedCode.hash),
            sendCodeEmail(hashedCode.code),
          ])

          return data(
            {authState: AuthState.TWO_FACTOR, error: null},
            {
              headers: {
                'Set-Cookie': createSession,
                'Content-Type': 'application/json',
              },
            },
          )
        } catch (error) {
          console.error('error inserting log data:', error)
          return {error: 'error inserting log data'}
        }
      }

      // #3 if exists continue w/o 2FA
      try {
        const createSession = await createUserSession(user.id, true, request, remember)

        // create valkey session with user db id
        await createValkeySession({userId: user.id, fingerprint, is2FA: true, remember})

        return redirect('/', {
          headers: {
            'Set-Cookie': createSession,
          },
        })
      } catch (error) {
        console.error('error main login', error)
      }

      break
    }

    default:
      return {authState: AuthState.IDLE}
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
    return (
      <div>
        <h1>2fa</h1>

        <Form method="post">
          <input type="hidden" name="action" value="2FA" />
          <InputText name="code" />
          <label htmlFor="code">code</label>
          <Button intent="admin" type="submit">
            login
          </Button>
        </Form>
      </div>
    )
  }

  return (
    <div>
      {loaderData?.id && (
        <div>
          <p>cookie in</p>
        </div>
      )}

      {actionData?.error && <h1>{actionData.error}</h1>}

      <Form method="post">
        <input type="hidden" name="action" value="login" />

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

        <Button intent="admin" type="submit">
          login
        </Button>
      </Form>
    </div>
  )
}

export default Login

