import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon, Eye, EyeOff } from 'lucide-react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const FormsSection = () => {
  const [date, setDate] = React.useState()
  const [showPassword, setShowPassword] = React.useState(false)
  const [sliderValue, setSliderValue] = React.useState([50])
  const [switchValue, setSwitchValue] = React.useState(false)

  return (
    <div className="space-y-8">
      {/* Basic Inputs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Campos de Entrada Básicos</h3>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="tu@email.com" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Juan Pérez" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••" 
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+34 123 456 789" 
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Textarea */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Área de Texto</h3>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea 
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                className="min-h-[100px]"
              />
              <p className="text-sm text-muted-foreground">
                Máximo 500 caracteres
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Select Dropdown */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Selectores</h3>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>País</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un país" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">España</SelectItem>
                    <SelectItem value="mx">México</SelectItem>
                    <SelectItem value="ar">Argentina</SelectItem>
                    <SelectItem value="co">Colombia</SelectItem>
                    <SelectItem value="pe">Perú</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Categoría</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Tecnología</SelectItem>
                    <SelectItem value="design">Diseño</SelectItem>
                    <SelectItem value="business">Negocios</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Checkboxes and Radio Buttons */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Opciones de Selección</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Checkboxes</CardTitle>
              <CardDescription>Selección múltiple</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Acepto los términos y condiciones</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter">Suscribirme al newsletter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="updates" />
                <Label htmlFor="updates">Recibir actualizaciones por email</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Radio Buttons</CardTitle>
              <CardDescription>Selección única</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Opción 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Opción 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">Opción 3</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Controls */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Controles Avanzados</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Switch y Slider</CardTitle>
              <CardDescription>Controles interactivos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Notificaciones</Label>
                <Switch 
                  id="notifications"
                  checked={switchValue}
                  onCheckedChange={setSwitchValue}
                />
              </div>
              <div className="space-y-2">
                <Label>Volumen: {sliderValue[0]}%</Label>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Selector de Fecha</CardTitle>
              <CardDescription>Calendar picker</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label>Fecha de nacimiento</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: es }) : "Selecciona una fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Form Example */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Ejemplo de Formulario Completo</h3>
        <Card>
          <CardHeader>
            <CardTitle>Formulario de Contacto</CardTitle>
            <CardDescription>
              Ejemplo de un formulario completo con validación visual
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nombre *</Label>
                <Input id="firstName" placeholder="Juan" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Apellidos *</Label>
                <Input id="lastName" placeholder="Pérez García" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Email *</Label>
              <Input id="contactEmail" type="email" placeholder="juan@ejemplo.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Asunto</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un asunto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">Consulta general</SelectItem>
                  <SelectItem value="support">Soporte técnico</SelectItem>
                  <SelectItem value="sales">Ventas</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactMessage">Mensaje *</Label>
              <Textarea 
                id="contactMessage"
                placeholder="Describe tu consulta..."
                className="min-h-[120px]"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="contactTerms" required />
              <Label htmlFor="contactTerms" className="text-sm">
                Acepto la política de privacidad y términos de uso *
              </Label>
            </div>

            <Separator />

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Enviar Mensaje
              </Button>
              <Button type="button" variant="outline">
                Limpiar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Form States */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Estados de Formulario</h3>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="normal">Estado Normal</Label>
                <Input id="normal" placeholder="Texto normal" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="error">Estado de Error</Label>
                <Input 
                  id="error" 
                  placeholder="Campo con error" 
                  className="border-destructive focus:ring-destructive"
                />
                <p className="text-sm text-destructive">Este campo es requerido</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled">Estado Deshabilitado</Label>
                <Input id="disabled" placeholder="Campo deshabilitado" disabled />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default FormsSection

