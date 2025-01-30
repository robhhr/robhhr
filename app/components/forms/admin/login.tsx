import {Form} from '@remix-run/react'
import {cx} from 'class-variance-authority'
import {useState} from 'react'
import {IconCheckmark} from '~/components/icons/checkmark'
import {IconEye, IconEyeClose} from '~/components/icons/eye'
import {Button} from '~/components/modules/button'
import {InputText} from '~/components/ui/admin/input-text'
import {TitleBar} from '~/components/ui/admin/title-bar'
import type {LoginFormProps} from '~/types/admin/forms'

export const LoginForm = ({
  fingerprint,
  toggleRemember,
  remember,
}: LoginFormProps) => {
  const [togglePassword, setTogglePassword] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setTogglePassword(!togglePassword)
  }

  return (
    <div className="flex w-4/5 flex-col bg-silver p-[3px] shadow-window md:w-1/3">
      <TitleBar title="admin" />

      <Form method="post" className="m-2">
        <input type="hidden" name="action" value="login" />

        <div className="flex flex-col font-ms-sans-serif text-xs">
          <label htmlFor="username" className="mb-1.5">
            username
          </label>
          <InputText name="username" />
        </div>

        <div className="mt-2 flex flex-col font-ms-sans-serif text-xs">
          <label htmlFor="password" className="mb-1.5">
            password
          </label>

          <div className="relative w-fit">
            <InputText
              name="password"
              type={togglePassword ? 'text' : 'password'}
              className="pr-6"
            />

            <button
              className="absolute right-1.5 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={e => {
                e.preventDefault()
                togglePasswordVisibility()
              }}
            >
              {togglePassword ? <IconEyeClose /> : <IconEye />}
            </button>
          </div>
        </div>

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

        <div className="my-2.5 flex items-center font-ms-sans-serif text-xs">
          <button
            type="button"
            aria-label="remember me"
            onClick={e => {
              e.preventDefault()
              toggleRemember()
            }}
            className={cx(
              'flex h-3.5 w-3.5 cursor-pointer items-center justify-center shadow-input',
              'inset-input bg-white',
            )}
          >
            {remember && <IconCheckmark />}
          </button>
          <span className="ml-1">remember me</span>
        </div>

        <input
          type="hidden"
          name="remember"
          value={remember ? 'true' : 'false'}
        />

        <Button intent="admin" type="submit">
          login
        </Button>
      </Form>
    </div>
  )
}

