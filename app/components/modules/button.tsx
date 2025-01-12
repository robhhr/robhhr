import {cva, cx, type VariantProps} from 'class-variance-authority'

const button = cva('button w-fit', {
  variants: {
    intent: {
      admin: [
        'bg-silver text-shadow-button text-xs min-h-[1.4375rem] px-3 shadow-button-admin',
        'focus:outline-1 focus:outline-dotted focus:ring-black focus:-outline-offset-4',
        'active:shadow-button-admin-pressed',
      ],
    },
    disabled: {
      false: null,
      true: 'pointer-events-none',
    },
  },
  compoundVariants: [
    {
      intent: 'admin',
      disabled: true,
      className: 'text-shadow-button-disabled text-[grey]',
    },
  ],
  defaultVariants: {
    intent: 'admin',
  },
})

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  disabled,
  ...props
}) => (
  <button
    type={props.type || 'button'}
    className={cx(button({intent, disabled}), className)}
    disabled={disabled || undefined}
    {...props}
  />
)

