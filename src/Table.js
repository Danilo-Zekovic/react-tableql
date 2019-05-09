import React from 'react'

const Table = props => {
  /*
    Formating passed string to be title case, where each word starts with a upper case letter
  */
  const formatLabel = label => {
    props.log('Format label called.')
    // insert spaces in between words in camel case
    let formatedLabel = label
      .replace(/([a-z\d])([A-Z])/g, '$1' + ' ' + '$2')
      .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + ' ' + '$2')
      .replace(/([-,_,~,=,+])/g, ' ') // replace unwanted characters with spaces

    // title case the label (make first letters of words capital)
    formatedLabel = formatedLabel.split(' ')
    formatedLabel = formatedLabel.map(
      label => label.charAt(0).toUpperCase() + label.slice(1),
    )

    return formatedLabel.join(' ')
  }

  const getNodeValue = (column, data) => {
    let value = data // will hold the final return value
    const keys = column.id ? column.id.split('.') : column.split('.')

    keys.forEach(key => {
      value = value[key]
    })

    return String(value)
  }

  const renderTableRows = (displayData, dataKeys) => {
    return displayData.map(data => (
      <tr key={JSON.stringify(data)} className={props.tbodytr}>
        {dataKeys.map((column, columnIndex) => (
          <td className={props.tbodytd} key={`${column + columnIndex}`}>
            {getNodeValue(column, data)}
          </td>
        ))}
      </tr>
    ))
  }

  const renderTableHeader = dataKeys => {
    return dataKeys.map((column, columnIndex) => (
      <th className={props.theadth} key={`${column + columnIndex}`}>
        {typeof column === 'string' ? formatLabel(column) : column.label}
      </th>
    ))
  }

  return (
    <table className={props.tableql ? props.tableql : 'tableql'}>
      <thead className={props.thead}>
        <tr className={props.theadtr}>{renderTableHeader(props.dataKeys)}</tr>
      </thead>
      <tbody className={props.tbody}>
        {renderTableRows(props.displayData, props.dataKeys)}
      </tbody>
    </table>
  )
}

export default Table
