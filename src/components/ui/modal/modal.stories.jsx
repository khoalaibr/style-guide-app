import React, { useState } from 'react';
import { Modal } from './modal';
import { Button } from '../button';

export default {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the modal is open',
    },
    onClose: {
      action: 'closed',
      description: 'Function called when the modal is closed',
    },
    title: {
      control: 'text',
      description: 'Title of the modal',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', 'full'],
      description: 'Size of the modal',
    },
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'info'],
      description: 'Visual style of the modal',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Whether clicking the overlay closes the modal',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
    },
    footer: {
      control: 'text',
      description: 'Content for the modal footer',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    children: {
      control: 'text',
      description: 'Modal content',
    },
  },
  args: {
    isOpen: true,
    onClose: () => {},
    title: 'Modal Title',
    size: 'md',
    variant: 'default',
    closeOnOverlayClick: true,
    showCloseButton: true,
    children: 'Modal Content',
  },
};

// Wrapper para controlar el estado de apertura/cierre
const ModalWrapper = ({ children, ...args }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </>
  );
};

// Template básico
const Template = (args) => <ModalWrapper {...args} />;

// Historia básica
export const Default = Template.bind({});
Default.args = {
  title: 'Default Modal',
  children: (
    <div className="space-y-4">
      <p>This is a basic modal with default settings.</p>
      <p>You can put any content here.</p>
    </div>
  ),
};

// Tamaños
export const Small = Template.bind({});
Small.args = {
  title: 'Small Modal',
  size: 'sm',
  children: <p>This is a small modal.</p>,
};

export const Large = Template.bind({});
Large.args = {
  title: 'Large Modal',
  size: 'lg',
  children: (
    <div className="space-y-4">
      <p>This is a large modal with more content.</p>
      <p>It has more space for complex UI elements.</p>
      <p>You can fit forms, tables, or other components here.</p>
    </div>
  ),
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  title: 'Full Width Modal',
  size: 'full',
  children: (
    <div className="space-y-4">
      <p>This modal takes up the full width of the screen.</p>
      <p>It's useful for complex interfaces or when you need to display a lot of information.</p>
      <div className="h-[300px] bg-muted rounded-md flex items-center justify-center">
        <span className="text-muted-foreground">Content Area</span>
      </div>
    </div>
  ),
};

// Variantes
export const Destructive = Template.bind({});
Destructive.args = {
  title: 'Delete Confirmation',
  variant: 'destructive',
  children: <p>Are you sure you want to delete this item? This action cannot be undone.</p>,
  footer: (
    <div className="flex justify-end gap-2">
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  ),
};

export const Success = Template.bind({});
Success.args = {
  title: 'Operation Successful',
  variant: 'success',
  children: <p>Your changes have been saved successfully.</p>,
  footer: (
    <div className="flex justify-end">
      <Button>Close</Button>
    </div>
  ),
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning',
  variant: 'warning',
  children: <p>This action might have unexpected consequences. Please proceed with caution.</p>,
  footer: (
    <div className="flex justify-end gap-2">
      <Button variant="outline">Cancel</Button>
      <Button>Continue</Button>
    </div>
  ),
};

export const Info = Template.bind({});
Info.args = {
  title: 'Information',
  variant: 'info',
  children: <p>Here's some important information you should know about this feature.</p>,
  footer: (
    <div className="flex justify-end">
      <Button>Got it</Button>
    </div>
  ),
};

// Ejemplos de uso
export const LoginForm = Template.bind({});
LoginForm.args = {
  title: 'Log In',
  children: (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter your email"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium">Password</label>
        <input
          id="password"
          type="password"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex items-center">
        <input id="remember" type="checkbox" className="mr-2" />
        <label htmlFor="remember" className="text-sm">Remember me</label>
      </div>
    </div>
  ),
  footer: (
    <div className="flex justify-end gap-2">
      <Button variant="outline">Cancel</Button>
      <Button>Log In</Button>
    </div>
  ),
};

export const ImagePreview = Template.bind({});
ImagePreview.args = {
  title: 'Image Preview',
  size: 'xl',
  showCloseButton: true,
  children: (
    <div className="flex justify-center">
      <div className="aspect-video w-full bg-muted rounded-md flex items-center justify-center">
        <span className="text-muted-foreground">Image Placeholder</span>
      </div>
    </div>
  ),
  footer: (
    <div className="flex justify-between items-center">
      <div className="text-sm text-muted-foreground">image.jpg (2.4 MB)</div>
      <div className="flex gap-2">
        <Button variant="outline">Download</Button>
        <Button>Share</Button>
      </div>
    </div>
  ),
};

