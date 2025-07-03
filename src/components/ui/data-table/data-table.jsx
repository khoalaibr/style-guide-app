import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSort, 
  faSortUp, 
  faSortDown, 
  faChevronLeft, 
  faChevronRight, 
  faSearch,
  faFilter,
  faEllipsisVertical,
  faFileExport,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Checkbox } from '@/components/ui/checkbox'

// Componente principal de la tabla
const DataTable = ({
  data = [],
  columns = [],
  pagination = true,
  search = true,
  selection = false,
  actions = true,
  rowsPerPageOptions = [5, 10, 25, 50],
  defaultRowsPerPage = 10,
  className,
  ...props
}) => {
  // Estado para la tabla
  const [sortConfig, setSortConfig] = React.useState({ key: null, direction: null })
  const [currentPage, setCurrentPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [selectedRows, setSelectedRows] = React.useState([])
  const [filters, setFilters] = React.useState({})

  // Función para ordenar los datos
  const sortedData = React.useMemo(() => {
    let sortableData = [...data]
    
    // Aplicar filtros
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        sortableData = sortableData.filter(item => {
          const value = item[key]
          if (typeof value === 'string') {
            return value.toLowerCase().includes(filters[key].toLowerCase())
          }
          return value === filters[key]
        })
      }
    })
    
    // Aplicar búsqueda global
    if (searchTerm) {
      sortableData = sortableData.filter(item => {
        return columns.some(column => {
          const value = item[column.accessor]
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchTerm.toLowerCase())
          }
          return false
        })
      })
    }
    
    // Aplicar ordenamiento
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        const aValue = a[sortConfig.key]
        const bValue = b[sortConfig.key]
        
        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    
    return sortableData
  }, [data, sortConfig, searchTerm, filters])

  // Función para manejar el ordenamiento
  const requestSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
      key = null
      direction = null
    }
    setSortConfig({ key, direction })
  }

  // Función para obtener el icono de ordenamiento
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return <FontAwesomeIcon icon={faSort} className="ml-1 h-3 w-3 text-muted-foreground" />
    }
    if (sortConfig.direction === 'ascending') {
      return <FontAwesomeIcon icon={faSortUp} className="ml-1 h-3 w-3" />
    }
    return <FontAwesomeIcon icon={faSortDown} className="ml-1 h-3 w-3" />
  }

  // Función para manejar la selección de filas
  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

  // Función para seleccionar/deseleccionar todas las filas
  const handleSelectAllRows = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(paginatedData.map(row => row.id))
    }
  }

  // Función para exportar datos
  const exportData = (format) => {
    // Implementación básica para CSV
    if (format === 'csv') {
      const headers = columns.map(col => col.header).join(',')
      const rows = sortedData.map(row => 
        columns.map(col => row[col.accessor]).join(',')
      ).join('\n')
      
      const csvContent = `${headers}\n${rows}`
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.setAttribute('href', url)
      link.setAttribute('download', 'table-data.csv')
      link.click()
    }
  }

  // Calcular datos paginados
  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage
    return sortedData.slice(startIndex, startIndex + rowsPerPage)
  }, [sortedData, currentPage, rowsPerPage])

  // Calcular número total de páginas
  const totalPages = Math.ceil(sortedData.length / rowsPerPage)

  // Cambiar de página
  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages))
  }

  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Barra de herramientas */}
      {(search || actions || selection) && (
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {search && (
            <div className="relative max-w-sm">
              <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          )}
          
          <div className="flex items-center gap-2">
            {selection && selectedRows.length > 0 && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSelectedRows([])}
              >
                Limpiar selección ({selectedRows.length})
              </Button>
            )}
            
            {actions && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <FontAwesomeIcon icon={faEllipsisVertical} className="h-4 w-4" />
                    <span className="ml-2">Acciones</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => exportData('csv')}>
                    <FontAwesomeIcon icon={faFileExport} className="mr-2 h-4 w-4" />
                    Exportar CSV
                  </DropdownMenuItem>
                  {selectedRows.length > 0 && (
                    <DropdownMenuItem className="text-destructive">
                      <FontAwesomeIcon icon={faTrash} className="mr-2 h-4 w-4" />
                      Eliminar seleccionados
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      )}
      
      {/* Tabla */}
      <div className="rounded-md border">
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/50">
              <tr>
                {selection && (
                  <th className="h-12 w-12 px-4">
                    <Checkbox
                      checked={paginatedData.length > 0 && selectedRows.length === paginatedData.length}
                      onCheckedChange={handleSelectAllRows}
                      aria-label="Seleccionar todas las filas"
                    />
                  </th>
                )}
                
                {columns.map((column) => (
                  <th
                    key={column.accessor}
                    className={cn(
                      'h-12 px-4 text-left align-middle font-medium text-muted-foreground',
                      column.sortable !== false && 'cursor-pointer select-none',
                      column.className
                    )}
                    onClick={() => column.sortable !== false && requestSort(column.accessor)}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{column.header}</span>
                      {column.sortable !== false && getSortIcon(column.accessor)}
                      
                      {column.filterable && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <FontAwesomeIcon icon={faFilter} className="h-3 w-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start">
                            <div className="p-2">
                              <Input
                                type="text"
                                placeholder={`Filtrar ${column.header}`}
                                value={filters[column.accessor] || ''}
                                onChange={(e) => setFilters({
                                  ...filters,
                                  [column.accessor]: e.target.value
                                })}
                                className="h-8 w-full"
                              />
                            </div>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            
            <tbody>
              {paginatedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={selection ? columns.length + 1 : columns.length}
                    className="h-24 text-center"
                  >
                    No se encontraron resultados.
                  </td>
                </tr>
              ) : (
                paginatedData.map((row, rowIndex) => (
                  <tr
                    key={row.id || rowIndex}
                    className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  >
                    {selection && (
                      <td className="p-4">
                        <Checkbox
                          checked={selectedRows.includes(row.id)}
                          onCheckedChange={() => handleSelectRow(row.id)}
                          aria-label={`Seleccionar fila ${rowIndex + 1}`}
                        />
                      </td>
                    )}
                    
                    {columns.map((column) => (
                      <td
                        key={column.accessor}
                        className={cn('p-4 align-middle', column.cellClassName)}
                      >
                        {column.cell ? column.cell(row) : row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Paginación */}
      {pagination && totalPages > 0 && (
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Mostrando {((currentPage - 1) * rowsPerPage) + 1} a {Math.min(currentPage * rowsPerPage, sortedData.length)} de {sortedData.length} resultados
          </div>
          
          <div className="flex items-center space-x-6 lg:space-x-8">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium">Filas por página</p>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value))
                  setCurrentPage(1)
                }}
                className="h-8 rounded-md border border-input bg-transparent px-2 py-1 text-sm"
              >
                {rowsPerPageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex w-[100px] items-center justify-center text-sm font-medium">
              Página {currentPage} de {totalPages}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
              >
                <span className="sr-only">Ir a la primera página</span>
                <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
                <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4 -ml-1" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="sr-only">Ir a la página anterior</span>
                <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="sr-only">Ir a la página siguiente</span>
                <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                <span className="sr-only">Ir a la última página</span>
                <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
                <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4 -ml-1" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { DataTable }

