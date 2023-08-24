import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'textarea'> {
  isInvalid?: boolean
}

export function Input({ isInvalid, ...props }: InputProps) {
  return (
    <textarea
      data-invalid={isInvalid}
      className="bg-gray1 text-gray6 text-md focus-visible:outline-greenBase placeholder:text-gray4 data-[invalid=true]:border-danger data-[invalid=true]:outline-danger h-24 w-full rounded-lg p-4 focus-visible:outline-double data-[invalid=true]:border-solid"
      {...props}
    />
  )
}
