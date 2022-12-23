import React, { FC } from 'react'
import { formatStringToTitleCase } from '../../utils'

import { useTableState } from '../../TableProvider'

const TableHeader: FC = () => {
  const { dataKeys } = useTableState()
  return (
    <tr className={`TableQL-tr`}>
      {dataKeys.map((column) => (
        <th
          scope="col"
          className={`TableQL-th`}
          key={`TableQL-th-${typeof column === 'string' ? column : column.id}`}
        >
          {typeof column === 'string'
            ? formatStringToTitleCase(column)
            : column.label || formatStringToTitleCase(column.id)}
        </th>
      ))}
    </tr>
  )
}

export default TableHeader
