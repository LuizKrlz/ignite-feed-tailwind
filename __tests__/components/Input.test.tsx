import { Input } from '@/components'
import { render, screen } from '@testing-library/react'

const DEFAULT_CLASSES = [
  'bg-gray1',
  'text-gray6',
  'text-md',
  'h-24',
  'w-full',
  'rounded-lg',
  'p-4',
  'placeholder:text-gray4',
]

const FOCUS_VISIBLE_CLASSES = [
  'focus-visible:outline-greenBase',
  'focus-visible:outline-double',
]

const INVALID_CLASSES = [
  'data-[invalid=true]:border-danger',
  'data-[invalid=true]:outline-danger',
  'data-[invalid=true]:border-solid',
]

describe('Components | Input', () => {
  describe('Components', () => {
    it('should ', () => {
      render(<Input placeholder="Test placeholder" />)

      expect(
        screen.getByPlaceholderText('Test placeholder'),
      ).toBeInTheDocument()
    })

    it('should be render with default class style', () => {
      const { container } = render(<Input placeholder="Test placeholder" />)

      const textarea = container.querySelector('textarea')

      DEFAULT_CLASSES.map((item) => {
        expect(textarea?.classList.contains(item)).toBeTruthy()
      })
    })
  })
  describe('Behavior', () => {
    it('should be change border color when is invalid', () => {
      const { container } = render(
        <Input isInvalid placeholder="Test placeholder" />,
      )

      const textarea = container.querySelector('textarea')

      INVALID_CLASSES.map((item) => {
        expect(textarea?.classList.contains(item)).toBeTruthy()
      })
    })

    it('should be change border color when focus visible', () => {
      const { container } = render(
        <Input isInvalid placeholder="Test placeholder" />,
      )

      const textarea = container.querySelector('textarea')

      FOCUS_VISIBLE_CLASSES.map((item) => {
        expect(textarea?.classList.contains(item)).toBeTruthy()
      })
    })
  })
})
