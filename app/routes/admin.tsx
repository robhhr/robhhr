import {type LoaderFunctionArgs} from '@remix-run/node'
import {requireUser} from '~/models/auth'

export const loader = async ({request}: LoaderFunctionArgs) => {
  const userId = await requireUser(request)
  return {userId}
}

const Admin = () => {
  return <div>admin page</div>
}

export default Admin

