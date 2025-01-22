import {type LoaderFunctionArgs} from '@remix-run/node'
import {requireUser} from '~/models/auth.server'

export const loader = async ({request}: LoaderFunctionArgs) => {
  // const userId = await requireUser(request)
  const userId = true
  return {userId}
}

const Admin = () => {
  return <div>admin page</div>
}

export default Admin

