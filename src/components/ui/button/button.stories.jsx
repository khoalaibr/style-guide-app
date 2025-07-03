import React from 'react';
import { Button } from './button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit, faDownload, faShare } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'UI/Button',
  component: Button,
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
    asChild: {
      control: 'boolean',
      description: 'Whether to render as a child element',
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
    asChild: false,
    children: 'Button',
  },
};

// Template básico
const Template = (args) => <Button {...args} />;

// Historia básica
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

// Variantes
export const Primary = Template.bind({});
Primary.args = {
  variant: 'default',
  children: 'Primary Button',
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  children: 'Destructive Button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  children: 'Outline Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  children: 'Ghost Button',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  children: 'Link Button',
};

// Tamaños
export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'Small Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Large Button',
};

export const IconButton = Template.bind({});
IconButton.args = {
  size: 'icon',
  children: <FontAwesomeIcon icon={faPlus} />,
  'aria-label': 'Add',
};

// Estados
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
};

// Con iconos
export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  children: (
    <>
      <FontAwesomeIcon icon={faPlus} className="mr-2 h-4 w-4" />
      Add Item
    </>
  ),
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  children: (
    <>
      Next
      <FontAwesomeIcon icon={faShare} className="ml-2 h-4 w-4" />
    </>
  ),
};

// Botones con diferentes variantes e iconos
export const ButtonGroup = () => (
  <div className="flex flex-wrap gap-4">
    <Button>
      <FontAwesomeIcon icon={faPlus} className="mr-2 h-4 w-4" />
      Add
    </Button>
    <Button variant="outline">
      <FontAwesomeIcon icon={faEdit} className="mr-2 h-4 w-4" />
      Edit
    </Button>
    <Button variant="destructive">
      <FontAwesomeIcon icon={faTrash} className="mr-2 h-4 w-4" />
      Delete
    </Button>
    <Button variant="secondary">
      <FontAwesomeIcon icon={faDownload} className="mr-2 h-4 w-4" />
      Download
    </Button>
    <Button variant="ghost">
      <FontAwesomeIcon icon={faShare} className="mr-2 h-4 w-4" />
      Share
    </Button>
  </div>
);

// Botón como otro elemento
export const AsLink = () => (
  <Button asChild>
    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
      Visit Website
    </a>
  </Button>
);

