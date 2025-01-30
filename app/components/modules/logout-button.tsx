import {useFetcher} from '@remix-run/react'
import {Button} from './button'

export const LogoutButton = () => {
  const fetcher = useFetcher()

  return (
    <div>
      <fetcher.Form action="/logout" method="post">
        <Button intent="admin" type="submit">
          logout
        </Button>
      </fetcher.Form>
    </div>
  )
}

