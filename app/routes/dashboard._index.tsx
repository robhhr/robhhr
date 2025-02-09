import { json, LoaderFunctionArgs } from "@remix-run/node"
import { Outlet } from "@remix-run/react"

export const loader = async ({request}: LoaderFunctionArgs) => {
  return true
}

const Dashboard = () => {
  return (
    <>
    <div>dashboard</div>
    </>
  )
}

export default Dashboard
