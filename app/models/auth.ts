import {commitSession, getSession} from '~/session.server'
import {query} from '../../db'
import bcrypt from 'bcryptjs'
import { redirect } from '@remix-run/react'

interface User {
  id: string
  email: string
  password: string
  role_id: number
}

export async function login({email, password}: Omit<User, 'id' | 'role_id'>) {
  const result = await query<User>('SELECT * FROM users WHERE email = $1', [
    email,
  ])
  const user = result.rows[0]

  if (!user) {
    throw new Error('invalid credentials')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    throw new Error('invalid credentials')
  }

  return {user: {id: user.id, email: user.email, role: user.role_id}}
}

export async function createUserSession(userId: string, request: Request) {
  const session = await getSession(request.headers.get('Cookie'))
  session.set('userId', userId)

  return commitSession(session)
}


export async function requireUser(request: Request): Promise<string> {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId") as string;

  if (!userId) {
    throw redirect("/login");
  }

  return userId;
}

