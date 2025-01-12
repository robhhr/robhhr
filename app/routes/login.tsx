import {
  redirect,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from '@remix-run/node'
import {Form, useActionData} from '@remix-run/react'
import {isUserAuthenticated, login} from '~/models/auth'
import {Button} from '~/components/modules/button'
import useFingerprint from '~/hooks/useFingerprint'
import {useEffect, useState} from 'react'

export const loader = async ({request}: LoaderFunctionArgs) => {
  const isLoggedIn = await isUserAuthenticated(request)

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

  return {user, username, password, fingerprint, fingerprintData}
}

const Login = () => {
  const actionData = useActionData<typeof action>()
  const {fingerprint, generateFingerprint} = useFingerprint()

  console.log(actionData)

  useEffect(() => {
    console.log('useEffect triggered')

    const fetchFingerprint = async () => {
      await generateFingerprint()
    }

    fetchFingerprint()
  }, [generateFingerprint])

  console.log('rendered')

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

