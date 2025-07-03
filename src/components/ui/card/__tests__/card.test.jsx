import React from 'react'
import { render, screen } from '@testing-library/react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'

describe('Card Components', () => {
  describe('Card Component', () => {
    test('renders with children', () => {
      render(<Card>Card Content</Card>)
      expect(screen.getByText('Card Content')).toBeInTheDocument()
    })

    test('applies additional className when provided', () => {
      render(<Card className="custom-class">Card Content</Card>)
      const cardElement = screen.getByText('Card Content').closest('div')
      expect(cardElement).toHaveClass('custom-class')
    })

    test('forwards ref to the DOM element', () => {
      const ref = React.createRef()
      render(<Card ref={ref}>Card Content</Card>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  describe('CardHeader Component', () => {
    test('renders with children', () => {
      render(<CardHeader>Header Content</CardHeader>)
      expect(screen.getByText('Header Content')).toBeInTheDocument()
    })

    test('applies additional className when provided', () => {
      render(<CardHeader className="custom-header">Header Content</CardHeader>)
      const headerElement = screen.getByText('Header Content').closest('div')
      expect(headerElement).toHaveClass('custom-header')
    })
  })

  describe('CardFooter Component', () => {
    test('renders with children', () => {
      render(<CardFooter>Footer Content</CardFooter>)
      expect(screen.getByText('Footer Content')).toBeInTheDocument()
    })

    test('applies additional className when provided', () => {
      render(<CardFooter className="custom-footer">Footer Content</CardFooter>)
      const footerElement = screen.getByText('Footer Content').closest('div')
      expect(footerElement).toHaveClass('custom-footer')
    })
  })

  describe('CardTitle Component', () => {
    test('renders with children', () => {
      render(<CardTitle>Card Title</CardTitle>)
      expect(screen.getByText('Card Title')).toBeInTheDocument()
    })

    test('applies additional className when provided', () => {
      render(<CardTitle className="custom-title">Card Title</CardTitle>)
      expect(screen.getByText('Card Title')).toHaveClass('custom-title')
    })

    test('renders as h3 by default', () => {
      render(<CardTitle>Card Title</CardTitle>)
      const titleElement = screen.getByText('Card Title')
      expect(titleElement.tagName).toBe('H3')
    })

    test('renders as a different element when specified', () => {
      render(<CardTitle as="h2">Card Title</CardTitle>)
      const titleElement = screen.getByText('Card Title')
      expect(titleElement.tagName).toBe('H2')
    })
  })

  describe('CardDescription Component', () => {
    test('renders with children', () => {
      render(<CardDescription>Card Description</CardDescription>)
      expect(screen.getByText('Card Description')).toBeInTheDocument()
    })

    test('applies additional className when provided', () => {
      render(<CardDescription className="custom-desc">Card Description</CardDescription>)
      expect(screen.getByText('Card Description')).toHaveClass('custom-desc')
    })
  })

  describe('CardContent Component', () => {
    test('renders with children', () => {
      render(<CardContent>Content</CardContent>)
      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    test('applies additional className when provided', () => {
      render(<CardContent className="custom-content">Content</CardContent>)
      const contentElement = screen.getByText('Content').closest('div')
      expect(contentElement).toHaveClass('custom-content')
    })
  })

  describe('Card Composition', () => {
    test('renders a complete card with all subcomponents', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      )

      expect(screen.getByText('Card Title')).toBeInTheDocument()
      expect(screen.getByText('Card Description')).toBeInTheDocument()
      expect(screen.getByText('Card Content')).toBeInTheDocument()
      expect(screen.getByText('Card Footer')).toBeInTheDocument()
    })
  })
})

