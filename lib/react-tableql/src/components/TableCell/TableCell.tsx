import React, { FC, ReactNode } from 'react'

import { Column, ColumnConfig } from '../../shared/types'

interface Props {
  column: Column
  data: object
}

const TableCell: FC<Props> = ({ column, data }) => {
  const getCellValue = (
    column: string | ColumnConfig,
    data: object,
  ): string | ReactNode => {
    // if customColumn then ignore search for data
    if (typeof column !== 'string' && !!column.customColumn) {
      // component is required when customColumn true
      if (!column.component) {
        throw new Error(
          'When customColumn true, component property must be provided!',
        )
      }
      return column.component(data)
    }

    let value = data // will hold the final return value

    // get the key path if the value is property of an object or multiple nested ones.
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

  return (
    <td
      className={`TableQL-td`}
      data-label={typeof column === 'string' ? column : column.id}
    >
      {getCellValue(column, data)}
    </td>
  )
}

export default TableCell
