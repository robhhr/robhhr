import {LoaderFunctionArgs} from '@remix-run/node'

export const loader = async ({request}: LoaderFunctionArgs) => {
  const userId = '1'
  return {userId}
}

const Login = () => {
  return (
    <div>
      <p>login</p>
    </div>
  )
}

export default Login

