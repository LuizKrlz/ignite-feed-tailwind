import { Button } from '@/components'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const BUTTON_BASE = [
  'px-6',
  'py-4',
  'h-12',
  'flex',
  'items-center',
  'justify-center',
  'transition-colors',
  'rounded-lg',
]

const BUTTON_SOLID_GREEN = [
  'bg-greenBase',
  'text-white',
  'font-bold',
  'text-md',
]

const BUTTON_OUTLINE_GREEN = [
  'border',
  'border-greenLight',
  'text-greenLight',
  'text-md',
  'font-bold',
]

const BUTTON_GHOST = ['text-sm', 'text-gray5', 'font-bold']

describe('Components | Button', () => {
  describe('Rendering', () => {
    it('should be render correctly', () => {
      render(<Button>Test</Button>)

      const button = screen.getByRole('button', {
        name: 'Test',
      })

      BUTTON_BASE.map((item) => {
        expect(button.classList.contains(item)).toBeTruthy()
      })
    })

    it('should be render config solid_green variant', () => {
      render(<Button variant="solid_green">Test</Button>)

      const button = screen.getByRole('button', {
        name: 'Test',
      })

      BUTTON_SOLID_GREEN.map((item) => {
        expect(button.classList.contains(item)).toBeTruthy()
      })
    })

    it('should be render config outline_green variant', () => {
      render(<Button variant="outline_green">Test</Button>)

      const button = screen.getByRole('button', {
        name: 'Test',
      })

      BUTTON_OUTLINE_GREEN.map((item) => {
        expect(button.classList.contains(item)).toBeTruthy()
      })
    })

    it('should be render config ghost variant', () => {
      render(<Button variant="ghost">Test</Button>)

      const button = screen.getByRole('button', {
        name: 'Test',
      })

      BUTTON_GHOST.map((item) => {
        expect(button.classList.contains(item)).toBeTruthy()
      })
    })

    it('should be render config iconButton variant', () => {
      render(<Button variant="iconButton">Test</Button>)

      const button = screen.getByRole('button', {
        name: 'Test',
      })

      expect(button.classList.contains('text-white')).toBeTruthy()
    })
  })

  describe('Behavior', () => {
    it('should be apply hover effect when variant is solid_green', () => {
      render(<Button variant="solid_green">Test</Button>)

      const button = screen.getByRole('button', {
        name: 'Test',
      })

      expect(button.classList.contains('hover:bg-greenLight')).toBeTruthy()
    })

    it('should be apply hover effect when variant is outline_green', () => {
      render(<Button variant="outline_green">Test</Button>)

      const button = screen.getByRole('button', {
        name: 'Test',
      })

      expect(button.classList.contains('hover:bg-greenBase')).toBeTruthy()
    })
    it('should be apply hover effect when variant is ghost', () => {
      render(<Button variant="ghost">Test</Button>)

      const button = screen.getByRole('button', {
        name: 'Test',
      })

      expect(button.classList.contains('hover:text-gray7')).toBeTruthy()
      expect(button.classList.contains('active:text-greenLight')).toBeTruthy()
    })
    it('should be apply hover effect when variant is iconButton', () => {
      render(<Button variant="iconButton">Test</Button>)

      const button = screen.getByRole('button', {
        name: 'Test',
      })

      expect(button.classList.contains('hover:text-danger')).toBeTruthy()
    })
  })
})
