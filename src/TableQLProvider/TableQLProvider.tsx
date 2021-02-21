import React, { createContext, useContext, useReducer, ReactNode } from 'react'

interface TableQLTheme {
  header?: {
    color?: string | [string, string]
    background?: string | [string, string]
  }
  rows?: {
    color?: string | [string, string]
    background?: string | [string, string]
    hover?: string | [string, string]
  }
}
type Action = {
  type: 'setTheme' | 'updateTheme'
  theme?: TableQLTheme
}
type Dispatch = (action: Action) => void
type State = {
  theme?: TableQLTheme
}
type TabelQLProviderProps = { children: ReactNode; theme?: TableQLTheme }

const TableQLStateContext = createContext<State | undefined>(undefined)
const TableQLDispatchContext = createContext<Dispatch | undefined>(undefined)

function tabelQLReducer(state: State, { type, theme }: Action) {
  switch (type) {
    case 'setTheme': {
      return { theme: theme }
    }
    case 'updateTheme': {
      return { theme: { ...state.theme, ...theme } }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

function TableQLProvider({ children, theme }: TabelQLProviderProps) {
  const [state, dispatch] = useReducer(tabelQLReducer, { theme })
  return (
    <TableQLStateContext.Provider value={state}>
      <TableQLDispatchContext.Provider value={dispatch}>
        {children}
      </TableQLDispatchContext.Provider>
    </TableQLStateContext.Provider>
  )
}

function useTableQLState() {
  const context = useContext(TableQLStateContext)
  if (context === undefined) {
    throw new Error('useTableQLState must be used within a TableQLProvider')
  }
  return context
}

function useTableQLDispatch() {
  const context = useContext(TableQLDispatchContext)
  if (context === undefined) {
    throw new Error('useTableQLDispatch must be used within a TableQLProvider')
  }
  return context
}

const useTableQL = () => {
  const context = useTableQLDispatch()
  const { theme } = useTableQLState()

  // const setTheme = () => context

  // set all fields, replaces all values if not set then reset them to default
  const setTheme = (theme: TableQLTheme) => context({ type: 'setTheme', theme })

  // TODO update just parameters that are passed, all other stay the same as they used to be
  const updateTheme = (theme: TableQLTheme) =>
    context({ type: 'updateTheme', theme })

  return {
    theme,
    setTheme,
    updateTheme,
  }
}

export { TableQLProvider, useTableQLState, useTableQLDispatch, useTableQL }
