import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal } from '@/components/ui/modal/modal'

// Mock para FontAwesomeIcon
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon, className }) => (
    <span data-testid="font-awesome-icon" className={className}>
      {icon.iconName}
    </span>
  )
}))

// Mock para los iconos de Font Awesome
jest.mock('@fortawesome/free-solid-svg-icons', () => ({
  faTimes: { iconName: 'times' },
  faExclamationTriangle: { iconName: 'exclamation-triangle' },
  faInfoCircle: { iconName: 'info-circle' },
  faCheckCircle: { iconName: 'check-circle' }
}))

describe('Modal Component', () => {
  beforeEach(() => {
    // Limpiar cualquier timeout pendiente después de cada prueba
    jest.useRealTimers()
  })

  test('renders nothing when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        Modal Content
      </Modal>
    )
    
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument()
  })

  test('renders modal content when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Modal">
        Modal Content
      </Modal>
    )
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Modal Content')).toBeInTheDocument()
  })

  test('calls onClose when close button is clicked', async () => {
    jest.useFakeTimers()
    const handleClose = jest.fn()
    
    render(
      <Modal isOpen={true} onClose={handleClose} title="Test Modal">
        Modal Content
      </Modal>
    )
    
    const closeButton = screen.getByRole('button', { name: /cerrar/i })
    await userEvent.click(closeButton)
    
    // Avanzar los temporizadores para que se complete la animación de cierre
    act(() => {
      jest.advanceTimersByTime(300)
    })
    
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  test('calls onClose when overlay is clicked and closeOnOverlayClick is true', async () => {
    jest.useFakeTimers()
    const handleClose = jest.fn()
    
    render(
      <Modal isOpen={true} onClose={handleClose} closeOnOverlayClick={true}>
        Modal Content
      </Modal>
    )
    
    // Encontrar el overlay (el div exterior)
    const overlay = screen.getByText('Modal Content').parentElement.parentElement
    
    // Simular clic en el overlay
    fireEvent.click(overlay)
    
    // Avanzar los temporizadores para que se complete la animación de cierre
    act(() => {
      jest.advanceTimersByTime(300)
    })
    
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  test('does not call onClose when overlay is clicked and closeOnOverlayClick is false', async () => {
    const handleClose = jest.fn()
    
    render(
      <Modal isOpen={true} onClose={handleClose} closeOnOverlayClick={false}>
        Modal Content
      </Modal>
    )
    
    // Encontrar el overlay (el div exterior)
    const overlay = screen.getByText('Modal Content').parentElement.parentElement
    
    // Simular clic en el overlay
    fireEvent.click(overlay)
    
    expect(handleClose).not.toHaveBeenCalled()
  })

  test('calls onClose when Escape key is pressed', () => {
    jest.useFakeTimers()
    const handleClose = jest.fn()
    
    render(
      <Modal isOpen={true} onClose={handleClose}>
        Modal Content
      </Modal>
    )
    
    // Simular presionar la tecla Escape
    fireEvent.keyDown(document, { key: 'Escape' })
    
    // Avanzar los temporizadores para que se complete la animación de cierre
    act(() => {
      jest.advanceTimersByTime(300)
    })
    
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  test('renders different sizes correctly', () => {
    const sizes = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', 'full']
    
    sizes.forEach(size => {
      const { unmount } = render(
        <Modal isOpen={true} onClose={() => {}} size={size} title={`${size} Modal`}>
          {size} Content
        </Modal>
      )
      
      const modalContent = screen.getByText(`${size} Content`).closest('.relative')
      expect(modalContent).toHaveClass(`max-w-${size}`)
      
      unmount()
    })
  })

  test('renders different variants correctly', () => {
    const variants = ['default', 'destructive', 'success', 'warning', 'info']
    
    variants.forEach(variant => {
      const { unmount } = render(
        <Modal isOpen={true} onClose={() => {}} variant={variant} title={`${variant} Modal`}>
          {variant} Content
        </Modal>
      )
      
      if (variant !== 'default') {
        // Verificar que se muestra el icono correspondiente
        const icon = screen.getByTestId('font-awesome-icon')
        expect(icon).toBeInTheDocument()
      }
      
      unmount()
    })
  })

  test('renders footer when provided', () => {
    render(
      <Modal 
        isOpen={true} 
        onClose={() => {}} 
        title="Modal with Footer"
        footer={<button>Footer Button</button>}
      >
        Modal Content
      </Modal>
    )
    
    expect(screen.getByText('Footer Button')).toBeInTheDocument()
  })

  test('does not render close button when showCloseButton is false', () => {
    render(
      <Modal 
        isOpen={true} 
        onClose={() => {}} 
        title="Modal without Close Button"
        showCloseButton={false}
      >
        Modal Content
      </Modal>
    )
    
    expect(screen.queryByRole('button', { name: /cerrar/i })).not.toBeInTheDocument()
  })

  test('applies additional className when provided', () => {
    render(
      <Modal 
        isOpen={true} 
        onClose={() => {}} 
        className="custom-modal"
      >
        Modal Content
      </Modal>
    )
    
    const modalContent = screen.getByText('Modal Content').closest('.relative')
    expect(modalContent).toHaveClass('custom-modal')
  })
})

