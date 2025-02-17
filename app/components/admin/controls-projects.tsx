import { Button } from '../modules/button'

const ControlsProjects = () => {
  return (
      <ul className="flex">
        <li className="mr-2">
          <Button to="/admin/projects">view all</Button>
        </li>
        <li>
          <Button to="/admin/projects/create">create project</Button>
        </li>
      </ul>
  )
}

export default ControlsProjects
