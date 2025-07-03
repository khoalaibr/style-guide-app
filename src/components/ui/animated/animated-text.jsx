import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const AnimatedText = ({
  text,
  className,
  variant = 'default',
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.03,
  ...props
}) => {
  // Variantes de animación para el contenedor
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay
      }
    }
  }

  // Variantes de animación para el texto
  const textVariants = {
    default: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration } }
    },
    typewriter: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.1 } }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration } }
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration } }
    },
    slideDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0, transition: { duration } }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0, transition: { duration } }
    },
    slideRight: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0, transition: { duration } }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration } }
    },
    wave: {
      hidden: { opacity: 0, y: 20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: delay + (i * staggerChildren),
          duration: 0.5,
          type: "spring",
          stiffness: 100
        }
      })
    }
  }

  // Seleccionar la variante de animación
  const selectedVariant = textVariants[variant] || textVariants.default

  // Para la variante typewriter, animamos letra por letra
  if (variant === 'typewriter') {
    return (
      <motion.div
        className={cn("inline-block", className)}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        {...props}
      >
        {Array.from(text).map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={selectedVariant}
            custom={index}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  // Para la variante wave, animamos palabra por palabra
  if (variant === 'wave') {
    return (
      <motion.div
        className={cn("inline-block", className)}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        {...props}
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={selectedVariant}
            custom={index}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  // Para el resto de variantes, animamos el texto completo
  return (
    <motion.div
      className={cn("inline-block", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      <motion.span
        variants={selectedVariant}
      >
        {text}
      </motion.span>
    </motion.div>
  )
}

export { AnimatedText }

