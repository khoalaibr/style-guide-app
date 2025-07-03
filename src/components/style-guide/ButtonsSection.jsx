import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Download, 
  Heart, 
  Share, 
  Settings, 
  Plus, 
  Trash2, 
  Edit, 
  Save,
  Loader2,
  ArrowRight
} from 'lucide-react'

const ButtonsSection = () => {
  const [isLoading, setIsLoading] = React.useState(false)

  const handleLoadingDemo = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  const buttonVariants = [
    { variant: "default", label: "Default" },
    { variant: "destructive", label: "Destructive" },
    { variant: "outline", label: "Outline" },
    { variant: "secondary", label: "Secondary" },
    { variant: "ghost", label: "Ghost" },
    { variant: "link", label: "Link" },
  ]

  const buttonSizes = [
    { size: "sm", label: "Small" },
    { size: "default", label: "Default" },
    { size: "lg", label: "Large" },
    { size: "icon", label: "Icon", icon: <Settings className="h-4 w-4" /> },
  ]

  return (
    <div className="space-y-8">
      {/* Button Variants */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Variantes de Botones</h3>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {buttonVariants.map((variant, index) => (
                <div key={index} className="space-y-2">
                  <Button variant={variant.variant} className="w-full">
                    {variant.label}
                  </Button>
                  <Badge variant="outline" className="w-full justify-center text-xs font-mono">
                    {variant.variant}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Button Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tamaños de Botones</h3>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center gap-4">
              {buttonSizes.map((size, index) => (
                <div key={index} className="space-y-2 text-center">
                  <Button size={size.size}>
                    {size.icon || size.label}
                  </Button>
                  <Badge variant="outline" className="text-xs font-mono block">
                    {size.size}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Buttons with Icons */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Botones con Iconos</h3>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Descargar
              </Button>
              <Button variant="outline">
                <Heart className="mr-2 h-4 w-4" />
                Me Gusta
              </Button>
              <Button variant="secondary">
                <Share className="mr-2 h-4 w-4" />
                Compartir
              </Button>
              <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Eliminar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Button States */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Estados de Botones</h3>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Button className="w-full">Normal</Button>
                <Badge variant="outline" className="w-full justify-center text-xs">
                  Estado normal
                </Badge>
              </div>
              <div className="space-y-2">
                <Button className="w-full" disabled>Deshabilitado</Button>
                <Badge variant="outline" className="w-full justify-center text-xs">
                  disabled
                </Badge>
              </div>
              <div className="space-y-2">
                <Button 
                  className="w-full" 
                  disabled={isLoading}
                  onClick={handleLoadingDemo}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Cargando...
                    </>
                  ) : (
                    'Cargar'
                  )}
                </Button>
                <Badge variant="outline" className="w-full justify-center text-xs">
                  Loading state
                </Badge>
              </div>
              <div className="space-y-2">
                <Button className="w-full group">
                  Hover Effect
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Badge variant="outline" className="w-full justify-center text-xs">
                  Hover animation
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Button Groups */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Grupos de Botones</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Acciones Primarias</CardTitle>
              <CardDescription>Botones para acciones principales</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Guardar
                </Button>
                <Button variant="outline">Cancelar</Button>
              </div>
              <div className="flex gap-2">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Crear Nuevo
                </Button>
                <Button variant="secondary">
                  <Edit className="mr-2 h-4 w-4" />
                  Editar
                </Button>
                <Button variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Navegación</CardTitle>
              <CardDescription>Botones para navegación y enlaces</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button variant="ghost">Anterior</Button>
                <Button>Siguiente</Button>
              </div>
              <div className="flex gap-2">
                <Button variant="link">Ver más</Button>
                <Button variant="link">
                  Ir al sitio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Guías de Uso</h3>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Cuándo usar cada variante:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li><strong>Default:</strong> Acciones principales</li>
                  <li><strong>Destructive:</strong> Acciones peligrosas (eliminar, cancelar)</li>
                  <li><strong>Outline:</strong> Acciones secundarias</li>
                  <li><strong>Secondary:</strong> Acciones de apoyo</li>
                  <li><strong>Ghost:</strong> Acciones sutiles</li>
                  <li><strong>Link:</strong> Navegación y enlaces</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Mejores prácticas:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Usa máximo un botón primario por sección</li>
                  <li>• Incluye iconos para clarificar la acción</li>
                  <li>• Mantén textos concisos y descriptivos</li>
                  <li>• Agrupa botones relacionados</li>
                  <li>• Usa estados de carga para acciones asíncronas</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ButtonsSection

