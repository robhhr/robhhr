import {Outlet} from '@remix-run/react'
import {ToggleTheme} from '~/components/modules/toggle-theme'
import ControlsProjects from '~/components/admin/controls-projects'

export const loader = () => {
  return {}
}

const DashboardProjects = () => {
  return (
    <>
      <ToggleTheme />
      <ControlsProjects />
      <Outlet />
    </>
  )
}

export default DashboardProjects
