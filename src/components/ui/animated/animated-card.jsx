import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

const AnimatedCard = React.forwardRef(
  ({ 
    className, 
    children, 
    whileHover, 
    whileTap, 
    initial, 
    animate, 
    transition,
    variant = 'default',
    ...props 
  }, ref) => {
    // Configuraciones predefinidas para animaciones
    const defaultWhileHover = whileHover || { 
      y: -5, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
    }
    const defaultWhileTap = whileTap || { scale: 0.98 }
    const defaultInitial = initial || { opacity: 0, y: 20 }
    const defaultAnimate = animate || { opacity: 1, y: 0 }
    const defaultTransition = transition || { 
      type: "spring", 
      stiffness: 300, 
      damping: 20,
      opacity: { duration: 0.4 }
    }

    // Variantes de animación
    const variants = {
      default: {
        whileHover: defaultWhileHover,
        whileTap: defaultWhileTap,
        initial: defaultInitial,
        animate: defaultAnimate,
        transition: defaultTransition
      },
      fade: {
        whileHover: { opacity: 1 },
        whileTap: { scale: 0.98 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 }
      },
      slide: {
        whileHover: { x: 0, y: -5 },
        whileTap: { scale: 0.98 },
        initial: { x: -100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { type: "spring", stiffness: 100, damping: 20 }
      },
      scale: {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { type: "spring", stiffness: 400, damping: 17 }
      },
      rotate: {
        whileHover: { rotate: 0, scale: 1.02 },
        whileTap: { scale: 0.98 },
        initial: { rotate: -5, opacity: 0 },
        animate: { rotate: 0, opacity: 1 },
        transition: { type: "spring", stiffness: 200, damping: 10 }
      }
    }

    // Seleccionar la variante de animación
    const selectedVariant = variants[variant] || variants.default

    // Combinar las configuraciones predefinidas con las personalizadas
    const finalWhileHover = whileHover || selectedVariant.whileHover
    const finalWhileTap = whileTap || selectedVariant.whileTap
    const finalInitial = initial || selectedVariant.initial
    const finalAnimate = animate || selectedVariant.animate
    const finalTransition = transition || selectedVariant.transition

    return (
      <motion.div
        ref={ref}
        initial={finalInitial}
        animate={finalAnimate}
        whileHover={finalWhileHover}
        whileTap={finalWhileTap}
        transition={finalTransition}
        className={cn("", className)}
        {...props}
      >
        <Card className="h-full">
          {children}
        </Card>
      </motion.div>
    )
  }
)

AnimatedCard.displayName = 'AnimatedCard'

export { AnimatedCard }

