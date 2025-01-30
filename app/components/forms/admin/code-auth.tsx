import {Form} from '@remix-run/react'
import {Button} from '~/components/modules/button'
import {InputText} from '~/components/ui/admin/input-text'
import {TitleBar} from '~/components/ui/admin/title-bar'
import type {CodeAuthFormProps} from '~/types/admin/forms'

export const CodeAuthForm = ({fingerprint}: CodeAuthFormProps) => {
  return (
    <div className="flex w-4/5 flex-col bg-silver p-[3px] shadow-window md:w-1/3">
      <TitleBar title="2FA" />

      <Form method="post" className="m-2 flex flex-col">
        <input type="hidden" name="action" value="2FA" />
        <input
          type="hidden"
          name="fingerprint"
          value={fingerprint?.hash || ''}
        />
        <input
          type="hidden"
          name="fingerprintData"
          value={fingerprint ? JSON.stringify(fingerprint.data) : ''}
        />
        <label htmlFor="code" className="mb-1.5 font-ms-sans-serif text-xs">
          code
        </label>
        <InputText name="code" />
        <Button intent="admin" type="submit" className="my-2.5">
          login
        </Button>
      </Form>
    </div>
  )
}

