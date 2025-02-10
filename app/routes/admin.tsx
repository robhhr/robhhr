import {redirect, type LoaderFunctionArgs} from '@remix-run/node'
import {Outlet} from '@remix-run/react'
import {Nav} from '~/components/admin/nav'
import {isUserAuthenticated} from '~/models/auth.server'

export const loader = async ({request}: LoaderFunctionArgs) => {
  const isAuth = await isUserAuthenticated(request)

  if (!isAuth) {
    return redirect('/login')
  }

  return {}
}

const AdminLayout = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Nav />
      <Outlet />
    </div>
  )
}

export default AdminLayout
