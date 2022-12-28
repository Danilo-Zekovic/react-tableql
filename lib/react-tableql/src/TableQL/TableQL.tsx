import React, { FC } from 'react'

import { TableProvider } from '../TableProvider'
import { Table } from '../components/Table'
import { Column, Data, OnEmpty, OnRowClick } from '../shared/types'

import './TableQL.css'

const TableQL: FC = () => {
  return <Table />
}

interface TableQLProps {
  data: Data
  columns?: Column[]
  onRowClick?: OnRowClick
  onEmpty?: OnEmpty
}

const TableQLWithProvider: FC<TableQLProps> = ({ ...props }) => (
  <TableProvider {...props}>
    <TableQL />
  </TableProvider>
)

export default TableQLWithProvider
