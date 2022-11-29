import { TableQLProviderTheme } from '../TableQLProvider/types'

export const defaultTheme: TableQLProviderTheme = {
  header: {
    color: '#000',
    background: 'transparent', //'#fff',
  },
  rows: {
    color: '#000',
    background: 'transparent', //'#fff',
    hover: '#f1f3f5',
    stripes: {
      color: '#000',
      background: 'transparent', //'#fff',
      hover: '#f1f3f5',
    },
  },
  grid: {
    horizontal: '#dee2e6',
    vertical: '#dee2e6',
    frame: '#dee2e6',
  },
}
