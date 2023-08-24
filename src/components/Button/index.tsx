import { ComponentProps, ReactElement, cloneElement } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'px-6 py-4 h-12 flex items-center justify-center transition-colors rounded-lg',
  variants: {
    variant: {
      solid_green:
        'bg-greenBase text-white font-bold text-md hover:bg-greenLight',
      outline_green:
        'border border-greenLight  text-greenLight text-md font-bold hover:bg-greenBase hover:text-white',
      ghost:
        'text-sm text-gray5 font-bold hover:text-gray7 active:text-greenLight',
      iconButton: 'text-white hover:text-danger',
    },
  },
})

const iconClass = tv({
  variants: {
    variant: {
      solid_green: ' text-white font-bold hover:text-greenLight',
      outline_green: 'text-greenLight hover:text-white',
      ghost: 'text-gray5 hover:text-gray7 active:text-greenLight',
    },
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {
  icon?: ReactElement
}

export function Button({
  variant,
  className,
  children,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <button className={button({ variant, className })} {...rest}>
      {icon && (
        <div className="mr-2">
          {cloneElement(icon as ReactElement, {
            clasName: iconClass({ variant }),
            size: 18,
          })}
        </div>
      )}

      {children}
    </button>
  )
}
