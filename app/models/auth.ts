import {commitSession, getSession} from '~/session.server'
import {query} from '../../db'
import { getFingerprint } from '@thumbmarkjs/thumbmarkjs'
import {redirect} from '@remix-run/react'
import bcrypt from 'bcryptjs'

interface User {
  id: string
  username: string
  password: string
  role_id: number
}

export async function login({
  username,
  password,
}: Omit<User, 'id' | 'role_id'>) {
  const result = await query<User>('SELECT * FROM users WHERE username = $1', [
    username,
  ])

  // const fingerprint = await getFingerprint()

  if (!result.length) {
    return
  }

  const isPasswordValid = await bcrypt.compare(password, result[0].password ?? '')

  if (!isPasswordValid) {
    throw new Error('invalid credentials')
  }

  return {username: result[0].username, password: result[0].password}
}

export async function createUserSession(userId: string, request: Request) {
  const session = await getSession(request.headers.get('Cookie'))
  session.set('userId', userId)

  return commitSession(session)
}

export async function isUserAuthenticated(request: Request) {
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')

  return Boolean(userId)
}

export async function requireUser(request: Request): Promise<string> {
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId') as string

  if (!userId) {
    throw redirect('/login')
  }

  return userId
}

