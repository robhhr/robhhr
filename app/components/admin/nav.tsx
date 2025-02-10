import {Link} from '@remix-run/react'

export const Nav = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link to="/admin">index</Link>
        </li>
        <li>
          <Link to="/admin/projects">Projects</Link>
        </li>
        <li>
          <Link to="/admin/thoughts">Thoughts</Link>
        </li>
      </ul>
    </nav>
  )
}
