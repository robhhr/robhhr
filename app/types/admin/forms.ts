import {type FingerprintResult} from '~/hooks/useFingerprint'

export type LoginFormProps = {
  fingerprint?: FingerprintResult
  remember?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  toggleRemember: () => void
}

export type CreateProjectFormProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type CodeAuthFormProps = Pick<LoginFormProps, 'fingerprint'>

