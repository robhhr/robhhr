// NOTE: used only when attempting to log into admin
import {randomUUID} from 'crypto'
import Valkey from 'iovalkey'

interface ValkeySession {
  userId: string
  username?: string
  fingerprint: string
  loginTime?: string
  is2FA?: boolean
  remember?: boolean
}

export const valkeyClient = new Valkey({
  port: 6379,
  host: '127.0.0.1',
  password: process.env.REDIS_PASSWORD,
})

export const createValkeySession = async ({
  userId,
  username,
  fingerprint,
  is2FA,
  remember = false,
}: ValkeySession) => {
  const sessionToken = randomUUID()
  const sessionData = {
    userId,
    username,
    fingerprint,
    loginTime: Date.now().toString(),
    is2FA: is2FA || false,
  }

  // NOTE: create valkey session
  try {
    await valkeyClient.set(
      `session:${sessionToken}`,
      JSON.stringify(sessionData),
      'EX',
      // 30 days vs 30min
      remember ? 30 * 24 * 60 * 60 : 1800,
    )
  } catch (error) {
    console.error('error creating redis session:', error)
  }

  return {sessionToken, sessionData}
}

export const checkValkeySession = async (userId: string) => {
  try {
    const keys = await valkeyClient.keys('session:*')

    for (const key of keys) {
      const sessionData = await valkeyClient.get(key)

      if (sessionData) {
        const session = JSON.parse(sessionData)

        if (session.userId === userId) {
          console.log('matching session found:', session)
          return session
        }
      }
    }

    console.log('no matching session found for userId:', userId)
    return null
  } catch (error) {
    console.error('error checking redis session:', error)
    return null
  }
}

export const destroyValkeySession = async (sessionToken: string) => {
  try {
    await valkeyClient.del(`session:${sessionToken}`)
  } catch (error) {
    console.error('error destroying redis session:', error)
  }
}
