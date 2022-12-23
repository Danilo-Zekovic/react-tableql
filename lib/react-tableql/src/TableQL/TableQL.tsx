import React, { FC } from 'react'

import { TableProvider } from '../TableProvider'
import { Table } from '../components/Table'
import { Column, Data } from '../shared/types'

import './TableQL.css'

const TableQL: FC = () => {
  return <Table />
}

interface TableQLProps {
  data: Data
  columns?: Column[]
}

const TableQLWithProvider: FC<TableQLProps> = ({ data, columns }) => (
  <TableProvider data={data} columns={columns}>
    <TableQL />
  </TableProvider>
)

export default TableQLWithProvider
