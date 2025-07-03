import React from 'react';
import { AnimatedText } from './animated-text';

export default {
  title: 'UI/Animated/AnimatedText',
  component: AnimatedText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to animate',
    },
    variant: {
      control: 'select',
      options: ['default', 'typewriter', 'fadeIn', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'scale', 'wave'],
      description: 'The animation variant to use',
    },
    delay: {
      control: 'number',
      description: 'Delay before starting the animation (in seconds)',
    },
    duration: {
      control: 'number',
      description: 'Duration of the animation (in seconds)',
    },
    staggerChildren: {
      control: 'number',
      description: 'Delay between each child animation (in seconds)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    text: 'This is an animated text',
    variant: 'default',
    delay: 0,
    duration: 0.5,
    staggerChildren: 0.03,
  },
};

// Template básico
const Template = (args) => (
  <div className="p-8 border rounded-md max-w-md">
    <AnimatedText {...args} />
  </div>
);

// Historia básica
export const Default = Template.bind({});
Default.args = {
  text: 'This text appears with a default slide up animation.',
  variant: 'default',
};

// Variantes de animación
export const Typewriter = Template.bind({});
Typewriter.args = {
  text: 'This text appears letter by letter, like a typewriter.',
  variant: 'typewriter',
};

export const FadeIn = Template.bind({});
FadeIn.args = {
  text: 'This text fades in gradually.',
  variant: 'fadeIn',
};

export const SlideUp = Template.bind({});
SlideUp.args = {
  text: 'This text slides up from below.',
  variant: 'slideUp',
};

export const SlideDown = Template.bind({});
SlideDown.args = {
  text: 'This text slides down from above.',
  variant: 'slideDown',
};

export const SlideLeft = Template.bind({});
SlideLeft.args = {
  text: 'This text slides in from the right.',
  variant: 'slideLeft',
};

export const SlideRight = Template.bind({});
SlideRight.args = {
  text: 'This text slides in from the left.',
  variant: 'slideRight',
};

export const Scale = Template.bind({});
Scale.args = {
  text: 'This text scales up from a smaller size.',
  variant: 'scale',
};

export const Wave = Template.bind({});
Wave.args = {
  text: 'This text appears word by word with a wave effect.',
  variant: 'wave',
};

// Ejemplos con diferentes tiempos
export const WithDelay = Template.bind({});
WithDelay.args = {
  text: 'This text appears after a 1 second delay.',
  variant: 'default',
  delay: 1,
};

export const SlowDuration = Template.bind({});
SlowDuration.args = {
  text: 'This text animates slowly over 2 seconds.',
  variant: 'default',
  duration: 2,
};

export const FastTypewriter = Template.bind({});
FastTypewriter.args = {
  text: 'This typewriter effect is faster than normal.',
  variant: 'typewriter',
  staggerChildren: 0.01,
};

// Ejemplos con diferentes estilos
export const Heading = Template.bind({});
Heading.args = {
  text: 'Animated Heading',
  variant: 'slideDown',
  className: 'text-3xl font-bold',
};

export const Subheading = Template.bind({});
Subheading.args = {
  text: 'This is a subheading with a fade in animation',
  variant: 'fadeIn',
  className: 'text-xl text-muted-foreground',
};

export const ColoredText = Template.bind({});
ColoredText.args = {
  text: 'This text has custom colors',
  variant: 'wave',
  className: 'text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
};

// Ejemplo de múltiples textos animados
export const MultipleAnimatedTexts = () => (
  <div className="space-y-6 p-8 border rounded-md max-w-md">
    <AnimatedText
      text="Welcome to our website!"
      variant="slideDown"
      className="text-2xl font-bold"
    />
    
    <AnimatedText
      text="We create amazing digital experiences."
      variant="fadeIn"
      delay={0.3}
      className="text-muted-foreground"
    />
    
    <AnimatedText
      text="Explore our services and portfolio."
      variant="slideUp"
      delay={0.6}
    />
    
    <AnimatedText
      text="Get in touch with us today!"
      variant="wave"
      delay={0.9}
      className="font-semibold text-primary"
    />
  </div>
);

