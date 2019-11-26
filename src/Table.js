import React from 'react'
import PropTypes from 'prop-types'

import SortArrows from './components/SortArrows/SortArrows'

const Table = ({
  log,
  styles = {},
  displayData,
  dataKeys,
  onRowClick,
  onSort,
  sort,
}) => {
  /*
    Formating passed string to be title case, where each word starts with a upper case letter
  */
  const formatLabel = label => {
    log('Format label called.')
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
    // if customColumn then ignore search for data
    if (column.customColumn) {
      // component is required when customColumn true
      if (!column.component) {
        throw new Error(
          'When customColumn true, component property must be provided!',
        )
      }
      return column.component(data)
    }

    let value = data // will hold the final return value
    const keys = column.id ? column.id.split('.') : column.split('.')

    keys.forEach(key => {
      value = value[key]
    })

    return column.component ? column.component(value) : String(value)
  }

  const renderTableRows = (displayData, dataKeys) => {
    return displayData.map(data => (
      <tr
        key={`TableQLRow${JSON.stringify(data)}`}
        className={styles.tbodyTr || 'TableQL-tr'}
        onClick={onRowClick ? () => onRowClick(data) : null}
      >
        {dataKeys.map((column, columnIndex) => (
          <td
            className={`
            ${styles.tbodyTd || 'TableQL-td'}
            ${getNodeStyle(column, data)}
            `}
            key={`TableQLNode${column + columnIndex}`}
          >
            {getNodeValue(column, data)}
          </td>
        ))}
      </tr>
    ))
  }

  const renderTableHeader = dataKeys => {
    return dataKeys.map((column, columnIndex) => (
      <th
        className={`${styles.theadTh ||
          'TableQL-thead-th'} ${column.headerStyle || ''} ${
          column.sort || sort ? 'TableQL-thead-th-sort' : ''
        }`}
        key={`TableQLHeader${column + columnIndex}`}
        onClick={() => {
          if (!column.sort && !sort) return
          log('Header sort was clicked: ', column)
          onSort(column)
        }}
      >
        {typeof column === 'string'
          ? formatLabel(column)
          : column.label || formatLabel(column.id)}
        {(column.sort || sort) && <SortArrows />}
      </th>
    ))
  }

  // when nodeStyle is a function that is selective styling as function decides should and which css class will be returned.
  const getNodeStyle = ({ nodeStyle }, data) => {
    if (!nodeStyle) {
      return ''
    }

    return nodeStyle && typeof nodeStyle == 'string'
      ? nodeStyle
      : nodeStyle(data)
  }

  return (
    <table className={styles.table || 'TableQL'}>
      <thead className={styles.thead || 'TableQL-thead'}>
        <tr className={styles.theadTr || 'TableQL-tr'}>
          {renderTableHeader(dataKeys)}
        </tr>
      </thead>
      <tbody className={styles.tbody || 'TableQL-tbody'}>
        {renderTableRows(displayData, dataKeys)}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  log: PropTypes.func.isRequired,
  styles: PropTypes.shape({
    table: PropTypes.string,
    thead: PropTypes.string,
    theadTr: PropTypes.string,
    theadTh: PropTypes.string,
    tbody: PropTypes.string,
    tbodyTr: PropTypes.string,
    tbodyTd: PropTypes.string,
  }),
  displayData: PropTypes.array.isRequired,
  dataKeys: PropTypes.array.isRequired,
  onRowClick: PropTypes.func,
  onSort: PropTypes.func,
  sort: PropTypes.bool,
}

export default Table
