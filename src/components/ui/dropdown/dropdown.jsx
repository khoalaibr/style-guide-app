import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSearch, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils'

const DropdownContext = React.createContext(null)

const Dropdown = ({
  children,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedItems, setSelectedItems] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState('')
  const dropdownRef = React.useRef(null)

  const toggle = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)

  const selectItem = (item) => {
    if (props.multiple) {
      if (selectedItems.some(i => i.value === item.value)) {
        setSelectedItems(selectedItems.filter(i => i.value !== item.value))
      } else {
        setSelectedItems([...selectedItems, item])
      }
    } else {
      setSelectedItems([item])
      close()
    }
  }

  const clearSelection = () => {
    setSelectedItems([])
  }

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        close()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const contextValue = {
    isOpen,
    toggle,
    close,
    selectedItems,
    selectItem,
    clearSelection,
    searchTerm,
    setSearchTerm,
    ...props
  }

  return (
    <DropdownContext.Provider value={contextValue}>
      <div ref={dropdownRef} className={cn('relative', className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

const DropdownTrigger = ({
  children,
  className,
  ...props
}) => {
  const { toggle, selectedItems, multiple } = React.useContext(DropdownContext)

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        'flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <span className="flex-1 text-left truncate">
        {selectedItems.length > 0 
          ? multiple 
            ? `${selectedItems.length} seleccionado${selectedItems.length > 1 ? 's' : ''}` 
            : selectedItems[0].label
          : children}
      </span>
      <FontAwesomeIcon icon={faChevronDown} className="ml-2 h-4 w-4 opacity-50" />
    </button>
  )
}

const DropdownSearch = ({
  placeholder = "Buscar...",
  className,
  ...props
}) => {
  const { searchTerm, setSearchTerm } = React.useContext(DropdownContext)

  return (
    <div className="relative px-3 py-2">
      <div className="relative">
        <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className={cn(
            'w-full rounded-md border border-input bg-background py-2 pl-10 pr-3 text-sm placeholder:text-muted-foreground',
            'focus:outline-none focus:ring-2 focus:ring-ring',
            className
          )}
          {...props}
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}

const DropdownContent = ({
  children,
  className,
  ...props
}) => {
  const { isOpen, searchTerm } = React.useContext(DropdownContext)

  if (!isOpen) return null

  return (
    <div
      className={cn(
        'absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-background p-1 text-foreground shadow-md',
        'animate-in fade-in-80 zoom-in-95',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const DropdownGroup = ({
  children,
  title,
  className,
  ...props
}) => {
  return (
    <div className={cn('py-1', className)} {...props}>
      {title && (
        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
          {title}
        </div>
      )}
      {children}
    </div>
  )
}

const DropdownItem = ({
  value,
  children,
  className,
  disabled = false,
  ...props
}) => {
  const { selectItem, selectedItems, close, multiple } = React.useContext(DropdownContext)
  const isSelected = selectedItems.some(item => item.value === value)

  const handleClick = () => {
    if (!disabled) {
      selectItem({ value, label: children })
      if (!multiple) close()
    }
  }

  return (
    <div
      className={cn(
        'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
        'hover:bg-accent hover:text-accent-foreground',
        'focus:bg-accent focus:text-accent-foreground',
        {
          'bg-accent text-accent-foreground': isSelected,
          'opacity-50 cursor-not-allowed': disabled
        },
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {multiple && (
        <div className="mr-2 h-4 w-4 flex items-center justify-center">
          {isSelected && <FontAwesomeIcon icon={faCheck} className="h-4 w-4" />}
        </div>
      )}
      <span className="flex-1 truncate">{children}</span>
    </div>
  )
}

const DropdownSeparator = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('my-1 h-px bg-muted', className)}
      {...props}
    />
  )
}

const DropdownEmpty = ({
  children = "No hay resultados",
  className,
  ...props
}) => {
  return (
    <div
      className={cn('py-6 text-center text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownSearch,
  DropdownGroup,
  DropdownItem,
  DropdownSeparator,
  DropdownEmpty
}

