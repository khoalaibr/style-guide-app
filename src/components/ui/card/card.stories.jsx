import React from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
} from './card';
import { Button } from '../button';

export default {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    children: {
      control: 'text',
      description: 'Card content',
    },
  },
};

// Template básico
const Template = (args) => <Card {...args} />;

// Historia básica
export const Default = Template.bind({});
Default.args = {
  className: 'w-[350px]',
  children: <CardContent>Card Content</CardContent>,
};

// Card con todos los componentes
export const Complete = () => (
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
);

// Ejemplo de tarjeta de producto
export const ProductCard = () => (
  <Card className="w-[350px] overflow-hidden">
    <div className="aspect-video bg-muted flex items-center justify-center">
      <span className="text-muted-foreground">Product Image</span>
    </div>
    <CardHeader>
      <CardTitle>Product Name</CardTitle>
      <CardDescription>Product Category</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold">$99.99</p>
      <p className="text-sm text-muted-foreground mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Add to Wishlist</Button>
      <Button>Add to Cart</Button>
    </CardFooter>
  </Card>
);

// Ejemplo de tarjeta de perfil
export const ProfileCard = () => (
  <Card className="w-[350px]">
    <CardHeader className="text-center">
      <div className="flex justify-center">
        <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
          <span className="text-muted-foreground">Avatar</span>
        </div>
      </div>
      <CardTitle className="mt-4">John Doe</CardTitle>
      <CardDescription>Software Developer</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex justify-center space-x-4">
        <div className="text-center">
          <p className="text-xl font-bold">52</p>
          <p className="text-sm text-muted-foreground">Posts</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">250</p>
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">4.5K</p>
          <p className="text-sm text-muted-foreground">Followers</p>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Follow</Button>
    </CardFooter>
  </Card>
);

// Ejemplo de tarjeta de estadísticas
export const StatsCard = () => (
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Monthly Revenue</CardTitle>
      <CardDescription>June 2025</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-center">
        <p className="text-4xl font-bold">$12,345</p>
        <p className="text-sm text-green-500 mt-2">↑ 12% from last month</p>
      </div>
      <div className="mt-4 h-[150px] bg-muted rounded-md flex items-center justify-center">
        <span className="text-muted-foreground">Chart Placeholder</span>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between text-sm text-muted-foreground">
      <p>Updated 2 hours ago</p>
      <Button variant="ghost" size="sm">View Report</Button>
    </CardFooter>
  </Card>
);

// Ejemplo de tarjeta de blog
export const BlogCard = () => (
  <Card className="w-[350px] overflow-hidden">
    <div className="aspect-video bg-muted flex items-center justify-center">
      <span className="text-muted-foreground">Blog Image</span>
    </div>
    <CardHeader>
      <CardTitle>10 Tips for Better UI Design</CardTitle>
      <CardDescription>June 15, 2025 • 5 min read</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Learn the essential principles of user interface design that will help you create more intuitive and engaging digital experiences.
      </p>
    </CardContent>
    <CardFooter className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="h-8 w-8 rounded-full bg-muted mr-2"></div>
        <span className="text-sm">Jane Smith</span>
      </div>
      <Button variant="ghost" size="sm">Read More</Button>
    </CardFooter>
  </Card>
);

