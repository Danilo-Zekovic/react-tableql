import React, {
  createContext,
  FC,
  ReactElement,
  useContext,
  useEffect,
  useReducer,
} from 'react'

import { defaultTheme } from '../shared/defaultTheme'
import { traverseObjectForArray } from '../utils'
import { useTableQLState } from '../TableQLProvider'
import { getFormattedTheme } from './getFormattedTheme'
import { tableReducer } from './reducer'
import { State, TableProviderProps } from './types'

const getHeaderLabels = (data: object): string[] => {
  // log('Get header labels.')
  const labels = [] as string[]
  for (const key in data) {
    // exception to eliminate meta fields
    if (!key.includes('__')) {
      labels.push(key)
    }
  }

  return labels
}

const defaultState: State = { theme: defaultTheme, data: [], dataKeys: [] }

const TableStateContext = createContext<State>(defaultState)

const TableProvider: FC<TableProviderProps> = ({
  data,
  children,
  theme,
  columns,
}): ReactElement => {
  // TODO as of right now this is line makes it mandatory to have the TableQLProvider, but we do not want to force it onto users
  const { theme: globalTheme } = useTableQLState()
  const [state, dispatch] = useReducer(tableReducer, {
    ...defaultState,
    // if there is no local theme being passed use the global
    // TODO this should probably be improved so that if global is not set either just don't use it
    theme: getFormattedTheme(theme || globalTheme),
  })

  useEffect(() => {
    const traversedData: object[] = data
      ? (traverseObjectForArray(data) as object[])
      : []

    // setDisplayData(traversedData)
    // setFullData(traversedData)

    if (traversedData.length) {
      dispatch({
        type: 'setData',
        payload: { data: traversedData },
      })
    }
    dispatch({
      type: 'setDataKeys',
      payload: { dataKeys: columns || getHeaderLabels(traversedData[0]) },
    })
  }, [data, columns])

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
