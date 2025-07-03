import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const TypographySection = () => {
  const headings = [
    { level: "h1", text: "Heading 1", class: "text-4xl font-bold", description: "text-4xl font-bold" },
    { level: "h2", text: "Heading 2", class: "text-3xl font-bold", description: "text-3xl font-bold" },
    { level: "h3", text: "Heading 3", class: "text-2xl font-bold", description: "text-2xl font-bold" },
    { level: "h4", text: "Heading 4", class: "text-xl font-bold", description: "text-xl font-bold" },
    { level: "h5", text: "Heading 5", class: "text-lg font-bold", description: "text-lg font-bold" },
    { level: "h6", text: "Heading 6", class: "text-base font-bold", description: "text-base font-bold" },
  ]

  const textStyles = [
    { name: "Texto Grande", class: "text-lg", description: "text-lg" },
    { name: "Texto Base", class: "text-base", description: "text-base" },
    { name: "Texto Pequeño", class: "text-sm", description: "text-sm" },
    { name: "Texto Extra Pequeño", class: "text-xs", description: "text-xs" },
  ]

  const textVariants = [
    { name: "Normal", class: "font-normal", description: "font-normal" },
    { name: "Medium", class: "font-medium", description: "font-medium" },
    { name: "Semibold", class: "font-semibold", description: "font-semibold" },
    { name: "Bold", class: "font-bold", description: "font-bold" },
  ]

  const textColors = [
    { name: "Foreground", class: "text-foreground", description: "text-foreground" },
    { name: "Muted Foreground", class: "text-muted-foreground", description: "text-muted-foreground" },
    { name: "Primary", class: "text-primary", description: "text-primary" },
    { name: "Destructive", class: "text-destructive", description: "text-destructive" },
  ]

  return (
    <div className="space-y-8">
      {/* Headings */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Jerarquía de Títulos</h3>
        <Card>
          <CardContent className="p-6 space-y-4">
            {headings.map((heading, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className={heading.class}>
                  {heading.text}
                </div>
                <Badge variant="outline" className="font-mono text-xs">
                  {heading.description}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Text Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tamaños de Texto</h3>
        <Card>
          <CardContent className="p-6 space-y-4">
            {textStyles.map((style, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className={style.class}>
                  {style.name} - Lorem ipsum dolor sit amet consectetur.
                </div>
                <Badge variant="outline" className="font-mono text-xs">
                  {style.description}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Font Weights */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Pesos de Fuente</h3>
        <Card>
          <CardContent className="p-6 space-y-4">
            {textVariants.map((variant, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className={`text-base ${variant.class}`}>
                  {variant.name} - Lorem ipsum dolor sit amet consectetur.
                </div>
                <Badge variant="outline" className="font-mono text-xs">
                  {variant.description}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Text Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Colores de Texto</h3>
        <Card>
          <CardContent className="p-6 space-y-4">
            {textColors.map((color, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className={`text-base ${color.class}`}>
                  {color.name} - Lorem ipsum dolor sit amet consectetur.
                </div>
                <Badge variant="outline" className="font-mono text-xs">
                  {color.description}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Typography Examples */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Ejemplos de Composición</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Artículo de Blog</CardTitle>
              <CardDescription>Ejemplo de jerarquía tipográfica</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h1 className="text-2xl font-bold text-foreground">
                Título Principal del Artículo
              </h1>
              <p className="text-muted-foreground text-sm">
                Publicado el 2 de Julio, 2025 por <span className="text-primary">StyleKit</span>
              </p>
              <Separator />
              <p className="text-base text-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris.
              </p>
              <h2 className="text-xl font-semibold text-foreground">
                Subtítulo de Sección
              </h2>
              <p className="text-base text-foreground leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tarjeta de Producto</CardTitle>
              <CardDescription>Ejemplo de texto informativo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                Nombre del Producto
              </h3>
              <p className="text-sm text-muted-foreground">
                Categoría: Electrónicos
              </p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">$299</span>
                <span className="text-sm text-muted-foreground line-through">$399</span>
                <Badge variant="destructive" className="text-xs">-25%</Badge>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                Descripción breve del producto con características principales 
                y beneficios para el usuario.
              </p>
              <p className="text-xs text-muted-foreground">
                Envío gratis • Garantía de 2 años
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default TypographySection

