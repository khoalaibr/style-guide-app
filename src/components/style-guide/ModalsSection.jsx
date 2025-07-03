import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faInfoCircle, 
  faExclamationTriangle, 
  faCheckCircle, 
  faQuestionCircle,
  faTrash,
  faSave
} from '@fortawesome/free-solid-svg-icons'

const ModalsSection = () => {
  const [isDefaultModalOpen, setIsDefaultModalOpen] = React.useState(false)
  const [isDestructiveModalOpen, setIsDestructiveModalOpen] = React.useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false)
  const [isWarningModalOpen, setIsWarningModalOpen] = React.useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = React.useState(false)
  const [isCustomModalOpen, setIsCustomModalOpen] = React.useState(false)

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Modales</h2>
      <p className="text-muted-foreground">
        Los modales son ventanas emergentes que aparecen sobre el contenido principal para mostrar información importante, 
        solicitar confirmación o recopilar datos del usuario.
      </p>

      {/* Tipos de Modales */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tipos de Modales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Modal Estándar</CardTitle>
              <CardDescription>Modal básico para información general</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setIsDefaultModalOpen(true)}>
                Abrir Modal
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Modal Destructivo</CardTitle>
              <CardDescription>Para acciones peligrosas o irreversibles</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" onClick={() => setIsDestructiveModalOpen(true)}>
                <FontAwesomeIcon icon={faTrash} className="mr-2 h-4 w-4" />
                Eliminar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Modal de Éxito</CardTitle>
              <CardDescription>Confirma que una acción se completó correctamente</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="bg-green-600 hover:bg-green-700" 
                onClick={() => setIsSuccessModalOpen(true)}
              >
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2 h-4 w-4" />
                Completado
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Modal de Advertencia</CardTitle>
              <CardDescription>Alerta sobre posibles problemas</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="bg-yellow-600 hover:bg-yellow-700" 
                onClick={() => setIsWarningModalOpen(true)}
              >
                <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2 h-4 w-4" />
                Advertencia
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Modal Informativo</CardTitle>
              <CardDescription>Proporciona información adicional</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="bg-blue-600 hover:bg-blue-700" 
                onClick={() => setIsInfoModalOpen(true)}
              >
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2 h-4 w-4" />
                Información
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Modal Personalizado</CardTitle>
              <CardDescription>Con contenido y acciones personalizadas</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline"
                onClick={() => setIsCustomModalOpen(true)}
              >
                <FontAwesomeIcon icon={faQuestionCircle} className="mr-2 h-4 w-4" />
                Personalizado
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tamaños de Modales */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tamaños de Modales</h3>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" onClick={() => setIsDefaultModalOpen(true)}>
                Pequeño (sm)
              </Button>
              <Button variant="outline" onClick={() => setIsDefaultModalOpen(true)}>
                Mediano (md)
              </Button>
              <Button variant="outline" onClick={() => setIsDefaultModalOpen(true)}>
                Grande (lg)
              </Button>
              <Button variant="outline" onClick={() => setIsDefaultModalOpen(true)}>
                Extra Grande (xl)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modales */}
      <Modal
        isOpen={isDefaultModalOpen}
        onClose={() => setIsDefaultModalOpen(false)}
        title="Modal Estándar"
        size="md"
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsDefaultModalOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={() => setIsDefaultModalOpen(false)}>
              Aceptar
            </Button>
          </div>
        }
      >
        <p>
          Este es un modal estándar que puede utilizarse para mostrar información o solicitar acciones al usuario.
          Los modales son útiles cuando necesitas captar la atención del usuario para una tarea específica.
        </p>
      </Modal>

      <Modal
        isOpen={isDestructiveModalOpen}
        onClose={() => setIsDestructiveModalOpen(false)}
        title="Confirmar eliminación"
        size="sm"
        variant="destructive"
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsDestructiveModalOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={() => setIsDestructiveModalOpen(false)}>
              <FontAwesomeIcon icon={faTrash} className="mr-2 h-4 w-4" />
              Eliminar
            </Button>
          </div>
        }
      >
        <div className="space-y-2">
          <p className="font-medium">¿Estás seguro de que deseas eliminar este elemento?</p>
          <p className="text-sm text-muted-foreground">
            Esta acción no se puede deshacer. El elemento será eliminado permanentemente de nuestros servidores.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        title="Operación completada"
        size="sm"
        variant="success"
        footer={
          <div className="flex justify-end">
            <Button 
              className="bg-green-600 hover:bg-green-700" 
              onClick={() => setIsSuccessModalOpen(false)}
            >
              Aceptar
            </Button>
          </div>
        }
      >
        <div className="flex flex-col items-center justify-center py-4">
          <FontAwesomeIcon icon={faCheckCircle} className="h-16 w-16 text-green-500 mb-4" />
          <p className="text-center">
            ¡Tu operación se ha completado con éxito! Los cambios han sido guardados correctamente.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={isWarningModalOpen}
        onClose={() => setIsWarningModalOpen(false)}
        title="Advertencia"
        size="md"
        variant="warning"
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsWarningModalOpen(false)}>
              Cancelar
            </Button>
            <Button 
              className="bg-yellow-600 hover:bg-yellow-700" 
              onClick={() => setIsWarningModalOpen(false)}
            >
              Continuar de todos modos
            </Button>
          </div>
        }
      >
        <div className="space-y-2">
          <p>
            Hay cambios sin guardar en tu documento. Si continúas, estos cambios se perderán.
          </p>
          <p className="text-sm text-muted-foreground">
            Te recomendamos guardar tu trabajo antes de continuar.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        title="Información importante"
        size="md"
        variant="info"
        footer={
          <div className="flex justify-end">
            <Button 
              className="bg-blue-600 hover:bg-blue-700" 
              onClick={() => setIsInfoModalOpen(false)}
            >
              Entendido
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <p>
            Hemos actualizado nuestra política de privacidad. Los cambios entrarán en vigor el 15 de julio de 2025.
          </p>
          <div className="rounded-md bg-blue-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faInfoCircle} className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Cambios principales</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Mejoras en la protección de datos personales</li>
                    <li>Nuevas opciones para gestionar tus preferencias</li>
                    <li>Actualización de los términos de uso del servicio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        title="Guardar proyecto"
        size="lg"
        footer={
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setIsCustomModalOpen(false)}>
              Guardar como borrador
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsCustomModalOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setIsCustomModalOpen(false)}>
                <FontAwesomeIcon icon={faSave} className="mr-2 h-4 w-4" />
                Guardar y publicar
              </Button>
            </div>
          </div>
        }
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="project-name" className="block text-sm font-medium mb-1">
                Nombre del proyecto
              </label>
              <input
                type="text"
                id="project-name"
                className="w-full rounded-md border border-input px-3 py-2 text-sm"
                placeholder="Mi proyecto"
                defaultValue="Proyecto sin título"
              />
            </div>
            <div>
              <label htmlFor="project-category" className="block text-sm font-medium mb-1">
                Categoría
              </label>
              <select
                id="project-category"
                className="w-full rounded-md border border-input px-3 py-2 text-sm"
              >
                <option value="design">Diseño</option>
                <option value="development">Desarrollo</option>
                <option value="marketing">Marketing</option>
                <option value="other">Otro</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="project-description" className="block text-sm font-medium mb-1">
              Descripción
            </label>
            <textarea
              id="project-description"
              className="w-full rounded-md border border-input px-3 py-2 text-sm"
              rows={3}
              placeholder="Describe tu proyecto..."
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Opciones de visibilidad
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="visibility-public"
                  name="visibility"
                  className="h-4 w-4 border-gray-300"
                  defaultChecked
                />
                <label htmlFor="visibility-public" className="ml-2 block text-sm">
                  Público - Visible para todos
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="visibility-private"
                  name="visibility"
                  className="h-4 w-4 border-gray-300"
                />
                <label htmlFor="visibility-private" className="ml-2 block text-sm">
                  Privado - Solo visible para ti y colaboradores
                </label>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalsSection

