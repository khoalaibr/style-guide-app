import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DataTable } from '@/components/ui/data-table/data-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEye, 
  faPencil, 
  faTrash,
  faCheck,
  faXmark,
  faCircle
} from '@fortawesome/free-solid-svg-icons'

const DataTablesSection = () => {
  // Datos de ejemplo para las tablas
  const usersData = [
    { 
      id: 1, 
      name: 'Juan Pérez', 
      email: 'juan.perez@example.com', 
      role: 'Admin', 
      status: 'active',
      lastLogin: '2025-06-30T10:30:00'
    },
    { 
      id: 2, 
      name: 'María García', 
      email: 'maria.garcia@example.com', 
      role: 'Editor', 
      status: 'active',
      lastLogin: '2025-07-01T14:45:00'
    },
    { 
      id: 3, 
      name: 'Carlos Rodríguez', 
      email: 'carlos.rodriguez@example.com', 
      role: 'Viewer', 
      status: 'inactive',
      lastLogin: '2025-06-15T09:20:00'
    },
    { 
      id: 4, 
      name: 'Ana Martínez', 
      email: 'ana.martinez@example.com', 
      role: 'Editor', 
      status: 'active',
      lastLogin: '2025-07-02T08:15:00'
    },
    { 
      id: 5, 
      name: 'Roberto Fernández', 
      email: 'roberto.fernandez@example.com', 
      role: 'Viewer', 
      status: 'pending',
      lastLogin: null
    },
    { 
      id: 6, 
      name: 'Laura Sánchez', 
      email: 'laura.sanchez@example.com', 
      role: 'Admin', 
      status: 'active',
      lastLogin: '2025-06-29T16:50:00'
    },
    { 
      id: 7, 
      name: 'Miguel López', 
      email: 'miguel.lopez@example.com', 
      role: 'Editor', 
      status: 'inactive',
      lastLogin: '2025-06-10T11:30:00'
    },
  ]

  const productsData = [
    {
      id: 1,
      name: 'Laptop Pro X1',
      category: 'Electrónica',
      price: 1299.99,
      stock: 45,
      status: 'in_stock'
    },
    {
      id: 2,
      name: 'Monitor UltraWide 34"',
      category: 'Electrónica',
      price: 499.99,
      stock: 12,
      status: 'low_stock'
    },
    {
      id: 3,
      name: 'Teclado Mecánico RGB',
      category: 'Accesorios',
      price: 129.99,
      stock: 78,
      status: 'in_stock'
    },
    {
      id: 4,
      name: 'Mouse Inalámbrico',
      category: 'Accesorios',
      price: 59.99,
      stock: 0,
      status: 'out_of_stock'
    },
    {
      id: 5,
      name: 'Auriculares Bluetooth',
      category: 'Audio',
      price: 149.99,
      stock: 23,
      status: 'in_stock'
    },
    {
      id: 6,
      name: 'Tablet Pro 11"',
      category: 'Electrónica',
      price: 799.99,
      stock: 5,
      status: 'low_stock'
    },
  ]

  // Columnas para la tabla de usuarios
  const userColumns = [
    {
      accessor: 'name',
      header: 'Nombre',
      sortable: true,
      filterable: true
    },
    {
      accessor: 'email',
      header: 'Email',
      sortable: true,
      filterable: true
    },
    {
      accessor: 'role',
      header: 'Rol',
      sortable: true,
      filterable: true,
      cell: (row) => {
        const roleStyles = {
          Admin: 'bg-purple-100 text-purple-800',
          Editor: 'bg-blue-100 text-blue-800',
          Viewer: 'bg-gray-100 text-gray-800'
        }
        
        return (
          <Badge className={roleStyles[row.role]}>
            {row.role}
          </Badge>
        )
      }
    },
    {
      accessor: 'status',
      header: 'Estado',
      sortable: true,
      filterable: true,
      cell: (row) => {
        const statusConfig = {
          active: {
            label: 'Activo',
            icon: faCheck,
            className: 'text-green-500'
          },
          inactive: {
            label: 'Inactivo',
            icon: faXmark,
            className: 'text-red-500'
          },
          pending: {
            label: 'Pendiente',
            icon: faCircle,
            className: 'text-yellow-500'
          }
        }
        
        const status = statusConfig[row.status]
        
        return (
          <div className="flex items-center">
            <FontAwesomeIcon icon={status.icon} className={`mr-2 h-4 w-4 ${status.className}`} />
            <span>{status.label}</span>
          </div>
        )
      }
    },
    {
      accessor: 'lastLogin',
      header: 'Último acceso',
      sortable: true,
      cell: (row) => {
        if (!row.lastLogin) return <span className="text-muted-foreground">Nunca</span>
        
        const date = new Date(row.lastLogin)
        return date.toLocaleDateString('es-ES', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }
    },
    {
      accessor: 'actions',
      header: 'Acciones',
      sortable: false,
      cell: (row) => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <FontAwesomeIcon icon={faPencil} className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive">
            <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
          </Button>
        </div>
      )
    }
  ]

  // Columnas para la tabla de productos
  const productColumns = [
    {
      accessor: 'name',
      header: 'Producto',
      sortable: true,
      filterable: true
    },
    {
      accessor: 'category',
      header: 'Categoría',
      sortable: true,
      filterable: true
    },
    {
      accessor: 'price',
      header: 'Precio',
      sortable: true,
      cell: (row) => `$${row.price.toFixed(2)}`
    },
    {
      accessor: 'stock',
      header: 'Stock',
      sortable: true
    },
    {
      accessor: 'status',
      header: 'Estado',
      sortable: true,
      filterable: true,
      cell: (row) => {
        const statusStyles = {
          in_stock: 'bg-green-100 text-green-800',
          low_stock: 'bg-yellow-100 text-yellow-800',
          out_of_stock: 'bg-red-100 text-red-800'
        }
        
        const statusLabels = {
          in_stock: 'En stock',
          low_stock: 'Stock bajo',
          out_of_stock: 'Agotado'
        }
        
        return (
          <Badge className={statusStyles[row.status]}>
            {statusLabels[row.status]}
          </Badge>
        )
      }
    },
    {
      accessor: 'actions',
      header: 'Acciones',
      sortable: false,
      cell: (row) => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <FontAwesomeIcon icon={faPencil} className="h-4 w-4" />
          </Button>
        </div>
      )
    }
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Tablas de Datos</h2>
      <p className="text-muted-foreground">
        Las tablas de datos permiten mostrar y manipular grandes conjuntos de información de manera organizada,
        con funcionalidades como ordenamiento, filtrado, paginación y selección de filas.
      </p>

      {/* Tabla Básica */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tabla de Usuarios</h3>
        <Card>
          <CardHeader>
            <CardTitle>Gestión de Usuarios</CardTitle>
            <CardDescription>
              Lista completa de usuarios con opciones de filtrado, ordenamiento y acciones.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              data={usersData}
              columns={userColumns}
              pagination={true}
              search={true}
              selection={true}
              actions={true}
              defaultRowsPerPage={5}
            />
          </CardContent>
        </Card>
      </div>

      {/* Tabla de Productos */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tabla de Productos</h3>
        <Card>
          <CardHeader>
            <CardTitle>Inventario de Productos</CardTitle>
            <CardDescription>
              Gestión de inventario con información detallada de productos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              data={productsData}
              columns={productColumns}
              pagination={true}
              search={true}
              selection={false}
              actions={true}
              defaultRowsPerPage={5}
            />
          </CardContent>
        </Card>
      </div>

      {/* Características y Opciones */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Características y Opciones</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Funcionalidades Principales</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className="mt-1 mr-2 h-4 w-4 text-green-500" />
                  <div>
                    <span className="font-medium">Ordenamiento</span>
                    <p className="text-sm text-muted-foreground">
                      Ordena las columnas haciendo clic en los encabezados.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className="mt-1 mr-2 h-4 w-4 text-green-500" />
                  <div>
                    <span className="font-medium">Filtrado</span>
                    <p className="text-sm text-muted-foreground">
                      Filtra los datos por columna o utiliza la búsqueda global.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className="mt-1 mr-2 h-4 w-4 text-green-500" />
                  <div>
                    <span className="font-medium">Paginación</span>
                    <p className="text-sm text-muted-foreground">
                      Navega entre páginas y ajusta el número de filas por página.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className="mt-1 mr-2 h-4 w-4 text-green-500" />
                  <div>
                    <span className="font-medium">Selección de Filas</span>
                    <p className="text-sm text-muted-foreground">
                      Selecciona filas individuales o todas a la vez.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className="mt-1 mr-2 h-4 w-4 text-green-500" />
                  <div>
                    <span className="font-medium">Exportación</span>
                    <p className="text-sm text-muted-foreground">
                      Exporta los datos a formatos como CSV.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Personalización</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className="mt-1 mr-2 h-4 w-4 text-green-500" />
                  <div>
                    <span className="font-medium">Renderizado de Celdas</span>
                    <p className="text-sm text-muted-foreground">
                      Personaliza el contenido de cada celda con componentes React.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className="mt-1 mr-2 h-4 w-4 text-green-500" />
                  <div>
                    <span className="font-medium">Estilos Condicionales</span>
                    <p className="text-sm text-muted-foreground">
                      Aplica estilos diferentes según el valor de la celda.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className="mt-1 mr-2 h-4 w-4 text-green-500" />
                  <div>
                    <span className="font-medium">Acciones Personalizadas</span>
                    <p className="text-sm text-muted-foreground">
                      Añade botones de acción específicos para cada fila.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className="mt-1 mr-2 h-4 w-4 text-green-500" />
                  <div>
                    <span className="font-medium">Configuración de Columnas</span>
                    <p className="text-sm text-muted-foreground">
                      Define qué columnas son ordenables, filtrables o visibles.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className="mt-1 mr-2 h-4 w-4 text-green-500" />
                  <div>
                    <span className="font-medium">Opciones de Paginación</span>
                    <p className="text-sm text-muted-foreground">
                      Configura el número de filas por página y la navegación.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabla Compacta */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tabla Compacta</h3>
        <Card>
          <CardContent className="p-4">
            <DataTable
              data={usersData.slice(0, 3)}
              columns={userColumns.filter(col => ['name', 'email', 'role'].includes(col.accessor))}
              pagination={false}
              search={false}
              selection={false}
              actions={false}
            />
          </CardContent>
        </Card>
        <p className="mt-2 text-sm text-muted-foreground">
          Versión simplificada para espacios reducidos o cuando se necesita mostrar menos información.
        </p>
      </div>
    </div>
  )
}

export default DataTablesSection

