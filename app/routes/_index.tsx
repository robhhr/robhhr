import {type LoaderFunctionArgs, MetaFunction} from '@remix-run/node'
import {requireUser} from '~/models/auth.server'

export const meta: MetaFunction = () => {
  return [
    {title: 'New Remix App'},
    {name: 'description', content: 'Welcome to Remix!'},
  ]
}

export const loader = async ({request}: LoaderFunctionArgs) => {
  const userId = await requireUser(request)
  return {userId}
}

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <p className="font-ms-sans-serif">hello there</p>
      </div>
    </div>
  )
}

