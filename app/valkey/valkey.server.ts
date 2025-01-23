// NOTE: used only when attempting to log into admin
import {randomUUID} from 'crypto'
import Valkey from 'iovalkey'

export const valkeyClient = new Valkey({
  port: 6379,
  host: '127.0.0.1',
  password: process.env.REDIS_PASSWORD,
})

export const createValkeySession = async (
  username: string,
  fingerprint: string,
) => {
  const sessionToken = randomUUID()
  const sessionData = {
    username,
    fingerprint,
    loginTime: Date.now().toString(),
  }

  // NOTE: create valkey session
  await valkeyClient.set(
    `session:${sessionToken}`,
    JSON.stringify(sessionData),
    'EX',
    3600,
  )

  return {sessionToken, sessionData}
}

