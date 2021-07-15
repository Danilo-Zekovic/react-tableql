import React, {
  createContext,
  FC,
  ReactElement,
  useContext,
  useReducer,
} from 'react'

import { defaultTheme } from '../shared/defaultTheme'
import { useTableQLState } from '../TableQLProvider'
import { getFormattedTheme } from './getFormattedTheme'
import { tableReducer } from './reducer'
import { State, TableProviderProps } from './types'

const TableStateContext = createContext<State>({ theme: defaultTheme })

const TableProvider: FC<TableProviderProps> = ({
  children,
  theme,
}): ReactElement => {
  // TODO as of right now this is line makes it mandatory to have the TableQLProvider, but we do not want to force it onto users
  const { theme: globalTheme } = useTableQLState()
  const [state] = useReducer(tableReducer, {
    // if there is no local theme being passed use the global
    // TODO this should probably be improved so that if global is not set either just don't use it
    theme: getFormattedTheme(theme || globalTheme),
  })

  return (
    <TableStateContext.Provider value={state}>
      {children}
    </TableStateContext.Provider>
  )
}

const useTableState = (): State => {
  const context = useContext(TableStateContext)
  /* istanbul ignore next */
  if (context === undefined) {
    throw new Error('useTableState must be used within a TableQLProvider')
  }
  return context
}

export { TableProvider, useTableState }
