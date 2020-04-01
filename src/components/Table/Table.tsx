import React, { FC } from 'react'

import SortArrows from '../SortArrows/SortArrows'

import '../../index.css'

export interface Props {
  log: (tag: string, load?: any) => void
  displayData: { [key: string]: any }[]
  dataKeys: (string | any)[]
  styles?: {
    table?: string
    thead?: string
    theadTr?: string
    theadTh?: string
    tbody?: string
    tbodyTr?: string
    tbodyTd?: string
  }
  onRowClick?: (data: any) => void
  sort?: boolean
  debug?: boolean
  onSort?: (column: any) => void
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

  // TODO create Columns type and insert it here
  const getNodeValue = (column: any, data: any) => {
    // if customColumn then ignore search for data
    if (column.customColumn) {
      // component is required when customColumn true
      if (!column.component) {
        throw new Error(
          'When customColumn true, component property must be provided!',
        )
      }
      return column.component(data)
    }

    let value = data // will hold the final return value
    const keys = column.id ? column.id.split('.') : column.split('.')

    keys.forEach((key: string | number) => {
      // TODO check here might be just string
      value = value[key]
    })

    return column.component ? column.component(value) : String(value)
  }

  const renderTableRows = (displayData: any, dataKeys: any[]) => {
    return displayData.map((data: any) => (
      <tr
        key={`TableQLRow${JSON.stringify(data)}`}
        className={styles.tbodyTr || 'TableQL-tr'}
        onClick={onRowClick ? () => onRowClick(data) : undefined}
      >
        {dataKeys.map((column: any, columnIndex: number) => (
          <td
            className={`
            ${styles.tbodyTd || 'TableQL-td'}
            ${getNodeStyle(column, data)}
            `}
            key={`TableQLNode${column + columnIndex}`}
          >
            {getNodeValue(column, data)}
          </td>
        ))}
      </tr>
    ))
  }

  const renderTableHeader = (dataKeys: any) => {
    return dataKeys.map((column: any, columnIndex: number) => (
      <th
        className={`${styles.theadTh ||
          'TableQL-thead-th'} ${column.headerStyle || ''} ${
          column.sort || sort ? 'TableQL-thead-th-sort' : ''
        }`}
        key={`TableQLHeader${column + columnIndex}`}
        onClick={() => {
          if (!column.sort && !sort && onSort === undefined) return
          log('Header sort was clicked: ', column)
          // @ts-ignore
          onSort(column)
        }}
      >
        {typeof column === 'string'
          ? formatLabel(column)
          : column.label || formatLabel(column.id)}
        {(column.sort || sort) && <SortArrows />}
      </th>
    ))
  }

  // when nodeStyle is a function that is selective styling as function decides should and which css class will be returned.
  const getNodeStyle = ({ nodeStyle }, data: any) => {
    if (!nodeStyle) {
      return ''
    }

    return nodeStyle && typeof nodeStyle == 'string'
      ? nodeStyle
      : nodeStyle(data)
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
