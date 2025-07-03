import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { 
  Heart, 
  Share2, 
  MessageCircle, 
  Star, 
  MapPin, 
  Calendar,
  Clock,
  TrendingUp,
  Users,
  DollarSign
} from 'lucide-react'

const CardsSection = () => {
  return (
    <div className="space-y-8">
      {/* Basic Cards */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tarjetas Básicas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tarjeta Simple</CardTitle>
              <CardDescription>
                Una tarjeta básica con título y descripción
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Contenido de la tarjeta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Con Footer</CardTitle>
              <CardDescription>
                Tarjeta que incluye un footer con acciones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Esta tarjeta incluye un footer con botones de acción.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm">Acción</Button>
              <Button variant="outline" size="sm">Cancelar</Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Interactiva</CardTitle>
              <CardDescription>
                Tarjeta con efectos hover
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Esta tarjeta tiene efectos de hover para mejorar la interacción.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Product Cards */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tarjetas de Producto</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Producto Premium</CardTitle>
                  <CardDescription>Categoría: Electrónicos</CardDescription>
                </div>
                <Badge>Nuevo</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold">€299</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-muted-foreground ml-1">4.8</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Descripción breve del producto con características principales.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Añadir al Carrito</Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Producto Estándar</CardTitle>
                  <CardDescription>Categoría: Hogar</CardDescription>
                </div>
                <Badge variant="secondary">Popular</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">€199</span>
                  <span className="text-sm text-muted-foreground line-through">€249</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-muted-foreground ml-1">4.5</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Excelente relación calidad-precio para uso doméstico.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Ver Detalles</Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden opacity-75">
            <div className="aspect-video bg-gradient-to-br from-gray-400 to-gray-600"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Producto Agotado</CardTitle>
                  <CardDescription>Categoría: Deportes</CardDescription>
                </div>
                <Badge variant="destructive">Agotado</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold">€149</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-muted-foreground ml-1">4.2</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Producto temporalmente sin stock. Notificar cuando esté disponible.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled>Sin Stock</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Profile Cards */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tarjetas de Perfil</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="/api/placeholder/80/80" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle>Juan Desarrollador</CardTitle>
              <CardDescription>Full Stack Developer</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex justify-center gap-4 mb-4">
                <div className="text-center">
                  <div className="font-bold">127</div>
                  <div className="text-xs text-muted-foreground">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">2.4k</div>
                  <div className="text-xs text-muted-foreground">Seguidores</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">890</div>
                  <div className="text-xs text-muted-foreground">Siguiendo</div>
                </div>
              </div>
              <div className="flex justify-center gap-2">
                <Button size="sm">Seguir</Button>
                <Button size="sm" variant="outline">Mensaje</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/api/placeholder/40/40" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">Ana Martínez</CardTitle>
                  <CardDescription>UX Designer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Especialista en diseño de experiencias digitales con 5 años de experiencia.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Madrid, España
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Se unió en 2020
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/api/placeholder/48/48" />
                    <AvatarFallback>CM</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Carlos Méndez</CardTitle>
                    <CardDescription>Product Manager</CardDescription>
                  </div>
                </div>
                <Badge variant="outline">Pro</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progreso del proyecto</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Última actividad</span>
                  <span>Hace 2 horas</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Stats Cards */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tarjetas de Estadísticas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ventas Totales</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€45,231</div>
              <p className="text-xs text-muted-foreground">
                +20.1% desde el mes pasado
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Usuarios Activos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,350</div>
              <p className="text-xs text-muted-foreground">
                +180 nuevos usuarios
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tasa de Conversión</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5%</div>
              <p className="text-xs text-muted-foreground">
                +2.5% desde la semana pasada
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3m 42s</div>
              <p className="text-xs text-muted-foreground">
                -12s desde ayer
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Social Cards */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tarjetas Sociales</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/api/placeholder/40/40" />
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-base">Laura García</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Hace 2 horas
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                ¡Acabo de terminar mi nuevo proyecto de diseño! Ha sido un desafío increíble 
                trabajar con esta nueva paleta de colores. ¿Qué opinan? 🎨
              </p>
              <div className="aspect-video bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg mb-4"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4 mr-1" />
                    24
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    8
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Compartir
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/api/placeholder/40/40" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-base">Miguel Rodríguez</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Hace 1 día
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Compartiendo algunos tips sobre desarrollo frontend que he aprendido 
                trabajando con React y Tailwind CSS. ¡Espero que les sea útil! 💻
              </p>
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-sm mb-2">5 Tips para React + Tailwind</h4>
                  <p className="text-xs text-muted-foreground">
                    Una guía práctica para optimizar tu flujo de trabajo...
                  </p>
                </CardContent>
              </Card>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4 mr-1" />
                    42
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    15
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Compartir
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CardsSection

