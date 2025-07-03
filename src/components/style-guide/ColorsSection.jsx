import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const ColorsSection = () => {
  const colorPalettes = [
    {
      name: "Colores Principales",
      colors: [
        { name: "Background", value: "hsl(0 0% 100%)", class: "bg-background", textClass: "text-foreground" },
        { name: "Foreground", value: "hsl(222.2 84% 4.9%)", class: "bg-foreground", textClass: "text-background" },
        { name: "Primary", value: "hsl(222.2 47.4% 11.2%)", class: "bg-primary", textClass: "text-primary-foreground" },
        { name: "Primary Foreground", value: "hsl(210 40% 98%)", class: "bg-primary-foreground", textClass: "text-primary" },
      ]
    },
    {
      name: "Colores Secundarios",
      colors: [
        { name: "Secondary", value: "hsl(210 40% 96%)", class: "bg-secondary", textClass: "text-secondary-foreground" },
        { name: "Secondary Foreground", value: "hsl(222.2 84% 4.9%)", class: "bg-secondary-foreground", textClass: "text-secondary" },
        { name: "Muted", value: "hsl(210 40% 96%)", class: "bg-muted", textClass: "text-muted-foreground" },
        { name: "Muted Foreground", value: "hsl(215.4 16.3% 46.9%)", class: "bg-muted-foreground", textClass: "text-muted" },
      ]
    },
    {
      name: "Colores de Estado",
      colors: [
        { name: "Destructive", value: "hsl(0 84.2% 60.2%)", class: "bg-destructive", textClass: "text-destructive-foreground" },
        { name: "Destructive Foreground", value: "hsl(210 40% 98%)", class: "bg-destructive-foreground", textClass: "text-destructive" },
        { name: "Border", value: "hsl(214.3 31.8% 91.4%)", class: "bg-border", textClass: "text-foreground" },
        { name: "Input", value: "hsl(214.3 31.8% 91.4%)", class: "bg-input", textClass: "text-foreground" },
      ]
    },
    {
      name: "Colores de Gráficos",
      colors: [
        { name: "Chart 1", value: "hsl(12 76% 61%)", class: "bg-chart-1", textClass: "text-white" },
        { name: "Chart 2", value: "hsl(173 58% 39%)", class: "bg-chart-2", textClass: "text-white" },
        { name: "Chart 3", value: "hsl(197 37% 24%)", class: "bg-chart-3", textClass: "text-white" },
        { name: "Chart 4", value: "hsl(43 74% 66%)", class: "bg-chart-4", textClass: "text-black" },
        { name: "Chart 5", value: "hsl(27 87% 67%)", class: "bg-chart-5", textClass: "text-black" },
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {colorPalettes.map((palette, paletteIndex) => (
        <div key={paletteIndex}>
          <h3 className="text-lg font-semibold mb-4">{palette.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {palette.colors.map((color, colorIndex) => (
              <Card key={colorIndex} className="overflow-hidden">
                <div className={`h-20 ${color.class} flex items-center justify-center`}>
                  <span className={`text-sm font-medium ${color.textClass}`}>
                    {color.name}
                  </span>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">{color.name}</p>
                    <Badge variant="outline" className="text-xs font-mono">
                      {color.value}
                    </Badge>
                    <Badge variant="secondary" className="text-xs font-mono">
                      {color.class}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Usage Examples */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Ejemplos de Uso</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Texto sobre Fondos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-background border rounded">
                <p className="text-foreground">Texto principal sobre fondo claro</p>
                <p className="text-muted-foreground">Texto secundario</p>
              </div>
              <div className="p-4 bg-primary rounded">
                <p className="text-primary-foreground">Texto sobre fondo primario</p>
              </div>
              <div className="p-4 bg-secondary rounded">
                <p className="text-secondary-foreground">Texto sobre fondo secundario</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Estados y Acciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded">
                <p className="text-destructive text-sm">Mensaje de error</p>
              </div>
              <div className="p-3 bg-chart-2/10 border border-chart-2/20 rounded">
                <p className="text-chart-2 text-sm">Mensaje de éxito</p>
              </div>
              <div className="p-3 bg-chart-4/10 border border-chart-4/20 rounded">
                <p className="text-chart-4 text-sm">Mensaje de advertencia</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ColorsSection

