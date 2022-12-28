import React, { FC } from 'react'

import { TableProvider } from '../TableProvider'
import { Table } from '../components/Table'
import { Column, Data, OnRowClick } from '../shared/types'

import './TableQL.css'

const TableQL: FC = () => {
  return <Table />
}

interface TableQLProps {
  data: Data
  columns?: Column[]
  onRowClick?: OnRowClick
}

const TableQLWithProvider: FC<TableQLProps> = ({
  data,
  columns,
  onRowClick,
}) => (
  <TableProvider data={data} columns={columns} onRowClick={onRowClick}>
    <TableQL />
  </TableProvider>
)

export default TableQLWithProvider
