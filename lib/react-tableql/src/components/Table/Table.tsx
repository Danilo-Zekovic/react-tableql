import React, { FC } from 'react'
import { TableHeader } from '../TableHeader'
import { TableRows } from '../TableRows'

import './Table.css'

const Table: FC = () => {
  return (
    <table className={`TableQL`}>
      <caption className={`TableQL-caption`}>Statement Summary</caption>
      <thead className={`TableQL-thead`}>
        <TableHeader />
      </thead>
      <tbody className={`TableQL-tbody`}>
        <TableRows />
      </tbody>
    </table>
  )
}

export default Table
