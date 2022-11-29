import React, { FC } from 'react'

const TableHeader: FC = () => {
  return (
    <tr className={`TableQL-tr`}>
      <th scope="col" className={`TableQL-th`}>
        Account
      </th>
      <th scope="col" className={`TableQL-th`}>
        Due Date
      </th>
      <th scope="col" className={`TableQL-th`}>
        Amount
      </th>
      <th scope="col" className={`TableQL-th`}>
        Period
      </th>
    </tr>
  )
}

export default TableHeader
