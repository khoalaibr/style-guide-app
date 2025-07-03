import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHeart, 
  faStar, 
  faBell, 
  faRocket, 
  faFire,
  faThumbsUp,
  faCheck,
  faArrowRight,
  faSpinner,
  faSync,
  faShoppingCart,
  faEnvelope,
  faUser,
  faLock,
  faPhone,
  faGlobe,
  faCalendarDays,
  faClock,
  faImage,
  faVideo,
  faFile,
  faDownload,
  faUpload,
  faSave,
  faBookmark,
  faComment,
  faShare,
  faLink,
  faLocationDot,
  faTag,
  faDollarSign,
  faCreditCard,
  faWallet,
  faFlag,
  faPrint,
  faCamera,
  faMicrophone,
  faVolumeUp,
  faVolumeMute,
  faPlay,
  faPause,
  faStop,
  faForward,
  faBackward,
  faRedo,
  faUndo,
  faLightbulb,
  faSun,
  faMoon,
  faCloudUpload,
  faCloudDownload,
  faWifi,
  faBluetooth,
  faBatteryFull,
  faBatteryHalf,
  faBatteryEmpty,
  faDesktop,
  faMobile,
  faTablet,
  faLaptop,
  faServer,
  faDatabase,
  faCode,
  faTerminal,
  faFilter,
  faSort,
  faSortUp,
  faSortDown,
  faList,
  faTable,
  faColumns,
  faGrip,
  faChartBar,
  faChartLine,
  faChartPie,
  faChartArea,
  faEye,
  faEyeSlash,
  faLock,
  faUnlock,
  faShield,
  faShieldAlt,
  faUserShield,
  faKey,
  faSignIn,
  faSignOut,
  faUserPlus,
  faUserMinus,
  faUsers,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { 
  AnimatedButton, 
  AnimatedCard, 
  AnimatedText, 
  AnimatedIcon,
  AnimatedContainer
} from '@/components/ui/animated'

