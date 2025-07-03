import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const AnimatedButton = React.forwardRef(
  ({ className, variant, size, children, whileHover, whileTap, initial, animate, transition, ...props }, ref) => {
    // Configuraciones predefinidas para animaciones
    const defaultWhileHover = whileHover || { scale: 1.05 }
    const defaultWhileTap = whileTap || { scale: 0.95 }
    const defaultInitial = initial || { opacity: 0, y: 10 }
    const defaultAnimate = animate || { opacity: 1, y: 0 }
    const defaultTransition = transition || { 
      type: "spring", 
      stiffness: 500, 
      damping: 30,
      opacity: { duration: 0.2 }
    }

    return (
      <motion.div
        ref={ref}
        initial={defaultInitial}
        animate={defaultAnimate}
        whileHover={defaultWhileHover}
        whileTap={defaultWhileTap}
        transition={defaultTransition}
        className={cn("inline-block", className)}
      >
        <Button
          variant={variant}
          size={size}
          className="w-full h-full"
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    )
  }
)

AnimatedButton.displayName = 'AnimatedButton'

export { AnimatedButton }

