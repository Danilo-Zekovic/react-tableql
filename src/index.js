import React, { Component } from 'react'
import { Query } from "react-apollo"
import './index.css'

class TableQL extends Component {
  constructor(props) {
    super(props)
    this.state = {
      debug: this.props.debug || false,
      labels: [],
    }
    this.getUniqueKey = this.getUniqueKey.bind(this)
    this.traversData = this.traversData.bind(this)
    this.getHeaderLabels = this.getHeaderLabels.bind(this)

    this.log = this.log.bind(this)
  }

  getUniqueKey() {
    return new Date().getTime()
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
      // exception to eliminate type holder
      if (!key.includes('__')) {
        labels.push(key)
      }
    }

    return labels
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
      query={this.props.query}
      >
        {({ loading, error, data }) => {
          if (loading) {
            this.log('Loading: ' , loading)
            return <p>`Loading TableQL...`</p>
          }
          if (error) {
            this.log('Error: ' , loading)
            return <p>`Error while loading TableQL`</p>
          }

          this.log('Data: ', data)

          let displayData = this.traversData(data)
          let dataKeys = this.getHeaderLabels(displayData[0])

          this.log('Data to be displayed (array): ', displayData)
          this.log('Data keys: ', dataKeys)

          if (!displayData || displayData.length == 0) {
            this.log('No data found!')
            return <p>`No data found!`</p>
          }
          return (
            <table className={(this.props.tableql) ? this.props.tableql:'tableql'}>
              <thead className={this.props.thead}>
                <tr className={this.props.theadtr}>
                  {dataKeys.map((label) => (
                    <th className={this.props.theadth} key={label}>{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody className={this.props.tbody}>
                { displayData.map((data) => (
                  <tr key={JSON.stringify(data)} className={this.props.tbodytr}>
                    {dataKeys.map((label) => (
                      <td className={this.props.tbodytd} key={data[label]}>{data[label]}</td>
                    ))}
                  </tr>
                )) }
              </tbody>
            </table>
          )
        }}
      </Query>
    );
  }
}
export default TableQL
