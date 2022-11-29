import React, { FC } from 'react'

const TableRows: FC = () => {
  return (
    <>
      <tr className={`TableQL-tr`}>
        <td className={`TableQL-td`} data-label="Account">
          Visa - 3412
        </td>
        <td className={`TableQL-td`} data-label="Due Date">
          04/01/2016
        </td>
        <td className={`TableQL-td`} data-label="Amount">
          $1,190
        </td>
        <td className={`TableQL-td`} data-label="Period">
          03/01/2016 - 03/31/2016
        </td>
      </tr>
      <tr className={`TableQL-tr`}>
        <td scope="row" className={`TableQL-td`} data-label="Account">
          Visa - 6076
        </td>
        <td className={`TableQL-td`} data-label="Due Date">
          03/01/2016
        </td>
        <td className={`TableQL-td`} data-label="Amount">
          $2,443
        </td>
        <td className={`TableQL-td`} data-label="Period">
          02/01/2016 - 02/29/2016
        </td>
      </tr>
      <tr className={`TableQL-tr`}>
        <td scope="row" className={`TableQL-td`} data-label="Account">
          Corporate AMEX
        </td>
        <td className={`TableQL-td`} data-label="Due Date">
          03/01/2016
        </td>
        <td className={`TableQL-td`} data-label="Amount">
          $1,181
        </td>
        <td className={`TableQL-td`} data-label="Period">
          02/01/2016 - 02/29/2016
        </td>
      </tr>
      <tr className={`TableQL-tr`}>
        <td scope="row" className={`TableQL-td`} data-label="Acount">
          Visa - 3412
        </td>
        <td className={`TableQL-td`} data-label="Due Date">
          02/01/2016
        </td>
        <td className={`TableQL-td`} data-label="Amount">
          $842
        </td>
        <td className={`TableQL-td`} data-label="Period">
          01/01/2016 - 01/31/2016
        </td>
      </tr>
    </>
  )
}

export default TableRows