const AnimationsSection = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Animaciones con Framer Motion</h2>
      <p className="text-muted-foreground">
        Las animaciones y micro-interacciones mejoran significativamente la experiencia del usuario, haciendo que la interfaz
        sea más dinámica, atractiva y proporcionando feedback visual. Esta sección muestra cómo utilizar Framer Motion
        para añadir animaciones a los componentes de la interfaz.
      </p>

      {/* Botones Animados */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Botones Animados</h3>
        <Card>
          <CardHeader>
            <CardTitle>Botones con Micro-interacciones</CardTitle>
            <CardDescription>
              Botones que responden visualmente a las interacciones del usuario.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Escala (Default)</p>
                <AnimatedButton>
                  Botón Animado
                </AnimatedButton>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Con Icono</p>
                <AnimatedButton
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2 h-4 w-4" />
                  Continuar
                </AnimatedButton>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Destructivo</p>
                <AnimatedButton
                  variant="destructive"
                  whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <FontAwesomeIcon icon={faTrash} className="mr-2 h-4 w-4" />
                  Eliminar
                </AnimatedButton>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Rotación</p>
                <AnimatedButton
                  variant="outline"
                  whileHover={{ rotate: 5 }}
                  whileTap={{ scale: 0.95, rotate: 0 }}
                >
                  <FontAwesomeIcon icon={faSync} className="mr-2 h-4 w-4" />
                  Actualizar
                </AnimatedButton>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Pulso</p>
                <AnimatedButton
                  variant="secondary"
                  whileHover={{ 
                    scale: [1, 1.05, 1], 
                    transition: { repeat: Infinity, duration: 1 } 
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} className="mr-2 h-4 w-4 text-red-500" />
                  Me gusta
                </AnimatedButton>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Desplazamiento</p>
                <AnimatedButton
                  className="bg-green-600 hover:bg-green-700"
                  whileHover={{ y: -5, boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ y: 0, boxShadow: "none" }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2 h-4 w-4" />
                  Añadir al carrito
                </AnimatedButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tarjetas Animadas */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tarjetas Animadas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedCard variant="default">
            <CardHeader>
              <CardTitle className="text-base">Tarjeta Default</CardTitle>
              <CardDescription>Elevación y sombra al pasar el cursor</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Esta tarjeta se eleva ligeramente y muestra una sombra más pronunciada cuando el cursor pasa sobre ella.
              </p>
            </CardContent>
          </AnimatedCard>
          
          <AnimatedCard variant="fade">
            <CardHeader>
              <CardTitle className="text-base">Tarjeta Fade</CardTitle>
              <CardDescription>Aparece con un efecto de desvanecimiento</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Esta tarjeta aparece gradualmente con un efecto de desvanecimiento, ideal para listas o grids.
              </p>
            </CardContent>
          </AnimatedCard>
          
          <AnimatedCard variant="slide">
            <CardHeader>
              <CardTitle className="text-base">Tarjeta Slide</CardTitle>
              <CardDescription>Deslizamiento desde la izquierda</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Esta tarjeta se desliza desde la izquierda, creando un efecto dinámico de entrada.
              </p>
            </CardContent>
          </AnimatedCard>
          
          <AnimatedCard variant="scale">
            <CardHeader>
              <CardTitle className="text-base">Tarjeta Scale</CardTitle>
              <CardDescription>Escala desde un tamaño más pequeño</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Esta tarjeta crece desde un tamaño más pequeño hasta su tamaño completo.
              </p>
            </CardContent>
          </AnimatedCard>
          
          <AnimatedCard variant="rotate">
            <CardHeader>
              <CardTitle className="text-base">Tarjeta Rotate</CardTitle>
              <CardDescription>Rotación suave al aparecer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Esta tarjeta aparece con una ligera rotación que se corrige, añadiendo dinamismo.
              </p>
            </CardContent>
          </AnimatedCard>
          
          <AnimatedCard
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              backgroundColor: "rgba(249, 250, 251, 1)" // Equivalente a bg-gray-50
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <CardHeader>
              <CardTitle className="text-base">Tarjeta Personalizada</CardTitle>
              <CardDescription>Animación personalizada</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Esta tarjeta tiene una animación personalizada que cambia su escala, sombra y color de fondo.
              </p>
            </CardContent>
          </AnimatedCard>
        </div>
      </div>

      {/* Texto Animado */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Texto Animado</h3>
        <Card>
          <CardHeader>
            <CardTitle>Animaciones de Texto</CardTitle>
            <CardDescription>
              Diferentes formas de animar la aparición de texto.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">Default (Slide Up)</p>
              <div className="p-4 border rounded-md">
                <AnimatedText
                  text="Este texto aparece con un efecto de deslizamiento hacia arriba."
                  className="text-lg"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Typewriter</p>
              <div className="p-4 border rounded-md">
                <AnimatedText
                  text="Este texto aparece letra por letra, como si se estuviera escribiendo."
                  variant="typewriter"
                  className="text-lg"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Fade In</p>
              <div className="p-4 border rounded-md">
                <AnimatedText
                  text="Este texto aparece gradualmente con un efecto de desvanecimiento."
                  variant="fadeIn"
                  className="text-lg"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Slide Left</p>
              <div className="p-4 border rounded-md">
                <AnimatedText
                  text="Este texto se desliza desde la derecha hacia la izquierda."
                  variant="slideLeft"
                  className="text-lg"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Scale</p>
              <div className="p-4 border rounded-md">
                <AnimatedText
                  text="Este texto crece desde un tamaño más pequeño."
                  variant="scale"
                  className="text-lg"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Wave</p>
              <div className="p-4 border rounded-md">
                <AnimatedText
                  text="Este texto aparece palabra por palabra con un efecto de onda."
                  variant="wave"
                  className="text-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Iconos Animados */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Iconos Animados</h3>
        <Card>
          <CardHeader>
            <CardTitle>Iconos con Animaciones</CardTitle>
            <CardDescription>
              Iconos que responden a interacciones con efectos visuales.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
              <div className="flex flex-col items-center gap-2">
                <AnimatedIcon icon={faHeart} size="2xl" color="text-red-500" />
                <span className="text-xs">Default</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <AnimatedIcon icon={faBell} size="2xl" color="text-yellow-500" variant="pulse" />
                <span className="text-xs">Pulse</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <AnimatedIcon icon={faSync} size="2xl" color="text-blue-500" variant="rotate" />
                <span className="text-xs">Rotate</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <AnimatedIcon icon={faRocket} size="2xl" color="text-purple-500" variant="bounce" />
                <span className="text-xs">Bounce</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <AnimatedIcon icon={faFire} size="2xl" color="text-orange-500" variant="shake" />
                <span className="text-xs">Shake</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <AnimatedIcon icon={faStar} size="2xl" color="text-amber-500" variant="ping" />
                <span className="text-xs">Ping</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <AnimatedIcon icon={faSpinner} size="2xl" color="text-gray-500" variant="spin" />
                <span className="text-xs">Spin</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <AnimatedIcon 
                  icon={faThumbsUp} 
                  size="2xl" 
                  color="text-green-500" 
                  whileHover={{ 
                    scale: 1.5, 
                    rotate: [0, -10, 10, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                />
                <span className="text-xs">Custom</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contenedores Animados */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contenedores Animados</h3>
        <Card>
          <CardHeader>
            <CardTitle>Animación de Listas y Grupos</CardTitle>
            <CardDescription>
              Contenedores que animan sus elementos hijos con efectos escalonados.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">Stagger (Escalonado)</p>
              <AnimatedContainer variant="stagger" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4 flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="h-8 w-8 mb-2 text-blue-500" />
                  <p className="text-sm font-medium">Usuarios</p>
                  <p className="text-2xl font-bold">1,234</p>
                </Card>
                <Card className="p-4 flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faShoppingCart} className="h-8 w-8 mb-2 text-green-500" />
                  <p className="text-sm font-medium">Ventas</p>
                  <p className="text-2xl font-bold">$5,678</p>
                </Card>
                <Card className="p-4 flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faComment} className="h-8 w-8 mb-2 text-purple-500" />
                  <p className="text-sm font-medium">Comentarios</p>
                  <p className="text-2xl font-bold">932</p>
                </Card>
                <Card className="p-4 flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faHeart} className="h-8 w-8 mb-2 text-red-500" />
                  <p className="text-sm font-medium">Me gusta</p>
                  <p className="text-2xl font-bold">2,567</p>
                </Card>
              </AnimatedContainer>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Slide Up</p>
              <AnimatedContainer variant="slideUp" className="space-y-4">
                <div className="p-4 border rounded-md">
                  <h4 className="text-lg font-semibold">Título del artículo 1</h4>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="p-4 border rounded-md">
                  <h4 className="text-lg font-semibold">Título del artículo 2</h4>
                  <p className="text-sm text-muted-foreground">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="p-4 border rounded-md">
                  <h4 className="text-lg font-semibold">Título del artículo 3</h4>
                  <p className="text-sm text-muted-foreground">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </AnimatedContainer>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Slide Left</p>
              <AnimatedContainer variant="slideLeft" className="flex flex-wrap gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faFilter} className="h-4 w-4" />
                  Filtrar
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faSort} className="h-4 w-4" />
                  Ordenar
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
                  Exportar
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faPrint} className="h-4 w-4" />
                  Imprimir
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faShare} className="h-4 w-4" />
                  Compartir
                </Button>
              </AnimatedContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ejemplo Práctico */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Ejemplo Práctico: Página de Producto</h3>
        <AnimatedContainer variant="fadeIn" className="space-y-6">
          <AnimatedCard>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <AnimatedContainer variant="slideRight">
                    <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                      <FontAwesomeIcon icon={faImage} className="h-16 w-16 text-muted-foreground" />
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-4">
                      <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                        <FontAwesomeIcon icon={faImage} className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                        <FontAwesomeIcon icon={faImage} className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                        <FontAwesomeIcon icon={faImage} className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                        <FontAwesomeIcon icon={faImage} className="h-6 w-6 text-muted-foreground" />
                      </div>
                    </div>
                  </AnimatedContainer>
                </div>
                
                <div className="space-y-6">
                  <AnimatedContainer variant="slideLeft" className="space-y-4">
                    <AnimatedText
                      text="Auriculares Inalámbricos Premium"
                      variant="slideDown"
                      className="text-2xl font-bold"
                    />
                    
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        <AnimatedIcon icon={faStar} color="text-yellow-500" />
                        <AnimatedIcon icon={faStar} color="text-yellow-500" delay={0.1} />
                        <AnimatedIcon icon={faStar} color="text-yellow-500" delay={0.2} />
                        <AnimatedIcon icon={faStar} color="text-yellow-500" delay={0.3} />
                        <AnimatedIcon icon={faStar} color="text-gray-300" delay={0.4} />
                      </div>
                      <span className="text-sm text-muted-foreground">(128 reseñas)</span>
                    </div>
                    
                    <AnimatedText
                      text="$149.99"
                      variant="scale"
                      className="text-3xl font-bold"
                    />
                    
                    <p className="text-muted-foreground">
                      Auriculares inalámbricos con cancelación de ruido, batería de larga duración y calidad de sonido excepcional.
                      Perfectos para trabajo, viajes y uso diario.
                    </p>
                    
                    <div className="space-y-2">
                      <p className="font-medium">Colores</p>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded-full bg-black border-2 border-primary"></div>
                        <div className="h-8 w-8 rounded-full bg-white border"></div>
                        <div className="h-8 w-8 rounded-full bg-blue-500 border"></div>
                        <div className="h-8 w-8 rounded-full bg-red-500 border"></div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <AnimatedButton
                        className="flex-1 bg-primary hover:bg-primary/90"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2 h-4 w-4" />
                        Añadir al carrito
                      </AnimatedButton>
                      
                      <AnimatedButton
                        variant="outline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FontAwesomeIcon icon={faHeart} className="mr-2 h-4 w-4" />
                        Guardar
                      </AnimatedButton>
                    </div>
                  </AnimatedContainer>
                </div>
              </div>
            </CardContent>
          </AnimatedCard>
          
          <AnimatedCard variant="slideUp">
            <CardHeader>
              <CardTitle>Características del producto</CardTitle>
            </CardHeader>
            <CardContent>
              <AnimatedContainer variant="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-md flex flex-col items-center text-center">
                  <AnimatedIcon icon={faBatteryFull} size="xl" color="text-green-500" variant="pulse" />
                  <h4 className="font-medium mt-2">Batería de 30 horas</h4>
                  <p className="text-sm text-muted-foreground">Disfruta de tu música durante todo el día sin preocuparte por la batería.</p>
                </div>
                
                <div className="p-4 border rounded-md flex flex-col items-center text-center">
                  <AnimatedIcon icon={faVolumeUp} size="xl" color="text-blue-500" variant="pulse" />
                  <h4 className="font-medium mt-2">Cancelación de ruido</h4>
                  <p className="text-sm text-muted-foreground">Tecnología avanzada que elimina el ruido ambiente para una experiencia inmersiva.</p>
                </div>
                
                <div className="p-4 border rounded-md flex flex-col items-center text-center">
                  <AnimatedIcon icon={faBluetooth} size="xl" color="text-purple-500" variant="pulse" />
                  <h4 className="font-medium mt-2">Bluetooth 5.0</h4>
                  <p className="text-sm text-muted-foreground">Conexión estable y de largo alcance con todos tus dispositivos.</p>
                </div>
              </AnimatedContainer>
            </CardContent>
          </AnimatedCard>
        </AnimatedContainer>
      </div>
    </div>
  )
}

export default AnimationsSection

