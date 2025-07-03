import React from 'react';
import { AnimatedButton } from './animated-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faStar, 
  faRocket, 
  faArrowRight, 
  faTrash, 
  faSync, 
  faShoppingCart 
} from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'UI/Animated/AnimatedButton',
  component: AnimatedButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    whileHover: {
      control: 'object',
      description: 'Animation properties when hovering',
    },
    whileTap: {
      control: 'object',
      description: 'Animation properties when tapping/clicking',
    },
    transition: {
      control: 'object',
      description: 'Transition properties for animations',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
    children: 'Animated Button',
  },
};

// Template básico
const Template = (args) => <AnimatedButton {...args} />;

// Historia básica
export const Default = Template.bind({});
Default.args = {
  children: 'Animated Button',
};

// Animaciones personalizadas
export const Scale = Template.bind({});
Scale.args = {
  children: 'Scale Animation',
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

export const Rotate = Template.bind({});
Rotate.args = {
  children: 'Rotate Animation',
  whileHover: { rotate: 5 },
  whileTap: { scale: 0.95, rotate: 0 },
};

export const Pulse = Template.bind({});
Pulse.args = {
  children: 'Pulse Animation',
  whileHover: { 
    scale: [1, 1.05, 1], 
    transition: { repeat: Infinity, duration: 1 } 
  },
};

export const Shake = Template.bind({});
Shake.args = {
  variant: 'destructive',
  children: 'Shake Animation',
  whileHover: { 
    x: [0, -3, 3, -3, 3, 0], 
    transition: { duration: 0.5 } 
  },
};

export const Float = Template.bind({});
Float.args = {
  variant: 'secondary',
  children: 'Float Animation',
  whileHover: { 
    y: -5, 
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)" 
  },
  whileTap: { 
    y: 0, 
    boxShadow: "none" 
  },
};

// Botones con iconos animados
export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <>
      <FontAwesomeIcon icon={faArrowRight} className="mr-2 h-4 w-4" />
      Continue
    </>
  ),
  whileHover: { 
    scale: 1.05, 
    x: 5 
  },
  whileTap: { 
    scale: 0.95 
  },
};

export const DestructiveWithIcon = Template.bind({});
DestructiveWithIcon.args = {
  variant: 'destructive',
  children: (
    <>
      <FontAwesomeIcon icon={faTrash} className="mr-2 h-4 w-4" />
      Delete
    </>
  ),
  whileHover: { 
    scale: 1.05, 
    rotate: [0, -1, 1, -1, 0] 
  },
  transition: { 
    duration: 0.5 
  },
};

export const OutlineWithIcon = Template.bind({});
OutlineWithIcon.args = {
  variant: 'outline',
  children: (
    <>
      <FontAwesomeIcon icon={faSync} className="mr-2 h-4 w-4" />
      Refresh
    </>
  ),
  whileHover: { 
    rotate: 5 
  },
  whileTap: { 
    scale: 0.95, 
    rotate: 0 
  },
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  variant: 'secondary',
  children: (
    <>
      <FontAwesomeIcon icon={faHeart} className="mr-2 h-4 w-4 text-red-500" />
      Like
    </>
  ),
  whileHover: { 
    scale: [1, 1.05, 1], 
    transition: { repeat: Infinity, duration: 1 } 
  },
};

export const GreenWithIcon = Template.bind({});
GreenWithIcon.args = {
  className: "bg-green-600 hover:bg-green-700",
  children: (
    <>
      <FontAwesomeIcon icon={faShoppingCart} className="mr-2 h-4 w-4" />
      Add to Cart
    </>
  ),
  whileHover: { 
    y: -5, 
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)" 
  },
  whileTap: { 
    y: 0, 
    boxShadow: "none" 
  },
};

// Grupo de botones animados
export const AnimatedButtonGroup = () => (
  <div className="flex flex-wrap gap-4">
    <AnimatedButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FontAwesomeIcon icon={faRocket} className="mr-2 h-4 w-4" />
      Launch
    </AnimatedButton>
    
    <AnimatedButton
      variant="outline"
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95, rotate: 0 }}
    >
      <FontAwesomeIcon icon={faStar} className="mr-2 h-4 w-4" />
      Favorite
    </AnimatedButton>
    
    <AnimatedButton
      variant="destructive"
      whileHover={{ 
        scale: 1.05, 
        x: [0, -3, 3, -3, 3, 0],
        transition: { duration: 0.5 } 
      }}
      whileTap={{ scale: 0.95 }}
    >
      <FontAwesomeIcon icon={faTrash} className="mr-2 h-4 w-4" />
      Delete
    </AnimatedButton>
    
    <AnimatedButton
      variant="secondary"
      whileHover={{ 
        scale: [1, 1.05, 1], 
        transition: { repeat: Infinity, duration: 1 } 
      }}
      whileTap={{ scale: 0.95 }}
    >
      <FontAwesomeIcon icon={faHeart} className="mr-2 h-4 w-4 text-red-500" />
      Like
    </AnimatedButton>
    
    <AnimatedButton
      className="bg-green-600 hover:bg-green-700"
      whileHover={{ 
        y: -5, 
        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)" 
      }}
      whileTap={{ y: 0, boxShadow: "none" }}
    >
      <FontAwesomeIcon icon={faShoppingCart} className="mr-2 h-4 w-4" />
      Add to Cart
    </AnimatedButton>
  </div>
);

