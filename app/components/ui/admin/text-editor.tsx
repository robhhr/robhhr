import {cx} from 'class-variance-authority'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea: React.FC<TextAreaProps> = ({className, ...props}) => {
  return (
    <textarea
      className={cx(
        'w-full max-w-96 resize-none bg-white p-2 text-sm shadow-input',
        className,
      )}
      {...props}
    />
  )
}
