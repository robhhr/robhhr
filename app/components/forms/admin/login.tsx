import {Form} from '@remix-run/react'
import {cx} from 'class-variance-authority'
import {IconCheckmark} from '~/components/icons/checkmark'
import {Button} from '~/components/modules/button'
import type {LoginFormProps} from '~/types/admin/forms'

export const LoginForm = ({
  fingerprint,
  toggleRemember,
  remember,
}: LoginFormProps) => {
  return (
    <div>
      <Form method="post">
        <input type="hidden" name="action" value="login" />

        <div className="flex flex-col font-ms-sans-serif text-xs">
          <label htmlFor="username">username</label>
          <input
            // required
            type="text"
            name="username"
            className="w-fit bg-white p-1 text-xs shadow-input"
            // onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col font-ms-sans-serif text-xs">
          <label htmlFor="password">password</label>
          <input
            // required
            type="password"
            name="password"
            className="w-fit bg-white p-1 text-xs shadow-input"
            // onChange={e => setPassword(e.target.value)}
          />
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

        <div className="flex font-ms-sans-serif text-xs">
          <button
            type="button"
            aria-label="remember me"
            onClick={e => {
              e.preventDefault()
              toggleRemember()
            }}
            className={cx(
              'block h-3.5 w-3.5 cursor-pointer shadow-input',
              'inset-input bg-white',
            )}
          >
            {remember && <IconCheckmark />}
          </button>
          remember me
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

