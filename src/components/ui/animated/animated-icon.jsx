import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AnimatedIcon = ({
  icon,
  className,
  variant = 'default',
  size = 'md',
  color,
  ...props
}) => {
  // Tamaños predefinidos
  const sizes = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8',
    '2xl': 'h-10 w-10',
    '3xl': 'h-12 w-12',
  }

  // Variantes de animación
  const variants = {
    default: {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      transition: { type: 'spring', stiffness: 500, damping: 30 },
      whileHover: { scale: 1.2, rotate: 0 },
      whileTap: { scale: 0.9 }
    },
    pulse: {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      transition: { type: 'spring', stiffness: 500, damping: 30 },
      whileHover: { scale: [1, 1.2, 1], transition: { repeat: Infinity, duration: 1 } },
      whileTap: { scale: 0.9 }
    },
    rotate: {
      initial: { opacity: 0, rotate: -180 },
      animate: { opacity: 1, rotate: 0 },
      transition: { type: 'spring', stiffness: 200, damping: 20 },
      whileHover: { rotate: 360, transition: { duration: 0.8 } },
      whileTap: { scale: 0.9 }
    },
    bounce: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { type: 'spring', stiffness: 300, damping: 10 },
      whileHover: { y: [0, -10, 0], transition: { repeat: Infinity, duration: 1 } },
      whileTap: { scale: 0.9 }
    },
    shake: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 },
      whileHover: { 
        x: [0, -5, 5, -5, 5, 0], 
        transition: { repeat: Infinity, duration: 0.5 } 
      },
      whileTap: { scale: 0.9 }
    },
    ping: {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      transition: { type: 'spring', stiffness: 500, damping: 30 },
      whileHover: { 
        scale: [1, 1.2, 1], 
        opacity: [1, 0.8, 1], 
        transition: { repeat: Infinity, duration: 1.5 } 
      },
      whileTap: { scale: 0.9 }
    },
    spin: {
      initial: { opacity: 0, rotate: 0 },
      animate: { opacity: 1, rotate: 0 },
      transition: { duration: 0.3 },
      whileHover: { 
        rotate: 360, 
        transition: { repeat: Infinity, duration: 1.5, ease: "linear" } 
      },
      whileTap: { scale: 0.9 }
    }
  }

  // Seleccionar la variante de animación
  const selectedVariant = variants[variant] || variants.default

  return (
    <motion.div
      className={cn("inline-flex items-center justify-center", className)}
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      whileHover={selectedVariant.whileHover}
      whileTap={selectedVariant.whileTap}
      transition={selectedVariant.transition}
      {...props}
    >
      <FontAwesomeIcon 
        icon={icon} 
        className={cn(sizes[size], color)} 
      />
    </motion.div>
  )
}

export { AnimatedIcon }

