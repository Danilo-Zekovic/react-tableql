import { ReactNode } from 'react'

import { TableQLTheme } from '../shared/types'

export interface TableQLProviderTheme {
  header: {
    color: string
    background: string
  }
  rows: {
    color: string
    background: string
    hover: string
    stripes: {
      color: string
      background: string
      hover: string
    }
  }
  grid: {
    horizontal: string
    vertical: string
    frame: string
  }
}

export type Action = {
  type: 'setTheme' | 'updateTheme'
  theme: TableQLTheme // TableQLProviderTheme //TableQLTheme
}
export type Dispatch = (action: Action) => void

export type State = {
  theme: TableQLTheme // TableQLProviderTheme
}

export type TableQLProviderProps = { children: ReactNode; theme?: TableQLTheme }

export interface UseTableQL {
  theme: TableQLTheme // TableQLProviderTheme
  setTheme: (newTheme: TableQLTheme) => void
  updateTheme: (updatedTheme: TableQLTheme) => void
}
