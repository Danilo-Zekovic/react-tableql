import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import './index.css'

const TableQL = props => {
  // travers data to find the array of objects and return it
  const traversData = data => {
    log('Travers data called.')
    for (let key in data) {
      if (Array.isArray(data)) {
        return data
      } else {
        return traversData(data[key])
      }
    }
  }

  const getHeaderLabels = data => {
    log(' Get header labels.')
    let labels = []
    for (let key in data) {
      // exception to eliminate meta fields
      if (!key.includes('__')) {
        labels.push(key)
      }
    }

    return labels
  }

  /*
    Formating passed string to be title case, where each word starts with a upper case letter
  */
  const formatLabel = label => {
    log('Format label called.')
    // insert spaces inbetween words in camel case
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

  // when debug true log messages and data
  const log = (tag, load = '') => {
    if (props.debug) {
      console.log(tag, load)
    }
  }

  log('Props: ', props)
  return (
    <Query
      query={gql(props.query)}
      variables={props.variables}
      skip={props.skip}
      pollInterval={props.pollInterval}
    >
      {({ loading, error, data, startPolling, stopPolling }) => {
        if (loading) {
          log('Loading: ', loading)
          return <p>{`Loading TableQL...`}</p>
        }
        if (error) {
          log('Error: ', loading)
          return <p>{props.errorMessage || 'Error while loading TableQL'}</p>
        }

        log('Data: ', data)

        let displayData = traversData(data)
        let dataKeys = props.columns || getHeaderLabels(displayData[0])

        log('Data to be displayed (array): ', displayData)
        log('Data keys: ', dataKeys)

        // TODO probably bad idea not to display empty table
        if (!displayData || displayData.length == 0) {
          log('No data found!')
          return <p>{`No data found!`}</p>
        }
        return (
          <table className={props.tableql ? props.tableql : 'tableql'}>
            <thead className={props.thead}>
              <tr className={props.theadtr}>{renderTableHeader(dataKeys)}</tr>
            </thead>
            <tbody className={props.tbody}>
              {renderTableRows(displayData, dataKeys)}
            </tbody>
          </table>
        )
      }}
    </Query>
  )
}
export default TableQL
