import { getQueriesForElement } from '@testing-library/dom'
import React, { createContext, useContext, useReducer } from 'react'
import { defaultTheme } from '../themes/default'
import { tableQLReducer } from './reducer'
import {
  Dispatch,
  State,
  TableQLProviderProps,
  TableQLProviderTheme,
  TableQLTheme,
  TableQLThemeAdvanced,
  TableQLThemeBasic,
} from './types'

const TableQLStateContext = createContext<State>({ theme: defaultTheme })
const TableQLDispatchContext = createContext<Dispatch | undefined>(undefined)

const isBasicTheme = (theme: TableQLTheme): theme is TableQLThemeBasic => {
  if (
    (theme as TableQLThemeBasic).primary ||
    (theme as TableQLThemeBasic).secondary ||
    (theme as TableQLThemeBasic).primaryFontColor ||
    (theme as TableQLThemeBasic).secondaryFontColor ||
    (theme as TableQLThemeBasic).striped ||
    (theme as TableQLThemeBasic).primary
  ) {
    /* istanbul ignore next */
    return true
  }
  return false
}
/* istanbul ignore next */
const formattedBasicTheme = ({
  primary,
  primaryFontColor,
  secondaryFontColor,
  secondary,
  grid,
}: TableQLThemeBasic): TableQLProviderTheme => {
  const {
    header,
    rows,
    grid: { horizontal, vertical },
  } = defaultTheme

  return {
    header: {
      color: primaryFontColor || header.color,
      background: primary || header.background,
    },
    rows: {
      color: secondaryFontColor || rows.color,
      background: secondary || rows.background,
      hover: rows.hover,
      stripes: {
        color: primaryFontColor || rows.stripes.color,
        background: primaryFontColor || rows.stripes.background,
        hover: rows.stripes.hover,
      },
    },
    grid: {
      horizontal: grid || horizontal,
      vertical: grid || vertical,
    },
  }
}

const formattedAdvancedTheme = ({
  header,
  rows,
  grid,
}: TableQLThemeAdvanced): TableQLProviderTheme => {
  return {
    header: { ...defaultTheme.header, ...header },
    rows: {
      ...defaultTheme.rows,
      ...rows,
      stripes: {
        ...defaultTheme.rows.stripes,
        ...rows?.stripes,
      },
    },
    grid: { ...defaultTheme.grid, ...grid },
  }
}

export const getFormattedTheme = (
  theme: TableQLTheme,
): TableQLProviderTheme => {
  return isBasicTheme(theme)
    ? formattedBasicTheme(theme)
    : formattedAdvancedTheme(theme)
}

const TableQLProvider = ({
  children,
  theme = defaultTheme,
}: TableQLProviderProps) => {
  // TODO take in the theme and convert it to theme

  const [state, dispatch] = useReducer(tableQLReducer, {
    theme: getFormattedTheme(theme),
  })
  return (
    <TableQLStateContext.Provider value={state}>
      <TableQLDispatchContext.Provider value={dispatch}>
        {children}
      </TableQLDispatchContext.Provider>
    </TableQLStateContext.Provider>
  )
}

const useTableQLState = () => {
  const context = useContext(TableQLStateContext)
  if (context === undefined) {
    throw new Error('useTableQLState must be used within a TableQLProvider')
  }
  return context
}

const useTableQLDispatch = () => {
  const context = useContext(TableQLDispatchContext)
  if (context === undefined) {
    throw new Error('useTableQLDispatch must be used within a TableQLProvider')
  }
  return context
}

// TODO extract this to a separate file
const useTableQL = () => {
  const context = useTableQLDispatch()
  const { theme } = useTableQLState()

  // set all fields, replaces all values if not set then reset them to default
  const setTheme = (newTheme: TableQLTheme) =>
    context({ type: 'setTheme', theme: getFormattedTheme(newTheme) })

  // TODO update just parameters that are passed, all other stay the same as they used to be. Maybe comment it out for now.
  const updateTheme = (updatedTheme: TableQLTheme) =>
    context({ type: 'updateTheme', theme: getFormattedTheme(updatedTheme) })

  return {
    theme,
    setTheme,
    updateTheme,
  }
}

export { TableQLProvider, useTableQLState, useTableQLDispatch, useTableQL }
