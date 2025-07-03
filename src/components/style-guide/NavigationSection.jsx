import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Home, 
  Settings, 
  User, 
  FileText, 
  ChevronRight,
  ChevronLeft,
  MoreHorizontal,
  Menu,
  X
} from 'lucide-react'

const NavigationSection = () => {
  const [activeTab, setActiveTab] = React.useState("overview")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navigationItems = [
    { icon: <Home className="h-4 w-4" />, label: "Inicio", href: "#", active: true },
    { icon: <FileText className="h-4 w-4" />, label: "Proyectos", href: "#", active: false },
    { icon: <User className="h-4 w-4" />, label: "Perfil", href: "#", active: false },
    { icon: <Settings className="h-4 w-4" />, label: "Configuración", href: "#", active: false },
  ]

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Breadcrumbs</h3>
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Breadcrumb básico:</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Inicio</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Proyectos</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Mi Proyecto</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <Separator />

            <div>
              <p className="text-sm text-muted-foreground mb-2">Breadcrumb con iconos:</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="flex items-center gap-1">
                      <Home className="h-3 w-3" />
                      Inicio
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Documentación</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Componentes</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Navegación</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Navigation */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Navegación por Pestañas</h3>
        <Card>
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="analytics">Analíticas</TabsTrigger>
                <TabsTrigger value="reports">Reportes</TabsTrigger>
                <TabsTrigger value="settings">Configuración</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Panel de Resumen</h4>
                  <p className="text-sm text-muted-foreground">
                    Vista general de métricas y estadísticas principales.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Analíticas Detalladas</h4>
                  <p className="text-sm text-muted-foreground">
                    Gráficos y análisis profundo de datos de usuario.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reports" className="mt-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Reportes Personalizados</h4>
                  <p className="text-sm text-muted-foreground">
                    Genera y descarga reportes según tus necesidades.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Configuración del Sistema</h4>
                  <p className="text-sm text-muted-foreground">
                    Ajusta preferencias y configuraciones de la aplicación.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar Navigation */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Navegación Lateral</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Sidebar Desktop</CardTitle>
              <CardDescription>Navegación lateral para pantallas grandes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-64 bg-muted/30 rounded-lg p-4">
                <div className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <Button
                      key={index}
                      variant={item.active ? "default" : "ghost"}
                      className="w-full justify-start"
                    >
                      {item.icon}
                      <span className="ml-2">{item.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Menú Móvil</CardTitle>
              <CardDescription>Navegación colapsible para dispositivos móviles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium">StyleKit</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                  </Button>
                </div>
                
                {isMobileMenuOpen && (
                  <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                    {navigationItems.map((item, index) => (
                      <Button
                        key={index}
                        variant={item.active ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.icon}
                        <span className="ml-2">{item.label}</span>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Pagination */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Paginación</h3>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-4">Paginación estándar:</p>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">10</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <Separator />

            <div>
              <p className="text-sm text-muted-foreground mb-4">Navegación simple:</p>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Anterior
                </Button>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Página</span>
                  <Badge variant="outline">3</Badge>
                  <span className="text-sm text-muted-foreground">de 10</span>
                </div>
                <Button variant="outline" size="sm">
                  Siguiente
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Horizontal Navigation */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Navegación Horizontal</h3>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-4">Barra de navegación principal:</p>
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-6">
                  <span className="font-semibold">Logo</span>
                  <nav className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="sm">Inicio</Button>
                    <Button variant="ghost" size="sm">Productos</Button>
                    <Button variant="ghost" size="sm">Servicios</Button>
                    <Button variant="ghost" size="sm">Contacto</Button>
                  </nav>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">Iniciar Sesión</Button>
                  <Button size="sm">Registrarse</Button>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-4">Navegación secundaria:</p>
              <div className="flex items-center gap-1 p-2 bg-muted/30 rounded-lg">
                <Button variant="ghost" size="sm" className="text-xs">
                  Todos
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  Activos
                </Button>
                <Button variant="default" size="sm" className="text-xs">
                  Completados
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  Archivados
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step Navigation */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Navegación por Pasos</h3>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  1
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Información Personal</p>
                  <p className="text-xs text-muted-foreground">Completado</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  2
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Detalles del Proyecto</p>
                  <p className="text-xs text-muted-foreground">Actual</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                  3
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Confirmación</p>
                  <p className="text-xs text-muted-foreground">Pendiente</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Anterior
              </Button>
              <Button>
                Siguiente
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default NavigationSection

