import {useEffect, useState} from 'react'
import {Form, useActionData, useNavigation} from '@remix-run/react'
import {InputText} from '~/components/ui/admin/input-text'
import {Select} from '~/components/ui/admin/select'
import type {CreateProjectFormProps} from '~/types/admin/forms'
import MarkdownEditor from '~/components/ui/admin/text-editor'
import {redirect, type ActionFunctionArgs} from '@remix-run/node'
import {createProject} from '~/models/projects.server'
import {Button} from '~/components/modules/button'
import {isUserAuthenticated} from '~/models/auth.server'
import MetaControls from '~/components/ui/admin/meta'
import {FeedbackDialog} from '~/components/ui/admin/dialog'

// export const loader = () => {
//   return {}
// }

export const action = async ({request}: ActionFunctionArgs) => {
  const isAuth = await isUserAuthenticated(request)

  // if (!isAuth) {
  //   return redirect('/login')
  // }

  const body = await request.formData()
  const status = body.get('status') as string
  const title = body.get('title') as string
  const content = body.get('content') as string
  const meta = body.get('meta') as string

  if (!status || !title || !content) {
    return {error: 'all fields are required'}
  }

  try {
    await createProject({status, title, content, meta})
  } catch (error) {
    console.error('error inserting project:', error)
    return {error: 'error creating project'}
  }

  return {status, title, content, meta}
}

const DashboardProjectsCreate = () => {
  const [selected, setSelected] = useState('draft')
  const [error, setError] = useState<string | null>(null)
  // const navigation = useNavigation()
  const actionData = useActionData<typeof action>()
  // console.log(actionData, ' actionData')
  // console.log(actionData && JSON.parse(actionData.meta))

  // console.log(navigation)
  console.log(actionData, ' actionData')

  useEffect(() => {
    if (actionData?.error) {
      setError(actionData.error)
    }
  }, [actionData])

  const handleChange = () => setError(null)

  return (
    <>
      <Form method="post" className="mt-4 font-ms-sans-serif text-xs">
        <input type="hidden" name="action" value="login" />

        <div className="flex flex-col">
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
            onChange={e => {
              setSelected(e.target.value)
              handleChange()
            }}
          />
        </div>

        <div className="mt-2 flex flex-col">
          <label htmlFor="title" className="mb-1.5">
            title
          </label>
          <InputText name="title" onChange={handleChange} />
        </div>

        <div className="mb-2.5 mt-2 flex flex-col">
          <MarkdownEditor setError={setError} />
        </div>

        <p>meta</p>

        <div className="mt-2 flex flex-col">
          <MetaControls />
        </div>

        <Button className="mt-7" intent="admin" type="submit">
          create
        </Button>
      </Form>

      <FeedbackDialog actionData={error ? {error} : undefined} />
    </>
  )
}

export default DashboardProjectsCreate
