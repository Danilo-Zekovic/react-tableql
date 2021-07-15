import { TableQLTheme } from '../shared/types'

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
  }
}

export interface State {
  theme: TableQLProviderTheme
}

export type Action = {
  type: 'setTheme'
  theme: TableQLProviderTheme
}
export type Dispatch = (action: Action) => void

export interface TableProviderProps {
  theme?: TableQLTheme
}
