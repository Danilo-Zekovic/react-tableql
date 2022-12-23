export interface TableQLThemeAdvanced {
  header?: {
    color?: string
    background?: string
  }
  rows?: {
    color?: string
    background?: string
    hover?: string
    stripes?: {
      color?: string
      background?: string
      hover?: string
    }
  }
  grid?: {
    horizontal?: string
    vertical?: string
    frame?: string
  }
}

export interface TableQLThemeBasic {
  primary?: string // main color for the table, header and colored striped rows
  secondary?: string // rows that are not colored in striped scenario or all rows in non striped setup
  primaryFontColor?: string // font color for header and striped rows
  secondaryFontColor?: string // color for rows
  striped?: boolean // should the table rows be striped
  grid?: string // grid line color
}

export type TableQLTheme = TableQLThemeAdvanced | TableQLThemeBasic

export type Data = object[] | object | []
export interface ColumnConfig {
  id: string
  label?: string
  component?: (data: unknown) => void
  customColumn?: boolean
  headerStyle?: string
  nodeStyle?: string | ((data: unknown) => void)
  sort?: boolean | ((newOrder: unknown, property: string) => void)
}

export type Column = string | ColumnConfig
