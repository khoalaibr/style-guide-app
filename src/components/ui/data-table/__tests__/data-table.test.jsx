import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataTable } from '@/components/ui/data-table/data-table'

// Mock para FontAwesomeIcon
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon, className }) => (
    <span data-testid="font-awesome-icon" className={className}>
      {icon.iconName || 'icon'}
    </span>
  )
}))

// Mock para los iconos de Font Awesome
jest.mock('@fortawesome/free-solid-svg-icons', () => ({
  faSort: { iconName: 'sort' },
  faSortUp: { iconName: 'sort-up' },
  faSortDown: { iconName: 'sort-down' },
  faChevronLeft: { iconName: 'chevron-left' },
  faChevronRight: { iconName: 'chevron-right' },
  faSearch: { iconName: 'search' },
  faFilter: { iconName: 'filter' },
  faEllipsisVertical: { iconName: 'ellipsis-vertical' },
  faFileExport: { iconName: 'file-export' },
  faTrash: { iconName: 'trash' },
  faEye: { iconName: 'eye' },
  faPencil: { iconName: 'pencil' }
}))

// Mock para los componentes de UI
jest.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }) => (
    <button {...props}>{children}</button>
  )
}))

jest.mock('@/components/ui/input', () => ({
  Input: (props) => <input {...props} />
}))

jest.mock('@/components/ui/dropdown-menu', () => ({
  DropdownMenu: ({ children }) => <div data-testid="dropdown-menu">{children}</div>,
  DropdownMenuContent: ({ children }) => <div data-testid="dropdown-menu-content">{children}</div>,
  DropdownMenuItem: ({ children, ...props }) => <div data-testid="dropdown-menu-item" {...props}>{children}</div>,
  DropdownMenuTrigger: ({ children, asChild }) => (
    <div data-testid="dropdown-menu-trigger">
      {asChild ? children : <button>{children}</button>}
    </div>
  )
}))

jest.mock('@/components/ui/checkbox', () => ({
  Checkbox: (props) => <input type="checkbox" {...props} />
}))

describe('DataTable Component', () => {
  const mockData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' }
  ]

  const mockColumns = [
    { accessor: 'name', header: 'Name', sortable: true },
    { accessor: 'email', header: 'Email', sortable: true },
    { accessor: 'role', header: 'Role', sortable: true }
  ]

  test('renders table with data', () => {
    render(<DataTable data={mockData} columns={mockColumns} />)
    
    // Verificar que se renderizan los encabezados
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Role')).toBeInTheDocument()
    
    // Verificar que se renderizan los datos
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('jane@example.com')).toBeInTheDocument()
    expect(screen.getByText('Editor')).toBeInTheDocument()
  })

  test('renders search input when search is true', () => {
    render(<DataTable data={mockData} columns={mockColumns} search={true} />)
    
    // Verificar que se renderiza el campo de búsqueda
    expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument()
  })

  test('renders pagination when pagination is true', () => {
    render(<DataTable data={mockData} columns={mockColumns} pagination={true} />)
    
    // Verificar que se renderiza la paginación
    expect(screen.getByText(/Mostrando 1 a 3 de 3 resultados/i)).toBeInTheDocument()
    expect(screen.getByText(/Página 1 de 1/i)).toBeInTheDocument()
  })

  test('renders checkboxes when selection is true', () => {
    render(<DataTable data={mockData} columns={mockColumns} selection={true} />)
    
    // Verificar que se renderizan las casillas de verificación
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes.length).toBe(mockData.length + 1) // +1 para el checkbox de "seleccionar todos"
  })

  test('renders actions dropdown when actions is true', () => {
    render(<DataTable data={mockData} columns={mockColumns} actions={true} />)
    
    // Verificar que se renderiza el menú de acciones
    expect(screen.getByText('Acciones')).toBeInTheDocument()
  })

  test('renders "no results" message when data is empty', () => {
    render(<DataTable data={[]} columns={mockColumns} />)
    
    // Verificar que se muestra el mensaje de "no hay resultados"
    expect(screen.getByText('No se encontraron resultados.')).toBeInTheDocument()
  })

  test('allows sorting when clicking on sortable column headers', async () => {
    render(<DataTable data={mockData} columns={mockColumns} />)
    
    // Hacer clic en el encabezado de la columna "Name" para ordenar
    const nameHeader = screen.getByText('Name')
    await userEvent.click(nameHeader)
    
    // Verificar que se muestra el icono de ordenamiento
    const sortIcons = screen.getAllByTestId('font-awesome-icon')
    const sortUpIcon = sortIcons.find(icon => icon.textContent === 'sort-up')
    expect(sortUpIcon).toBeTruthy()
    
    // Hacer clic nuevamente para cambiar la dirección de ordenamiento
    await userEvent.click(nameHeader)
    
    // Verificar que se muestra el icono de ordenamiento descendente
    const sortDownIcon = screen.getAllByTestId('font-awesome-icon').find(icon => icon.textContent === 'sort-down')
    expect(sortDownIcon).toBeTruthy()
  })

  test('allows changing rows per page', async () => {
    // Crear datos suficientes para probar la paginación
    const manyRows = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Person ${i + 1}`,
      email: `person${i + 1}@example.com`,
      role: i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'User' : 'Editor'
    }))
    
    render(
      <DataTable 
        data={manyRows} 
        columns={mockColumns} 
        pagination={true}
        defaultRowsPerPage={5}
        rowsPerPageOptions={[5, 10, 20]}
      />
    )
    
    // Verificar que inicialmente se muestran 5 filas
    expect(screen.getByText(/Mostrando 1 a 5 de 20 resultados/i)).toBeInTheDocument()
    
    // Cambiar a 10 filas por página
    const rowsPerPageSelect = screen.getByRole('combobox')
    fireEvent.change(rowsPerPageSelect, { target: { value: '10' } })
    
    // Verificar que ahora se muestran 10 filas
    expect(screen.getByText(/Mostrando 1 a 10 de 20 resultados/i)).toBeInTheDocument()
  })

  test('allows navigating between pages', async () => {
    // Crear datos suficientes para probar la paginación
    const manyRows = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Person ${i + 1}`,
      email: `person${i + 1}@example.com`,
      role: i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'User' : 'Editor'
    }))
    
    render(
      <DataTable 
        data={manyRows} 
        columns={mockColumns} 
        pagination={true}
        defaultRowsPerPage={5}
      />
    )
    
    // Verificar que inicialmente estamos en la página 1
    expect(screen.getByText(/Página 1 de 4/i)).toBeInTheDocument()
    
    // Hacer clic en el botón "Siguiente"
    const nextButton = screen.getAllByRole('button').find(button => 
      button.textContent.includes('chevron-right') && !button.textContent.includes('chevron-left')
    )
    await userEvent.click(nextButton)
    
    // Verificar que ahora estamos en la página 2
    expect(screen.getByText(/Página 2 de 4/i)).toBeInTheDocument()
  })

  test('allows searching for data', async () => {
    render(<DataTable data={mockData} columns={mockColumns} search={true} />)
    
    // Buscar por "John"
    const searchInput = screen.getByPlaceholderText('Buscar...')
    await userEvent.type(searchInput, 'John')
    
    // Verificar que solo se muestra la fila de John Doe
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument()
    expect(screen.queryByText('Bob Johnson')).not.toBeInTheDocument()
  })

  test('allows selecting rows when selection is true', async () => {
    render(<DataTable data={mockData} columns={mockColumns} selection={true} />)
    
    // Seleccionar la primera fila
    const checkboxes = screen.getAllByRole('checkbox')
    await userEvent.click(checkboxes[1]) // El primer checkbox es "seleccionar todos"
    
    // Verificar que se muestra el botón para limpiar la selección
    expect(screen.getByText(/Limpiar selección \(1\)/i)).toBeInTheDocument()
  })

  test('allows selecting all rows with the header checkbox', async () => {
    render(<DataTable data={mockData} columns={mockColumns} selection={true} />)
    
    // Seleccionar todas las filas
    const selectAllCheckbox = screen.getAllByRole('checkbox')[0]
    await userEvent.click(selectAllCheckbox)
    
    // Verificar que se muestra el botón para limpiar la selección con el número correcto
    expect(screen.getByText(/Limpiar selección \(3\)/i)).toBeInTheDocument()
  })

  test('renders custom cell content when cell function is provided', () => {
    const columnsWithCustomCell = [
      ...mockColumns,
      {
        accessor: 'actions',
        header: 'Actions',
        cell: () => <button>Edit</button>
      }
    ]
    
    render(<DataTable data={mockData} columns={columnsWithCustomCell} />)
    
    // Verificar que se renderizan los botones personalizados
    const editButtons = screen.getAllByRole('button', { name: 'Edit' })
    expect(editButtons.length).toBe(mockData.length)
  })

  test('applies additional className when provided', () => {
    render(<DataTable data={mockData} columns={mockColumns} className="custom-table" />)
    
    // Verificar que se aplica la clase personalizada
    const tableContainer = screen.getByRole('table').closest('div').parentElement
    expect(tableContainer).toHaveClass('custom-table')
  })
})

