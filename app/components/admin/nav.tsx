import {Link} from '@remix-run/react'

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/projects">Projects</Link>
        </li>
        <li>
          <Link to="/dashboard/thoughts">Thoughts</Link>
        </li>
      </ul>
    </nav>
  )
}
