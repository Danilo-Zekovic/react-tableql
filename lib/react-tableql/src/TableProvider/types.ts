import { ReactNode } from 'react'
import { Column, Data, TableQLTheme } from '../shared/types'

interface TableQLProviderTheme {
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

export interface State {
  theme: TableQLProviderTheme
  data: object[] | []
  dataKeys: Column[]
}

export type Action =
  | {
      type: 'setTheme'
      payload: { theme: TableQLProviderTheme }
    }
  | { type: 'setData'; payload: { data: object[] | [] } }
  | { type: 'setDataKeys'; payload: { dataKeys: Column[] } }

export type Dispatch = (action: Action) => void

export interface TableProviderProps {
  data: Data
  columns?: Column[]
  theme?: TableQLTheme
  children?: ReactNode
}
