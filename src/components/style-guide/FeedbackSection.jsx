import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { toast } from 'sonner'
import { 
  AlertCircle, 
  CheckCircle, 
  Info, 
  AlertTriangle,
  X,
  HelpCircle,
  Loader2,
  Bell,
  Star,
  ThumbsUp,
  MessageSquare
} from 'lucide-react'

const FeedbackSection = () => {
  const [progress, setProgress] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  const showToast = (type) => {
    switch (type) {
      case 'success':
        toast.success('¡Operación completada con éxito!')
        break
      case 'error':
        toast.error('Ha ocurrido un error inesperado')
        break
      case 'warning':
        toast.warning('Advertencia: Revisa los datos ingresados')
        break
      case 'info':
        toast.info('Información: Nueva actualización disponible')
        break
      default:
        toast('Notificación básica')
    }
  }

  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  return (
    <div className="space-y-8">
      {/* Alerts */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Alertas</h3>
        <div className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Información</AlertTitle>
            <AlertDescription>
              Esta es una alerta informativa para comunicar información general al usuario.
            </AlertDescription>
          </Alert>

          <Alert className="border-green-200 bg-green-50 text-green-800">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Éxito</AlertTitle>
            <AlertDescription>
              ¡Operación completada exitosamente! Los cambios han sido guardados.
            </AlertDescription>
          </Alert>

          <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Advertencia</AlertTitle>
            <AlertDescription>
              Ten cuidado: Esta acción no se puede deshacer. Asegúrate de revisar los datos antes de continuar.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Ha ocurrido un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Toast Notifications */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Notificaciones Toast</h3>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button onClick={() => showToast('success')} variant="outline">
                <CheckCircle className="h-4 w-4 mr-2" />
                Éxito
              </Button>
              <Button onClick={() => showToast('error')} variant="outline">
                <AlertCircle className="h-4 w-4 mr-2" />
                Error
              </Button>
              <Button onClick={() => showToast('warning')} variant="outline">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Advertencia
              </Button>
              <Button onClick={() => showToast('info')} variant="outline">
                <Info className="h-4 w-4 mr-2" />
                Información
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Indicators */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Indicadores de Progreso</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Barra de Progreso</CardTitle>
              <CardDescription>Indicador visual del progreso de una tarea</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progreso del proyecto</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Carga de archivos</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-3" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Instalación</span>
                  <span>100%</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Estados de Carga</CardTitle>
              <CardDescription>Diferentes formas de mostrar contenido cargando</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/5" />
              </div>
              
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[160px]" />
                </div>
              </div>

              <Button 
                onClick={simulateLoading}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Cargando...
                  </>
                ) : (
                  'Simular Carga'
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tooltips */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tooltips</h3>
        <Card>
          <CardContent className="p-6">
            <TooltipProvider>
              <div className="flex flex-wrap gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Ayuda
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Obtén ayuda sobre esta función</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <Info className="h-4 w-4 mr-2" />
                      Información
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Información adicional sobre este elemento</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <Bell className="h-4 w-4 mr-2" />
                      Notificaciones
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Ver todas las notificaciones</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>
      </div>

      {/* Badges and Status */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Badges y Estados</h3>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Estados de Proceso</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Borrador</Badge>
                  <Badge variant="secondary">En Revisión</Badge>
                  <Badge variant="default">Aprobado</Badge>
                  <Badge className="bg-green-500 hover:bg-green-600">Publicado</Badge>
                  <Badge variant="destructive">Rechazado</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Prioridades</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-500 hover:bg-gray-600">Baja</Badge>
                  <Badge className="bg-blue-500 hover:bg-blue-600">Media</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Alta</Badge>
                  <Badge className="bg-red-500 hover:bg-red-600">Crítica</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Categorías</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Tecnología</Badge>
                  <Badge variant="outline">Diseño</Badge>
                  <Badge variant="outline">Marketing</Badge>
                  <Badge variant="outline">Ventas</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Métricas</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">+12%</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200">-5%</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">2.4k</Badge>
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Nuevo</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feedback Cards */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tarjetas de Feedback</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <CardTitle className="text-green-800">Operación Exitosa</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 text-sm">
                Tu perfil ha sido actualizado correctamente. Los cambios se verán reflejados 
                en tu próxima sesión.
              </p>
              <Button variant="outline" size="sm" className="mt-3 border-green-300 text-green-700">
                Ver Perfil
              </Button>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-blue-800">Nueva Función Disponible</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-sm">
                Hemos añadido nuevas funcionalidades de colaboración. ¡Descubre cómo 
                trabajar mejor en equipo!
              </p>
              <Button variant="outline" size="sm" className="mt-3 border-blue-300 text-blue-700">
                Explorar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Rating and Reviews */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Valoraciones y Reseñas</h3>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Sistema de Valoración</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(4.8/5)</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <Star 
                          key={star} 
                          className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                        />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                    <span className="text-sm text-muted-foreground">(4.0/5)</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Acciones de Feedback</h4>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Me gusta
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Comentar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Star className="h-4 w-4 mr-1" />
                    Valorar
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default FeedbackSection

