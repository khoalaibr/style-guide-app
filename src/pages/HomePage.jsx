import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Palette, Code, Zap, Layers } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Diseño Limpio",
      description: "Componentes diseñados siguiendo principios de diseño minimalista y moderno."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Tailwind CSS",
      description: "Utiliza clases de utilidad para un desarrollo rápido y consistente."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Reutilizable",
      description: "Componentes modulares que puedes usar en cualquier proyecto React."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Escalable",
      description: "Arquitectura pensada para crecer con tus proyectos."
    }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Versión 1.0
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Tu Kit de Componentes
            <span className="text-primary block">React & Tailwind</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Una colección completa de componentes UI reutilizables, diseñados para acelerar 
            el desarrollo de tus proyectos con un diseño limpio y moderno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/style-guide">
                Ver Guía de Estilos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Documentación
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Características Principales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para crear interfaces de usuario modernas y funcionales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50 rounded-lg">
        <div className="text-center max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explora todos los componentes disponibles y comienza a construir 
            tu próximo proyecto con StyleKit.
          </p>
          <Button asChild size="lg">
            <Link to="/style-guide">
              Explorar Componentes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage

