import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSearch,
  DropdownGroup,
  DropdownSeparator,
  DropdownEmpty
} from '@/components/ui/dropdown/dropdown'

// Mock para FontAwesomeIcon
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon, className }) => (
    <span data-testid="font-awesome-icon" className={className}>
      {icon.iconName}
    </span>
  )
}))

// Mock para los iconos de Font Awesome
jest.mock('@fortawesome/free-solid-svg-icons', () => ({
  faChevronDown: { iconName: 'chevron-down' },
  faSearch: { iconName: 'search' },
  faCheck: { iconName: 'check' },
  faTimes: { iconName: 'times' }
}))

describe('Dropdown Components', () => {
  describe('Basic Dropdown', () => {
    test('renders closed by default', () => {
      render(
        <Dropdown>
          <DropdownTrigger>Select Option</DropdownTrigger>
          <DropdownContent>
            <DropdownItem value="option1">Option 1</DropdownItem>
            <DropdownItem value="option2">Option 2</DropdownItem>
          </DropdownContent>
        </Dropdown>
      )
      
      expect(screen.getByText('Select Option')).toBeInTheDocument()
      expect(screen.queryByText('Option 1')).not.toBeInTheDocument()
      expect(screen.queryByText('Option 2')).not.toBeInTheDocument()
    })

    test('opens when trigger is clicked', async () => {
      render(
        <Dropdown>
          <DropdownTrigger>Select Option</DropdownTrigger>
          <DropdownContent>
            <DropdownItem value="option1">Option 1</DropdownItem>
            <DropdownItem value="option2">Option 2</DropdownItem>
          </DropdownContent>
        </Dropdown>
      )
      
      const trigger = screen.getByText('Select Option')
      await userEvent.click(trigger)
      
      expect(screen.getByText('Option 1')).toBeInTheDocument()
      expect(screen.getByText('Option 2')).toBeInTheDocument()
    })

    test('selects an item when clicked', async () => {
      render(
        <Dropdown>
          <DropdownTrigger>Select Option</DropdownTrigger>
          <DropdownContent>
            <DropdownItem value="option1">Option 1</DropdownItem>
            <DropdownItem value="option2">Option 2</DropdownItem>
          </DropdownContent>
        </Dropdown>
      )
      
      // Abrir el dropdown
      const trigger = screen.getByText('Select Option')
      await userEvent.click(trigger)
      
      // Seleccionar una opción
      const option1 = screen.getByText('Option 1')
      await userEvent.click(option1)
      
      // Verificar que el dropdown se cerró y el trigger muestra la opción seleccionada
      expect(screen.getByText('Option 1')).toBeInTheDocument()
      expect(screen.queryByText('Option 2')).not.toBeInTheDocument()
    })

    test('closes when clicking outside', async () => {
      render(
        <div>
          <div data-testid="outside">Outside</div>
          <Dropdown>
            <DropdownTrigger>Select Option</DropdownTrigger>
            <DropdownContent>
              <DropdownItem value="option1">Option 1</DropdownItem>
              <DropdownItem value="option2">Option 2</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </div>
      )
      
      // Abrir el dropdown
      const trigger = screen.getByText('Select Option')
      await userEvent.click(trigger)
      
      // Verificar que está abierto
      expect(screen.getByText('Option 1')).toBeInTheDocument()
      
      // Hacer clic fuera del dropdown
      const outside = screen.getByTestId('outside')
      fireEvent.mouseDown(outside)
      
      // Verificar que se cerró
      expect(screen.queryByText('Option 1')).not.toBeInTheDocument()
    })
  })

  describe('Multiple Selection Dropdown', () => {
    test('allows selecting multiple items', async () => {
      render(
        <Dropdown multiple>
          <DropdownTrigger>Select Options</DropdownTrigger>
          <DropdownContent>
            <DropdownItem value="option1">Option 1</DropdownItem>
            <DropdownItem value="option2">Option 2</DropdownItem>
            <DropdownItem value="option3">Option 3</DropdownItem>
          </DropdownContent>
        </Dropdown>
      )
      
      // Abrir el dropdown
      const trigger = screen.getByText('Select Options')
      await userEvent.click(trigger)
      
      // Seleccionar múltiples opciones
      await userEvent.click(screen.getByText('Option 1'))
      await userEvent.click(screen.getByText('Option 2'))
      
      // Verificar que el dropdown sigue abierto
      expect(screen.getByText('Option 1')).toBeInTheDocument()
      expect(screen.getByText('Option 2')).toBeInTheDocument()
      expect(screen.getByText('Option 3')).toBeInTheDocument()
      
      // Verificar que el trigger muestra el número de opciones seleccionadas
      expect(screen.getByText('2 seleccionados')).toBeInTheDocument()
    })

    test('toggles selection when item is clicked again', async () => {
      render(
        <Dropdown multiple>
          <DropdownTrigger>Select Options</DropdownTrigger>
          <DropdownContent>
            <DropdownItem value="option1">Option 1</DropdownItem>
            <DropdownItem value="option2">Option 2</DropdownItem>
          </DropdownContent>
        </Dropdown>
      )
      
      // Abrir el dropdown
      const trigger = screen.getByText('Select Options')
      await userEvent.click(trigger)
      
      // Seleccionar una opción
      const option1 = screen.getByText('Option 1')
      await userEvent.click(option1)
      
      // Verificar que está seleccionada
      expect(screen.getByText('1 seleccionado')).toBeInTheDocument()
      
      // Deseleccionar la opción
      await userEvent.click(option1)
      
      // Verificar que ya no está seleccionada
      expect(screen.getByText('Select Options')).toBeInTheDocument()
    })
  })

  describe('Dropdown with Search', () => {
    test('renders search input', async () => {
      render(
        <Dropdown>
          <DropdownTrigger>Select Option</DropdownTrigger>
          <DropdownContent>
            <DropdownSearch placeholder="Search options..." />
            <DropdownItem value="option1">Option 1</DropdownItem>
            <DropdownItem value="option2">Option 2</DropdownItem>
          </DropdownContent>
        </Dropdown>
      )
      
      // Abrir el dropdown
      const trigger = screen.getByText('Select Option')
      await userEvent.click(trigger)
      
      // Verificar que se muestra el campo de búsqueda
      expect(screen.getByPlaceholderText('Search options...')).toBeInTheDocument()
    })

    test('allows typing in search input', async () => {
      render(
        <Dropdown>
          <DropdownTrigger>Select Option</DropdownTrigger>
          <DropdownContent>
            <DropdownSearch placeholder="Search options..." />
            <DropdownItem value="option1">Option 1</DropdownItem>
            <DropdownItem value="option2">Option 2</DropdownItem>
          </DropdownContent>
        </Dropdown>
      )
      
      // Abrir el dropdown
      const trigger = screen.getByText('Select Option')
      await userEvent.click(trigger)
      
      // Escribir en el campo de búsqueda
      const searchInput = screen.getByPlaceholderText('Search options...')
      await userEvent.type(searchInput, 'test')
      
      // Verificar que el valor del campo de búsqueda ha cambiado
      expect(searchInput).toHaveValue('test')
    })
  })

  describe('Dropdown with Groups', () => {
    test('renders groups with titles', async () => {
      render(
        <Dropdown>
          <DropdownTrigger>Select Option</DropdownTrigger>
          <DropdownContent>
            <DropdownGroup title="Group 1">
              <DropdownItem value="option1">Option 1</DropdownItem>
              <DropdownItem value="option2">Option 2</DropdownItem>
            </DropdownGroup>
            <DropdownGroup title="Group 2">
              <DropdownItem value="option3">Option 3</DropdownItem>
              <DropdownItem value="option4">Option 4</DropdownItem>
            </DropdownGroup>
          </DropdownContent>
        </Dropdown>
      )
      
      // Abrir el dropdown
      const trigger = screen.getByText('Select Option')
      await userEvent.click(trigger)
      
      // Verificar que se muestran los títulos de los grupos
      expect(screen.getByText('Group 1')).toBeInTheDocument()
      expect(screen.getByText('Group 2')).toBeInTheDocument()
      
      // Verificar que se muestran las opciones de cada grupo
      expect(screen.getByText('Option 1')).toBeInTheDocument()
      expect(screen.getByText('Option 2')).toBeInTheDocument()
      expect(screen.getByText('Option 3')).toBeInTheDocument()
      expect(screen.getByText('Option 4')).toBeInTheDocument()
    })
  })

  describe('Dropdown Empty State', () => {
    test('renders empty state when specified', async () => {
      render(
        <Dropdown>
          <DropdownTrigger>Select Option</DropdownTrigger>
          <DropdownContent>
            <DropdownEmpty>No results found</DropdownEmpty>
          </DropdownContent>
        </Dropdown>
      )
      
      // Abrir el dropdown
      const trigger = screen.getByText('Select Option')
      await userEvent.click(trigger)
      
      // Verificar que se muestra el estado vacío
      expect(screen.getByText('No results found')).toBeInTheDocument()
    })
  })

  describe('Dropdown Separator', () => {
    test('renders separator', async () => {
      render(
        <Dropdown>
          <DropdownTrigger>Select Option</DropdownTrigger>
          <DropdownContent>
            <DropdownItem value="option1">Option 1</DropdownItem>
            <DropdownSeparator />
            <DropdownItem value="option2">Option 2</DropdownItem>
          </DropdownContent>
        </Dropdown>
      )
      
      // Abrir el dropdown
      const trigger = screen.getByText('Select Option')
      await userEvent.click(trigger)
      
      // Verificar que se muestra el separador
      expect(screen.getByText('Option 1')).toBeInTheDocument()
      expect(screen.getByText('Option 2')).toBeInTheDocument()
      
      // El separador es un div con clases específicas
      const separator = document.querySelector('.my-1.h-px.bg-muted')
      expect(separator).toBeInTheDocument()
    })
  })
})

