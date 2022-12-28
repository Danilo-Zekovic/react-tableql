import React, { FC } from 'react'
import { useTableState } from '../../TableProvider'
import { TableHeader } from '../TableHeader'
import { TableRows } from '../TableRows'

import './Table.css'

const Table: FC = () => {
  const { data, dataKeys, onEmpty } = useTableState()

  if (Array.isArray(data) && data.length === 0) {
    // log('No data found!', data.length)
    if (onEmpty) {
      return onEmpty({ reason: 'No data found!' })
    }

    // if no data, and no columns defined
    if (!dataKeys.length) {
      return <p>{`No data found!`}</p>
    }
  }
  return (
    <table className={`TableQL`}>
      {/* TODO caption should be customizable */}
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
