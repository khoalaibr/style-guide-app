import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronDown, 
  faCheck, 
  faFilter, 
  faSort,
  faUser,
  faEnvelope,
  faPhone,
  faGlobe,
  faLanguage,
  faLocationDot,
  faClock,
  faCalendarDays
} from '@fortawesome/free-solid-svg-icons'
import { 
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownSearch,
  DropdownGroup,
  DropdownItem,
  DropdownSeparator,
  DropdownEmpty
} from '@/components/ui/dropdown/dropdown'

const DropdownsSection = () => {
  // Datos de ejemplo para los dropdowns
  const countries = [
    { value: 'us', label: 'Estados Unidos' },
    { value: 'mx', label: 'México' },
    { value: 'ca', label: 'Canadá' },
    { value: 'es', label: 'España' },
    { value: 'ar', label: 'Argentina' },
    { value: 'co', label: 'Colombia' },
    { value: 'pe', label: 'Perú' },
    { value: 'cl', label: 'Chile' },
    { value: 'br', label: 'Brasil' },
  ]

  const languages = [
    { value: 'es', label: 'Español', group: 'Populares' },
    { value: 'en', label: 'Inglés', group: 'Populares' },
    { value: 'fr', label: 'Francés', group: 'Populares' },
    { value: 'de', label: 'Alemán', group: 'Europa' },
    { value: 'it', label: 'Italiano', group: 'Europa' },
    { value: 'pt', label: 'Portugués', group: 'Europa' },
    { value: 'zh', label: 'Chino', group: 'Asia' },
    { value: 'ja', label: 'Japonés', group: 'Asia' },
    { value: 'ko', label: 'Coreano', group: 'Asia' },
    { value: 'ar', label: 'Árabe', group: 'Otros' },
    { value: 'ru', label: 'Ruso', group: 'Otros' },
    { value: 'hi', label: 'Hindi', group: 'Otros' },
  ]

  const contactMethods = [
    { value: 'email', label: 'Email', icon: faEnvelope },
    { value: 'phone', label: 'Teléfono', icon: faPhone },
    { value: 'sms', label: 'SMS', icon: faPhone },
    { value: 'whatsapp', label: 'WhatsApp', icon: faPhone },
    { value: 'telegram', label: 'Telegram', icon: faPhone },
  ]

  // Agrupar idiomas por grupo
  const groupedLanguages = languages.reduce((acc, language) => {
    if (!acc[language.group]) {
      acc[language.group] = []
    }
    acc[language.group].push(language)
    return acc
  }, {})

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Dropdowns Avanzados</h2>
      <p className="text-muted-foreground">
        Los dropdowns avanzados permiten a los usuarios seleccionar opciones de una lista desplegable con funcionalidades
        adicionales como búsqueda, agrupamiento y selección múltiple.
      </p>

      {/* Tipos de Dropdowns */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tipos de Dropdowns</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Dropdown Básico</CardTitle>
              <CardDescription>Selección simple de una lista de opciones</CardDescription>
            </CardHeader>
            <CardContent>
              <Dropdown>
                <DropdownTrigger>Seleccionar país</DropdownTrigger>
                <DropdownContent>
                  {countries.map((country) => (
                    <DropdownItem key={country.value} value={country.value}>
                      {country.label}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              </Dropdown>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Dropdown con Búsqueda</CardTitle>
              <CardDescription>Permite filtrar opciones mientras escribes</CardDescription>
            </CardHeader>
            <CardContent>
              <Dropdown>
                <DropdownTrigger>Seleccionar país</DropdownTrigger>
                <DropdownContent>
                  <DropdownSearch placeholder="Buscar país..." />
                  {countries.map((country) => (
                    <DropdownItem key={country.value} value={country.value}>
                      {country.label}
                    </DropdownItem>
                  ))}
                  <DropdownEmpty>No se encontraron países</DropdownEmpty>
                </DropdownContent>
              </Dropdown>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Dropdown con Grupos</CardTitle>
              <CardDescription>Opciones organizadas en categorías</CardDescription>
            </CardHeader>
            <CardContent>
              <Dropdown>
                <DropdownTrigger>Seleccionar idioma</DropdownTrigger>
                <DropdownContent>
                  <DropdownSearch placeholder="Buscar idioma..." />
                  {Object.entries(groupedLanguages).map(([group, items]) => (
                    <DropdownGroup key={group} title={group}>
                      {items.map((language) => (
                        <DropdownItem key={language.value} value={language.value}>
                          {language.label}
                        </DropdownItem>
                      ))}
                    </DropdownGroup>
                  ))}
                </DropdownContent>
              </Dropdown>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Dropdown con Selección Múltiple</CardTitle>
              <CardDescription>Permite seleccionar varias opciones</CardDescription>
            </CardHeader>
            <CardContent>
              <Dropdown multiple>
                <DropdownTrigger>Métodos de contacto</DropdownTrigger>
                <DropdownContent>
                  {contactMethods.map((method) => (
                    <DropdownItem key={method.value} value={method.value}>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={method.icon} className="mr-2 h-4 w-4 text-muted-foreground" />
                        {method.label}
                      </div>
                    </DropdownItem>
                  ))}
                </DropdownContent>
              </Dropdown>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Ejemplos de Uso */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Ejemplos de Uso</h3>
        <Card>
          <CardHeader>
            <CardTitle>Formulario de Preferencias</CardTitle>
            <CardDescription>Ejemplo de uso de dropdowns en un formulario</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Ubicación</label>
                <Dropdown>
                  <DropdownTrigger className="w-full">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faLocationDot} className="mr-2 h-4 w-4 text-muted-foreground" />
                      Seleccionar país
                    </div>
                  </DropdownTrigger>
                  <DropdownContent>
                    <DropdownSearch placeholder="Buscar país..." />
                    {countries.map((country) => (
                      <DropdownItem key={country.value} value={country.value}>
                        {country.label}
                      </DropdownItem>
                    ))}
                  </DropdownContent>
                </Dropdown>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Idioma</label>
                <Dropdown>
                  <DropdownTrigger className="w-full">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faLanguage} className="mr-2 h-4 w-4 text-muted-foreground" />
                      Seleccionar idioma
                    </div>
                  </DropdownTrigger>
                  <DropdownContent>
                    <DropdownSearch placeholder="Buscar idioma..." />
                    {Object.entries(groupedLanguages).map(([group, items]) => (
                      <DropdownGroup key={group} title={group}>
                        {items.map((language) => (
                          <DropdownItem key={language.value} value={language.value}>
                            {language.label}
                          </DropdownItem>
                        ))}
                      </DropdownGroup>
                    ))}
                  </DropdownContent>
                </Dropdown>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <label className="text-sm font-medium">Métodos de contacto preferidos</label>
              <Dropdown multiple>
                <DropdownTrigger className="w-full">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faUser} className="mr-2 h-4 w-4 text-muted-foreground" />
                    Seleccionar métodos de contacto
                  </div>
                </DropdownTrigger>
                <DropdownContent>
                  {contactMethods.map((method) => (
                    <DropdownItem key={method.value} value={method.value}>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={method.icon} className="mr-2 h-4 w-4 text-muted-foreground" />
                        {method.label}
                      </div>
                    </DropdownItem>
                  ))}
                </DropdownContent>
              </Dropdown>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Zona horaria</label>
                <Dropdown>
                  <DropdownTrigger className="w-full">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faClock} className="mr-2 h-4 w-4 text-muted-foreground" />
                      Seleccionar zona horaria
                    </div>
                  </DropdownTrigger>
                  <DropdownContent>
                    <DropdownSearch placeholder="Buscar zona horaria..." />
                    <DropdownGroup title="América">
                      <DropdownItem value="america/new_york">
                        (GMT-5:00) Este de EE.UU. y Canadá
                      </DropdownItem>
                      <DropdownItem value="america/chicago">
                        (GMT-6:00) Centro de EE.UU. y Canadá
                      </DropdownItem>
                      <DropdownItem value="america/denver">
                        (GMT-7:00) Montaña de EE.UU. y Canadá
                      </DropdownItem>
                      <DropdownItem value="america/los_angeles">
                        (GMT-8:00) Pacífico de EE.UU. y Canadá
                      </DropdownItem>
                      <DropdownItem value="america/mexico_city">
                        (GMT-6:00) Ciudad de México
                      </DropdownItem>
                    </DropdownGroup>
                    <DropdownGroup title="Europa">
                      <DropdownItem value="europe/london">
                        (GMT+0:00) Londres
                      </DropdownItem>
                      <DropdownItem value="europe/paris">
                        (GMT+1:00) París, Madrid
                      </DropdownItem>
                      <DropdownItem value="europe/helsinki">
                        (GMT+2:00) Helsinki
                      </DropdownItem>
                    </DropdownGroup>
                    <DropdownGroup title="Asia">
                      <DropdownItem value="asia/tokyo">
                        (GMT+9:00) Tokio
                      </DropdownItem>
                      <DropdownItem value="asia/shanghai">
                        (GMT+8:00) Shanghái
                      </DropdownItem>
                    </DropdownGroup>
                  </DropdownContent>
                </Dropdown>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Formato de fecha</label>
                <Dropdown>
                  <DropdownTrigger className="w-full">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faCalendarDays} className="mr-2 h-4 w-4 text-muted-foreground" />
                      Seleccionar formato
                    </div>
                  </DropdownTrigger>
                  <DropdownContent>
                    <DropdownItem value="dd/mm/yyyy">
                      DD/MM/AAAA (31/12/2025)
                    </DropdownItem>
                    <DropdownItem value="mm/dd/yyyy">
                      MM/DD/AAAA (12/31/2025)
                    </DropdownItem>
                    <DropdownItem value="yyyy-mm-dd">
                      AAAA-MM-DD (2025-12-31)
                    </DropdownItem>
                  </DropdownContent>
                </Dropdown>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline">Cancelar</Button>
              <Button>Guardar preferencias</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Variantes de Estilo */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Variantes de Estilo</h3>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Estilo Estándar</label>
                <Dropdown>
                  <DropdownTrigger className="w-full">
                    Seleccionar opción
                  </DropdownTrigger>
                  <DropdownContent>
                    <DropdownItem value="option1">Opción 1</DropdownItem>
                    <DropdownItem value="option2">Opción 2</DropdownItem>
                    <DropdownItem value="option3">Opción 3</DropdownItem>
                  </DropdownContent>
                </Dropdown>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Con Icono</label>
                <Dropdown>
                  <DropdownTrigger className="w-full">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faFilter} className="mr-2 h-4 w-4" />
                      Filtrar por
                    </div>
                  </DropdownTrigger>
                  <DropdownContent>
                    <DropdownItem value="newest">Más recientes</DropdownItem>
                    <DropdownItem value="oldest">Más antiguos</DropdownItem>
                    <DropdownItem value="popular">Más populares</DropdownItem>
                  </DropdownContent>
                </Dropdown>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Estilo Botón</label>
                <Dropdown>
                  <DropdownTrigger className="w-full">
                    <Button variant="outline" className="w-full justify-between">
                      <span>Ordenar por</span>
                      <FontAwesomeIcon icon={faSort} className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownContent>
                    <DropdownItem value="name_asc">Nombre (A-Z)</DropdownItem>
                    <DropdownItem value="name_desc">Nombre (Z-A)</DropdownItem>
                    <DropdownItem value="date_asc">Fecha (antigua-reciente)</DropdownItem>
                    <DropdownItem value="date_desc">Fecha (reciente-antigua)</DropdownItem>
                  </DropdownContent>
                </Dropdown>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DropdownsSection

