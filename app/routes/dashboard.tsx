import {LoaderFunctionArgs, redirect} from '@remix-run/node'
import {Outlet} from '@remix-run/react'
import {isUserAuthenticated} from '~/models/auth.server'

export const loader = async ({request}: LoaderFunctionArgs) => {
  const isAuth = await isUserAuthenticated(request)

  if (!isAuth) {
    return redirect('/login')
  }

  return {}
}

const DashboardLayout = () => {
  return (
    <div className="h-screen bg-black text-white">
      <h1>Dashboard layout</h1>
      <Outlet />
    </div>
  )
}

export default DashboardLayout
