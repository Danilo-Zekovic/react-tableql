import React, { FC } from 'react'
import { Column } from '../../shared/types'

import { useTableState } from '../../TableProvider'
import { TableCell } from '../TableCell'

const TableRows: FC = () => {
  const { data, dataKeys } = useTableState()

  return (
    <>
      {data.map((row: object) => (
        <tr
          key={`TableQLRow${JSON.stringify(row)}`}
          // className={styles.tbodyTr || 'TableQL-tr'}
          className={`TableQL-tr`}
          // onClick={onRowClick ? () => onRowClick(row) : undefined}
        >
          {dataKeys.map((column: Column, columnIndex: number) => (
            <TableCell
              key={`TableCell${JSON.stringify(column)}${columnIndex}`}
              column={column}
              // styles={styles}
              // data={row[typeof column === 'string' ? column : column.id]}
              data={row}
            />
          ))}
        </tr>
      ))}
    </>
  )
  // TODO rm
  // return (
  //   <>
  //     <tr className={`TableQL-tr`}>
  //       <td className={`TableQL-td`} data-label="Account">
  //         Visa - 3412
  //       </td>
  //       <td className={`TableQL-td`} data-label="Due Date">
  //         04/01/2016
  //       </td>
  //       <td className={`TableQL-td`} data-label="Amount">
  //         $1,190
  //       </td>
  //       <td className={`TableQL-td`} data-label="Period">
  //         03/01/2016 - 03/31/2016
  //       </td>
  //     </tr>
  //     <tr className={`TableQL-tr`}>
  //       <td scope="row" className={`TableQL-td`} data-label="Account">
  //         Visa - 6076
  //       </td>
  //       <td className={`TableQL-td`} data-label="Due Date">
  //         03/01/2016
  //       </td>
  //       <td className={`TableQL-td`} data-label="Amount">
  //         $2,443
  //       </td>
  //       <td className={`TableQL-td`} data-label="Period">
  //         02/01/2016 - 02/29/2016
  //       </td>
  //     </tr>
  //     <tr className={`TableQL-tr`}>
  //       <td scope="row" className={`TableQL-td`} data-label="Account">
  //         Corporate AMEX
  //       </td>
  //       <td className={`TableQL-td`} data-label="Due Date">
  //         03/01/2016
  //       </td>
  //       <td className={`TableQL-td`} data-label="Amount">
  //         $1,181
  //       </td>
  //       <td className={`TableQL-td`} data-label="Period">
  //         02/01/2016 - 02/29/2016
  //       </td>
  //     </tr>
  //     <tr className={`TableQL-tr`}>
  //       <td scope="row" className={`TableQL-td`} data-label="Acount">
  //         Visa - 3412
  //       </td>
  //       <td className={`TableQL-td`} data-label="Due Date">
  //         02/01/2016
  //       </td>
  //       <td className={`TableQL-td`} data-label="Amount">
  //         $842
  //       </td>
  //       <td className={`TableQL-td`} data-label="Period">
  //         01/01/2016 - 01/31/2016
  //       </td>
  //     </tr>
  //   </>
  // )
}

export default TableRows
