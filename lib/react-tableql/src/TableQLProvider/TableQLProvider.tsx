import React, {
  createContext,
  ReactElement,
  useContext,
  useReducer,
} from 'react'

import { TableQLTheme } from '../shared/types'
import { defaultTheme } from '../shared/defaultTheme'
import { tableQLReducer } from './reducer'
import { Dispatch, State, TableQLProviderProps, UseTableQL } from './types'

const TableQLStateContext = createContext<State>({ theme: defaultTheme })
const TableQLDispatchContext = createContext<Dispatch | undefined>(undefined)

const TableQLProvider = ({
  children,
  theme = defaultTheme,
}: TableQLProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(tableQLReducer, {
    theme,
  })

  return (
    <TableQLStateContext.Provider value={state}>
      <TableQLDispatchContext.Provider value={dispatch}>
        {children}
      </TableQLDispatchContext.Provider>
    </TableQLStateContext.Provider>
  )
}

const useTableQLState = (): State => {
  const context = useContext(TableQLStateContext)
  /* istanbul ignore next */
  if (context === undefined) {
    throw new Error('useTableQLState must be used within a TableQLProvider')
  }
  return context
}

const useTableQLDispatch = (): Dispatch => {
  const context = useContext(TableQLDispatchContext)
  /* istanbul ignore next */
  if (context === undefined) {
    throw new Error('useTableQLDispatch must be used within a TableQLProvider')
  }
  return context
}

// TODO extract this to a separate file
const useTableQL = (): UseTableQL => {
  const context = useTableQLDispatch()
  const { theme } = useTableQLState()

  // set all fields, replaces all values if not set then reset them to default
  const setTheme = (newTheme: TableQLTheme): void =>
    context({
      type: 'setTheme',
      theme: newTheme,
    })

  // TODO update just parameters that are passed, all other stay the same as they used to be. Maybe comment it out for now.
  const updateTheme = (updatedTheme: TableQLTheme): void =>
    context({
      type: 'updateTheme',
      theme: updatedTheme,
    })

  return {
    theme,
    setTheme,
    updateTheme,
  }
}

export { TableQLProvider, useTableQLState, useTableQLDispatch, useTableQL }
