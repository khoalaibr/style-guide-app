import React from 'react'
import { X } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faExclamationTriangle, faInfoCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils'

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  variant = 'default',
  showCloseButton = true,
  closeOnOverlayClick = true,
  className,
  ...props
}) => {
  const [isClosing, setIsClosing] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 300)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      handleClose()
    }
  }

  if (!isOpen && !isClosing) return null

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    full: 'max-w-full',
  }

  const variantClasses = {
    default: '',
    destructive: 'border-destructive',
    success: 'border-green-500',
    warning: 'border-yellow-500',
    info: 'border-blue-500',
  }

  const variantIcons = {
    destructive: <FontAwesomeIcon icon={faExclamationTriangle} className="h-5 w-5 text-destructive" />,
    success: <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />,
    warning: <FontAwesomeIcon icon={faExclamationTriangle} className="h-5 w-5 text-yellow-500" />,
    info: <FontAwesomeIcon icon={faInfoCircle} className="h-5 w-5 text-blue-500" />,
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4',
        isClosing ? 'animate-fade-out' : 'animate-fade-in',
      )}
      onClick={handleOverlayClick}
      {...props}
    >
      <div
        className={cn(
          'relative w-full rounded-lg border bg-background p-0 shadow-lg',
          sizeClasses[size],
          variantClasses[variant],
          isClosing ? 'animate-scale-out' : 'animate-scale-in',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            {variant !== 'default' && variantIcons[variant]}
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          {showCloseButton && (
            <button
              onClick={handleClose}
              className="rounded-full p-1 hover:bg-muted"
              aria-label="Cerrar"
            >
              <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="p-4">{children}</div>
        {footer && <div className="border-t p-4">{footer}</div>}
      </div>
    </div>
  )
}

export { Modal }

