import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/components/ui/button'

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeInTheDocument()
  })

  test('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    await userEvent.click(buttonElement)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('renders different variants correctly', () => {
    const { rerender } = render(<Button variant="default">Default</Button>)
    expect(screen.getByRole('button', { name: /default/i })).toHaveClass('bg-primary')
    
    rerender(<Button variant="destructive">Destructive</Button>)
    expect(screen.getByRole('button', { name: /destructive/i })).toHaveClass('bg-destructive')
    
    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole('button', { name: /outline/i })).toHaveClass('border')
    
    rerender(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole('button', { name: /secondary/i })).toHaveClass('bg-secondary')
    
    rerender(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByRole('button', { name: /ghost/i })).toHaveClass('hover:bg-accent')
    
    rerender(<Button variant="link">Link</Button>)
    expect(screen.getByRole('button', { name: /link/i })).toHaveClass('text-primary')
  })

  test('renders different sizes correctly', () => {
    const { rerender } = render(<Button size="default">Default</Button>)
    expect(screen.getByRole('button', { name: /default/i })).toHaveClass('h-10 px-4 py-2')
    
    rerender(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button', { name: /small/i })).toHaveClass('h-9 px-3')
    
    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button', { name: /large/i })).toHaveClass('h-11 px-8')
    
    rerender(<Button size="icon">Icon</Button>)
    expect(screen.getByRole('button', { name: /icon/i })).toHaveClass('h-10 w-10')
  })

  test('disables the button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    const buttonElement = screen.getByRole('button', { name: /disabled/i })
    
    expect(buttonElement).toBeDisabled()
    expect(buttonElement).toHaveClass('opacity-50 cursor-not-allowed')
  })

  test('applies additional className when provided', () => {
    render(<Button className="custom-class">Custom</Button>)
    const buttonElement = screen.getByRole('button', { name: /custom/i })
    
    expect(buttonElement).toHaveClass('custom-class')
  })

  test('renders as a different element when asChild is true', () => {
    render(
      <Button asChild>
        <a href="https://example.com">Link Button</a>
      </Button>
    )
    
    const linkElement = screen.getByRole('link', { name: /link button/i })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', 'https://example.com')
    expect(linkElement).toHaveClass('inline-flex items-center justify-center')
  })
})

