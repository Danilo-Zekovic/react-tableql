import { defaultTheme } from '../shared/defaultTheme'
import {
  TableQLTheme,
  TableQLThemeAdvanced,
  TableQLThemeBasic,
} from '../shared/types'
import { TableQLProviderTheme } from '../TableQLProvider/types'

const isBasicTheme = (theme: TableQLTheme): theme is TableQLThemeBasic => {
  if (
    (theme as TableQLThemeBasic).primary ||
    (theme as TableQLThemeBasic).secondary ||
    (theme as TableQLThemeBasic).primaryFontColor ||
    (theme as TableQLThemeBasic).secondaryFontColor ||
    (theme as TableQLThemeBasic).striped ||
    (theme as TableQLThemeBasic).primary
  ) {
    return true
  }
  return false
}

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
