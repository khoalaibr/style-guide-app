import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const AnimatedContainer = ({
  children,
  className,
  variant = 'default',
  staggerChildren = 0.1,
  delay = 0,
  duration = 0.5,
  ...props
}) => {
  // Variantes de animación para el contenedor
  const containerVariants = {
    default: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration,
          delay,
          staggerChildren,
          when: "beforeChildren"
        } 
      }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1, 
        transition: { 
          duration,
          delay,
          staggerChildren,
          when: "beforeChildren"
        } 
      }
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 30,
          delay,
          staggerChildren,
          when: "beforeChildren"
        } 
      }
    },
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 30,
          delay,
          staggerChildren,
          when: "beforeChildren"
        } 
      }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 100 },
      visible: { 
        opacity: 1, 
        x: 0, 
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 30,
          delay,
          staggerChildren,
          when: "beforeChildren"
        } 
      }
    },
    slideRight: {
      hidden: { opacity: 0, x: -100 },
      visible: { 
        opacity: 1, 
        x: 0, 
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 30,
          delay,
          staggerChildren,
          when: "beforeChildren"
        } 
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 30,
          delay,
          staggerChildren,
          when: "beforeChildren"
        } 
      }
    },
    stagger: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1, 
        transition: { 
          staggerChildren,
          delayChildren: delay
        } 
      }
    }
  }

  // Variantes de animación para los hijos
  const childVariants = {
    default: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } }
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
    },
    slideDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
    },
    slideRight: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400, damping: 30 } }
    }
  }

  // Seleccionar la variante de animación
  const selectedContainerVariant = containerVariants[variant] || containerVariants.default
  const selectedChildVariant = childVariants[variant] || childVariants.default

  // Envolver cada hijo en un componente motion
  const wrappedChildren = React.Children.map(children, (child, index) => {
    // Si el hijo ya es un componente motion, no lo envolvemos
    if (React.isValidElement(child) && child.type === motion.div) {
      return child
    }
    
    // Si el hijo es un elemento válido, lo envolvemos en un componente motion
    if (React.isValidElement(child)) {
      return (
        <motion.div
          key={index}
          variants={selectedChildVariant}
          custom={index}
          className="w-full"
        >
          {child}
        </motion.div>
      )
    }
    
    // Si el hijo no es un elemento válido, lo devolvemos tal cual
    return child
  })

  return (
    <motion.div
      className={cn("", className)}
      variants={selectedContainerVariant}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {variant === 'stagger' ? wrappedChildren : children}
    </motion.div>
  )
}

export { AnimatedContainer }

