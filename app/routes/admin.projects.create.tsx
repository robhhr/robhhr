import {Form} from '@remix-run/react'
import {InputText} from '~/components/ui/admin/input-text'
import type {CreateProjectFormProps} from '~/types/admin/forms'

const DashboardProjectsCreate = ({onChange}: CreateProjectFormProps) => {
  return (
    <Form className="mt-4">
      <input type="hidden" name="action" value="login" />

      <div className="mt-2 flex flex-col font-ms-sans-serif text-xs">
        <label htmlFor="status" className="mb-1.5">
          status
        </label>
      </div>

      <div className="flex flex-col font-ms-sans-serif text-xs">
        <label htmlFor="title" className="mb-1.5">
          name
        </label>
        <InputText name="title" onChange={onChange} />
      </div>
    </Form>
  )
}

export default DashboardProjectsCreate
