import {commitSession, getSession} from '~/session.server'
import {query} from '../../db'
import {redirect} from '@remix-run/react'
import bcrypt from 'bcryptjs'

interface User {
  id: string
  username: string
  password: string
  role_id: number
}

interface Print {
  userId: string
  fingerprint: string
  hash: string
  isActive: boolean
}

export async function login({
  username,
  password,
}: Omit<User, 'id' | 'role_id'>) {
  const result = await query<User>('SELECT * FROM users WHERE username = $1', [
    username,
  ])

  if (!result.length) {
    return
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    result[0].password ?? '',
  )

  if (!isPasswordValid) return

  return {
    id: result[0].id,
    username: result[0].username,
    password: result[0].password,
  }
}

export async function createUserSession(userId: string, authenticated: boolean, request: Request) {
  const session = await getSession(request.headers.get('Cookie'))
  session.set('userId', userId)
  session.set('authenticated', authenticated)

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

export async function insertFingerprint({
  userId,
  fingerprint,
  hash,
  isActive,
}: Print): Promise<void> {
  const sql = `
    INSERT INTO fingerprints (
      user_id, 
      fingerprint, 
      hash, 
      is_active, 
      last_used_at
    )
    VALUES ($1, $2, $3, $4, current_timestamp)
    RETURNING id;
  `

  try {
    const result = await query<Print>(sql, [
      userId,
      fingerprint,
      hash,
      isActive,
    ])

    console.log(`inserted print record: ${JSON.stringify(result)}`)
  } catch (error) {
    console.error('error inserting print:', error)
    throw error
  }
}

