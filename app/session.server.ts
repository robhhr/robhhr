import {createCookie, createCookieSessionStorage} from '@remix-run/node'

type SessionData = {
  userId: string
}

type SessionFlashData = {
  error: string
}

const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set in your environment variables");
}

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>(
    {
      cookie: {
        name: "__session",
        domain: "remix.run",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
        sameSite: "lax",
        secrets: [sessionSecret],
        secure: true,
      },
    }
  );

export { getSession, commitSession, destroySession };

