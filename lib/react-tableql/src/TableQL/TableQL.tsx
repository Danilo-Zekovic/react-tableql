import React, { FC } from 'react'

import { TableProvider } from '../TableProvider'
import { Table } from '../components/Table'

import './TableQL.css'

const TableQL: FC = () => {
  return <Table />
}

const TableQLWithProvider: FC = ({ ...props }) => (
  <TableProvider>
    <TableQL {...props} />
  </TableProvider>
)

export default TableQLWithProvider
