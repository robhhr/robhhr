import {
  redirect,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from '@remix-run/node'
import {Form, useActionData} from '@remix-run/react'
import {
  insertFingerprint,
  isUserAuthenticated,
  login,
} from '~/models/auth.server'
import {Button} from '~/components/modules/button'
import {useEffect} from 'react'
import {createValkeySession} from '~/valkey/valkey.server'
import useFingerprint from '~/hooks/useFingerprint'
import {checkIFingerprintExists} from '~/models/session.server'

export const loader = async ({request}: LoaderFunctionArgs) => {
  const isLoggedIn = await isUserAuthenticated(request)

  // const valkey = await valkeyClient.set('first_key', 'Hello Valkey!', 'EX', 3600)
  // const value = await valkeyClient.get('first_key')

  // console.log('VALKEY', valkey)
  // console.log('VALUE', value)

  if (isLoggedIn) {
    throw redirect('/admin')
  }

  return {isLoggedIn}
}

export const action = async ({request}: ActionFunctionArgs) => {
  const body = await request.formData()
  const username = body.get('username') as string
  const password = body.get('password') as string
  const fingerprint = body.get('fingerprint') as string
  const fingerprintData = body.get('fingerprintData') as string

  if (!username || !password) {
    return {error: 'fill all fields'}
  }

  const user = await login({username, password})

  if (!user) {
    return {error: 'invalid credentials'}
  }

  await Promise.allSettled([
    (async () => {
      try {
        await createValkeySession(username, fingerprint)
      } catch (error) {
        console.error('Error creating Valkey session:', error)
      }
    })(),

    (async () => {
      try {
        await insertFingerprint({
          userId: user.id,
          fingerprint: fingerprintData,
          hash: fingerprint,
          isActive: true,
        })
      } catch (error) {
        console.error('Error inserting fingerprint:', error)
      }
    })(),

    // (async () => {
    //   try {
    //     const exists = await checkIFingerprintExists({
    //       // userId: '4ec95158-7532-43b2-86da-f41a3fccbf11',
    //       userId: user.id,
    //     })
    //     console.log('Does fingerprint exist for this user?', exists)
    //   } catch (error) {
    //     console.error('Error checking if fingerprint exists:', error)
    //   }
    // })(),
  ])

  const doesFingerprintExist = await checkIFingerprintExists({userId: '4ec95158-7532-43b2-86da-f41a3fccbf133'})

  if (!doesFingerprintExist) {
    return {error: 'No active fingerprint found for this user.'}
  }

  // return new Response(
  //   JSON.stringify({
  //     user,
  //     username,
  //   }),
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Set-Cookie': `session=${sessionIM.sessionToken}; HttpOnly; Secure; Path=/; Max-Age=3600`,
  //     },
  //   },
  // )

  // console.log(sessionIM)

  return {user}
}

const Login = () => {
  const actionData = useActionData<typeof action>()
  const {fingerprint, generateFingerprint} = useFingerprint()

  console.log(actionData)

  useEffect(() => {
    const fetchFingerprint = async () => {
      await generateFingerprint()
    }

    fetchFingerprint()
  }, [generateFingerprint])

  return (
    <div>
      {actionData?.error && <h1>{actionData.error}</h1>}

      <Form method="post">
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

        <Button intent="admin" type="submit" name="login">
          login
        </Button>
      </Form>
    </div>
  )
}

export default Login

