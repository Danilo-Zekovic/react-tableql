import React, { FC } from 'react'

import { Column } from '../../shared/types'

interface Props {
  column: Column
  data: string
}

const TableCell: FC<Props> = ({ column, data }) => {
  return (
    <td
      className={`TableQL-td`}
      data-label={typeof column === 'string' ? column : column.id}
    >
      {data}
    </td>
  )
}

export default TableCell
