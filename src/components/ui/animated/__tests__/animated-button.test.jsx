import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AnimatedButton } from '@/components/ui/animated'

// Mock framer-motion para evitar problemas con las animaciones en los tests
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion')
  return {
    ...actual,
    motion: {
      div: ({ children, ...props }) => <div data-testid="motion-div" {...props}>{children}</div>
    }
  }
})

describe('AnimatedButton Component', () => {
  test('renders button with text', () => {
    render(<AnimatedButton>Click me</AnimatedButton>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  test('applies default animation props', () => {
    render(<AnimatedButton>Click me</AnimatedButton>)
    const motionDiv = screen.getByTestId('motion-div')
    
    // Verificar que se aplican las animaciones predeterminadas
    expect(motionDiv).toHaveAttribute('initial')
    expect(motionDiv).toHaveAttribute('animate')
    expect(motionDiv).toHaveAttribute('whileHover')
    expect(motionDiv).toHaveAttribute('whileTap')
    expect(motionDiv).toHaveAttribute('transition')
  })

  test('passes variant and size props to Button component', () => {
    render(
      <AnimatedButton variant="destructive" size="lg">
        Destructive Button
      </AnimatedButton>
    )
    
    const button = screen.getByRole('button', { name: /destructive button/i })
    expect(button).toHaveClass('bg-destructive')
    expect(button).toHaveClass('h-11')
  })

  test('applies custom animation props when provided', () => {
    const customWhileHover = { scale: 1.2, rotate: 10 }
    const customWhileTap = { scale: 0.8 }
    
    render(
      <AnimatedButton
        whileHover={customWhileHover}
        whileTap={customWhileTap}
      >
        Custom Animation
      </AnimatedButton>
    )
    
    const motionDiv = screen.getByTestId('motion-div')
    
    // Verificar que se aplican las animaciones personalizadas
    expect(motionDiv).toHaveAttribute('whileHover', JSON.stringify(customWhileHover))
    expect(motionDiv).toHaveAttribute('whileTap', JSON.stringify(customWhileTap))
  })

  test('forwards additional props to Button component', async () => {
    const handleClick = jest.fn()
    
    render(
      <AnimatedButton onClick={handleClick} disabled>
        Disabled Button
      </AnimatedButton>
    )
    
    const button = screen.getByRole('button', { name: /disabled button/i })
    expect(button).toBeDisabled()
    
    await userEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  test('applies additional className when provided', () => {
    render(<AnimatedButton className="custom-class">Custom Button</AnimatedButton>)
    const motionDiv = screen.getByTestId('motion-div')
    expect(motionDiv).toHaveClass('custom-class')
  })
})

