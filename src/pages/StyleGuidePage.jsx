import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

// Import component sections
import ColorsSection from '../components/style-guide/ColorsSection'
import TypographySection from '../components/style-guide/TypographySection'
import ButtonsSection from '../components/style-guide/ButtonsSection'
import FormsSection from '../components/style-guide/FormsSection'
import CardsSection from '../components/style-guide/CardsSection'
import NavigationSection from '../components/style-guide/NavigationSection'
import FeedbackSection from '../components/style-guide/FeedbackSection'

const StyleGuidePage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-4xl font-bold text-foreground">Guía de Estilos</h1>
          <Badge variant="outline">v1.0</Badge>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Una colección completa de componentes UI reutilizables construidos con React y Tailwind CSS. 
          Cada componente está diseñado para ser escalable, accesible y fácil de personalizar.
        </p>
      </div>

      <Separator className="mb-8" />

      {/* Component Tabs */}
      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
          <TabsTrigger value="colors">Colores</TabsTrigger>
          <TabsTrigger value="typography">Tipografía</TabsTrigger>
          <TabsTrigger value="buttons">Botones</TabsTrigger>
          <TabsTrigger value="forms">Formularios</TabsTrigger>
          <TabsTrigger value="cards">Tarjetas</TabsTrigger>
          <TabsTrigger value="navigation">Navegación</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Paleta de Colores</CardTitle>
              <CardDescription>
                Sistema de colores basado en variables CSS y tokens de Tailwind
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ColorsSection />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="typography" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sistema Tipográfico</CardTitle>
              <CardDescription>
                Jerarquía tipográfica y estilos de texto para una comunicación clara
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TypographySection />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="buttons" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Botones</CardTitle>
              <CardDescription>
                Componentes de botón en diferentes variantes y estados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ButtonsSection />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Elementos de Formulario</CardTitle>
              <CardDescription>
                Inputs, selects, checkboxes y otros elementos de entrada de datos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormsSection />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tarjetas y Contenedores</CardTitle>
              <CardDescription>
                Componentes para agrupar y organizar contenido
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardsSection />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="navigation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Elementos de Navegación</CardTitle>
              <CardDescription>
                Menús, breadcrumbs, paginación y otros elementos de navegación
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NavigationSection />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Elementos de Feedback</CardTitle>
              <CardDescription>
                Alertas, notificaciones, tooltips y otros elementos de retroalimentación
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FeedbackSection />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default StyleGuidePage

