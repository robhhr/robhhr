export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputText: React.FC<InputTextProps> = ({...props}) => {
  return (
    <input
      className="w-fit bg-white p-1 text-xs shadow-input"
      {...props}
    />
  )
}

