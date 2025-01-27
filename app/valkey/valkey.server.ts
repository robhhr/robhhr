// NOTE: used only when attempting to log into admin
import {randomUUID} from 'crypto'
import Valkey from 'iovalkey'

export const valkeyClient = new Valkey({
  port: 6379,
  host: '127.0.0.1',
  password: process.env.REDIS_PASSWORD,
})

export const createValkeySession = async (
  userId: string,
  username: string,
  fingerprint: string,
) => {
  const sessionToken = randomUUID()
  const sessionData = {
    userId,
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

export const checkValkeySession = async (userId: string) => {
  try {
    const keys = await valkeyClient.keys('session:*');

    for (const key of keys) {
      const sessionData = await valkeyClient.get(key);

      if (sessionData) {
        const session = JSON.parse(sessionData);

        if (session.userId === userId) {
          console.log('matching session found:', session);
          return session;
        }
      }
    }

    console.log('no matching session found for userId:', userId);
    return null;
  } catch (error) {
    console.error('error checking redis session:', error);
    return null;
  }
};

