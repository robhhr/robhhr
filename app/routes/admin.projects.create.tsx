import {useState} from 'react'
import {Form, useActionData} from '@remix-run/react'
import {InputText} from '~/components/ui/admin/input-text'
import {Select} from '~/components/ui/admin/select'
import type {CreateProjectFormProps} from '~/types/admin/forms'
import MarkdownEditor from '~/components/ui/admin/text-editor'
import {redirect, type ActionFunctionArgs} from '@remix-run/node'
import {createProject} from '~/models/projects.server'
import {Button} from '~/components/modules/button'
import {isUserAuthenticated} from '~/models/auth.server'

// export const loader = () => {
//   return {}
// }

export const action = async ({request}: ActionFunctionArgs) => {
  const isAuth = await isUserAuthenticated(request)

  if (!isAuth) {
    return redirect('/login')
  }

  const body = await request.formData()
  const status = body.get('status') as string
  const title = body.get('title') as string
  const content = body.get('content') as string

  await createProject({status, title, content})

  return {status, title, content}
}

const DashboardProjectsCreate = ({onChange}: CreateProjectFormProps) => {
  const [selected, setSelected] = useState('draft')
  // const actionData = useActionData<typeof action>()
  // console.log(actionData, ' actionData')

  return (
    <Form method="post" className="mt-4">
      <input type="hidden" name="action" value="login" />

      <div className="flex flex-col font-ms-sans-serif text-xs">
        <label htmlFor="status" className="mb-1.5">
          status
        </label>

        <Select
          name="status"
          options={[
            {value: 'draft', label: 'draft'},
            {value: 'publish', label: 'publish'},
          ]}
          value={selected}
          onChange={e => setSelected(e.target.value)}
        />
      </div>

      <div className="mt-2 flex flex-col font-ms-sans-serif text-xs">
        <label htmlFor="title" className="mb-1.5">
          title
        </label>
        <InputText name="title" onChange={onChange} />
      </div>

      <div className="mb-2.5 mt-2 flex flex-col font-ms-sans-serif text-xs">
        <MarkdownEditor />
      </div>

      <Button intent="admin" type="submit">
        create
      </Button>
    </Form>
  )
}

export default DashboardProjectsCreate
