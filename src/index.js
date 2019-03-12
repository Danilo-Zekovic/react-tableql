import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import './index.css'

class TableQL extends Component {
  constructor(props) {
    super(props)
    this.state = {
      debug: this.props.debug || false,
    }
    this.traversData = this.traversData.bind(this)
    this.getHeaderLabels = this.getHeaderLabels.bind(this)
    this.formatLabel = this.formatLabel.bind(this)
    this.getNodeValue = this.getNodeValue.bind(this)
    this.renderTableRows = this.renderTableRows.bind(this)
    this.renderTableHeader = this.renderTableHeader.bind(this)

    this.log = this.log.bind(this)
  }

  // travers data to find the array of objects and return it
  traversData(data) {
    this.log('Travers data called.')
    for (let key in data) {
      if (Array.isArray(data)) {
        return data
      } else {
        return this.traversData(data[key])
      }
    }
  }

  getHeaderLabels(data) {
    this.log(' Get header labels.')
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
  formatLabel(label) {
    this.log('Format label called.')
    // insert spaces inbetween words in camel case
    let formatedLabel = label
      .replace(/([a-z\d])([A-Z])/g, '$1' + ' ' + '$2')
      .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + ' ' + '$2')
      .replace(/([-,_,~,=,+])/g, ' ') // replace unwanted characters with spaces

    // title case the label (make first letters of words capital)
    formatedLabel = formatedLabel.split(' ')
    formatedLabel = formatedLabel.map((label) => label.charAt(0).toUpperCase() + label.slice(1))

    return formatedLabel.join(' ')
  }

  getNodeValue(column, data) {
    let value = data // will hold the final return value
    const keys = (column.id) ? column.id.split('.'):column.split('.')

    keys.forEach((key) => {
      value = value[key]
    })

    return String(value)
  }

  renderTableRows(displayData, dataKeys) {
    return (
      displayData.map((data) => (
        <tr key={JSON.stringify(data)} className={this.props.tbodytr}>
          {dataKeys.map((column, columnIndex) => (
            <td className={this.props.tbodytd} key={`${column + columnIndex}`}>{this.getNodeValue(column, data)}</td>
          ))}
        </tr>
      ))
    )
  }

  renderTableHeader(dataKeys) {
    return (
      dataKeys.map((column, columnIndex) => (
        <th className={this.props.theadth} key={`${column + columnIndex}`}>{(typeof column === 'string') ? this.formatLabel(column):column.label}</th>
      ))
    )
  }

  // when debug true log messages and data
  log(tag, load = '') {
    if (this.state.debug) {
      console.log(tag, load)
    }
  }

  render() {
    this.log('Props: ', this.props)
    return (
      <Query
      query={gql(this.props.query)}
      variables={this.props.variables}
      skip={this.props.skip}
      pollInterval={this.props.pollInterval}
      >
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) {
            this.log('Loading: ' , loading)
            return <p>{`Loading TableQL...`}</p>
          }
          if (error) {
            this.log('Error: ' , loading)
            return <p>{ this.props.errorMessage || 'Error while loading TableQL' }</p>
          }

          this.log('Data: ', data)

          let displayData = this.traversData(data)
          let dataKeys = this.props.columns || this.getHeaderLabels(displayData[0])

          this.log('Data to be displayed (array): ', displayData)
          this.log('Data keys: ', dataKeys)

          // TODO probably bad idea not to display empty table
          if (!displayData || displayData.length == 0) {
            this.log('No data found!')
            return <p>{`No data found!`}</p>
          }
          return (
            <table className={(this.props.tableql) ? this.props.tableql:'tableql'}>
              <thead className={this.props.thead}>
                <tr className={this.props.theadtr}>
                  {this.renderTableHeader(dataKeys)}
                </tr>
              </thead>
              <tbody className={this.props.tbody}>
                {this.renderTableRows(displayData, dataKeys)}
              </tbody>
            </table>
          )
        }}
      </Query>
    );
  }
}
export default TableQL
