import {NavLink} from '@remix-run/react'

const Link = ({children, to}: {children: React.ReactNode; to: string}) => {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        `rounded-t-[3px] bg-silver dark:bg-background-admin-dark p-1.5 font-ms-sans-serif text-sm text-default dark:text-color-dark shadow-nav focus:outline-dotted focus:outline-1 focus:-outline-offset-4 focus:ring-black ${isActive && '-ml-[3px] -mt-0.5 pt-2.5 focus:outline-none'}`
      }
    >
      {children}
    </NavLink>
  )
}

export const Nav = () => {
  return (
    <nav className="ml-[3px]">
      <ul className="relative flex md:-mb-0.5 md:flex-row">
        <li>
          <Link to="/admin/projects">projects</Link>
        </li>
        <li>
          <Link to="/admin/thoughts">thoughts</Link>
        </li>
      </ul>
    </nav>
  )
}
