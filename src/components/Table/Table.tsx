import React, { FC, ReactNode } from 'react'

import SortArrows from '../SortArrows/SortArrows'

import '../../index.css'

export interface ColumnConfig {
  id: string
  label?: string
  component?: (data: unknown) => void
  customColumn?: boolean
  headerStyle?: string
  nodeStyle?: string | ((data: unknown) => void)
  sort?: boolean | ((newOrder: any, property: string) => void)
}

export interface Styles {
  table?: string
  thead?: string
  theadTr?: string
  theadTh?: string
  tbody?: string
  tbodyTr?: string
  tbodyTd?: string
}

export interface Props {
  log: (tag: string, load?: unknown) => void
  displayData: { [key: string]: unknown }[]
  dataKeys: (string | ColumnConfig)[]
  styles?: Styles
  onRowClick?: (data: { [key: string]: unknown }) => void
  sort?: boolean
  debug?: boolean
  onSort?: (column: ColumnConfig | string) => void
}

const Table: FC<Props> = ({
  log,
  styles = {},
  displayData,
  dataKeys,
  onRowClick,
  onSort,
  sort,
}) => {
  /*
    Formating passed string to be title case, where each word starts with a upper case letter
  */
  const formatLabel = (label: string) => {
    log('Format label called.')

    return label
      .replace(/([a-z\d])([A-Z])/g, '$1' + ' ' + '$2')
      .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + ' ' + '$2')
      .replace(/([-,_,~,=,+])/g, ' ') // replace unwanted characters with spaces
      .split(' ')
      .map((label: string) => label.charAt(0).toUpperCase() + label.slice(1))
      .join(' ')
  }

  // TODO solve return type
  const getNodeValue: string | ReactNode | any = (
    column: string | ColumnConfig,
    data: any,
  ) => {
    // if (typeof column === 'string') return
    // if customColumn then ignore search for data
    if (typeof column !== 'string' && column.customColumn) {
      // component is required when customColumn true
      if (!column.component) {
        throw new Error(
          'When customColumn true, component property must be provided!',
        )
      }
      return column.component(data)
    }

    let value = data // will hold the final return value
    const keys =
      typeof column === 'string' ? column.split('.') : column.id.split('.')

    keys.forEach((key: string | number) => {
      // TODO check here might be just string
      value = value[key]
    })

    return typeof column !== 'string' && column.component
      ? column.component(value)
      : String(value)
  }

  const renderTableRows = (
    displayData: { [key: string]: unknown }[],
    dataKeys: (string | ColumnConfig)[],
  ) => {
    return displayData.map((data: { [key: string]: unknown }) => (
      <tr
        key={`TableQLRow${JSON.stringify(data)}`}
        className={styles.tbodyTr || 'TableQL-tr'}
        onClick={onRowClick ? () => onRowClick(data) : undefined}
      >
        {dataKeys.map((column: string | ColumnConfig, columnIndex: number) => (
          <td
            className={`
            ${styles.tbodyTd || 'TableQL-td'}
            ${getNodeStyle(column, data)}
            `}
            key={`TableQLNode${(typeof column === 'string'
              ? column
              : column.id) + columnIndex}`}
          >
            {getNodeValue(column, data)}
          </td>
        ))}
      </tr>
    ))
  }

  const renderTableHeader = (dataKeys: (string | ColumnConfig)[]) => {
    return dataKeys.map(
      (column: string | ColumnConfig, columnIndex: number) => (
        <th
          className={`${styles.theadTh || 'TableQL-thead-th'} ${
            column && typeof column !== 'string' && column.headerStyle
              ? column.headerStyle
              : ''
          } ${
            (column && typeof column !== 'string' && column.sort) || sort
              ? 'TableQL-thead-th-sort'
              : ''
          }`}
          key={`TableQLHeader${
            typeof column === 'string' ? column : column.id + columnIndex
          }`}
          onClick={() => {
            if (
              typeof column !== 'string' &&
              !column.sort &&
              !sort &&
              onSort === undefined
            )
              return
            log('Header sort was clicked: ', column)

            onSort !== undefined && onSort(column)
          }}
        >
          {typeof column === 'string'
            ? formatLabel(column)
            : column.label || formatLabel(column.id)}
          {((typeof column !== 'string' && column.sort) || sort) && (
            <SortArrows />
          )}
        </th>
      ),
    )
  }

  // when nodeStyle is a function that is selective styling as function decides should and which css class will be returned.
  const getNodeStyle = (column: string | ColumnConfig, data: any) => {
    if (!column || typeof column === 'string') {
      return ''
    }

    const { nodeStyle } = column

    if (!nodeStyle) return ''

    if (typeof nodeStyle === 'function') return nodeStyle(data)

    return nodeStyle
  }

  return (
    <table className={styles.table || 'TableQL'}>
      <thead className={styles.thead || 'TableQL-thead'}>
        <tr className={styles.theadTr || 'TableQL-tr'}>
          {renderTableHeader(dataKeys)}
        </tr>
      </thead>
      <tbody className={styles.tbody || 'TableQL-tbody'}>
        {renderTableRows(displayData, dataKeys)}
      </tbody>
    </table>
  )
}

export default Table
