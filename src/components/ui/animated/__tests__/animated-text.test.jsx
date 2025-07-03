import React from 'react'
import { render, screen } from '@testing-library/react'
import { AnimatedText } from '@/components/ui/animated'

// Mock framer-motion para evitar problemas con las animaciones en los tests
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion')
  return {
    ...actual,
    motion: {
      div: ({ children, ...props }) => <div data-testid="motion-div" {...props}>{children}</div>,
      span: ({ children, ...props }) => <span data-testid="motion-span" {...props}>{children}</span>
    }
  }
})

describe('AnimatedText Component', () => {
  test('renders text correctly', () => {
    const text = 'Hello, World!'
    render(<AnimatedText text={text} />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  test('applies default variant when none is specified', () => {
    render(<AnimatedText text="Default Variant" />)
    const motionDiv = screen.getByTestId('motion-div')
    expect(motionDiv).toHaveAttribute('initial')
    expect(motionDiv).toHaveAttribute('animate')
  })

  test('applies typewriter variant correctly', () => {
    const text = 'Type Writer'
    render(<AnimatedText text={text} variant="typewriter" />)
    
    // En la variante typewriter, cada carácter se renderiza como un span separado
    const chars = text.split('')
    chars.forEach(char => {
      const spans = screen.getAllByTestId('motion-span')
      const spanWithChar = spans.find(span => span.textContent === char)
      expect(spanWithChar).toBeTruthy()
    })
  })

  test('applies wave variant correctly', () => {
    const text = 'Wave Animation'
    render(<AnimatedText text={text} variant="wave" />)
    
    // En la variante wave, cada palabra se renderiza como un span separado
    const words = text.split(' ')
    words.forEach(word => {
      const spans = screen.getAllByTestId('motion-span')
      const spanWithWord = spans.find(span => span.textContent === word)
      expect(spanWithWord).toBeTruthy()
    })
  })

  test('applies custom delay and duration', () => {
    render(
      <AnimatedText 
        text="Custom Timing" 
        delay={0.5} 
        duration={1.5} 
      />
    )
    
    const motionSpan = screen.getByTestId('motion-span')
    expect(motionSpan).toBeInTheDocument()
  })

  test('applies additional className when provided', () => {
    render(<AnimatedText text="Custom Class" className="custom-text" />)
    const motionDiv = screen.getByTestId('motion-div')
    expect(motionDiv).toHaveClass('custom-text')
  })

  test('renders different variants correctly', () => {
    const variants = [
      'default',
      'typewriter',
      'fadeIn',
      'slideUp',
      'slideDown',
      'slideLeft',
      'slideRight',
      'scale',
      'wave'
    ]
    
    variants.forEach(variant => {
      const { unmount } = render(
        <AnimatedText text={`${variant} Variant`} variant={variant} />
      )
      
      expect(screen.getByText(new RegExp(`${variant} variant`, 'i'))).toBeInTheDocument()
      unmount()
    })
  })
})

