import {type FingerprintResult} from '~/hooks/useFingerprint'

export type LoginFormProps = {
  fingerprint?: FingerprintResult
  remember?: boolean
  toggleRemember: () => void
}

export type CodeAuthFormProps = Pick<LoginFormProps, 'fingerprint'>

