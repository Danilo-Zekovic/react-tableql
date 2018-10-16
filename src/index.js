import React, { Component } from 'react'
import { Query } from "react-apollo"
import './index.css'


// travers data to find the array of objects and return it
const traversData = (data) => {
  for (let key in data) {
    if (Array.isArray(data)) {
      return data
    } else {
      return traversData(data[key])
    }
  }
}

const getHeaderLabels = (data) => {
  let labels = []
  for (let key in data) {
    if (!key.includes('__')) {
      labels.push(key)
    }
  }

  return labels
}

class TableQL extends Component {
  constructor(props) {
    super(props)
    this.getUniqueKey = this.getUniqueKey.bind(this)
  }

  getUniqueKey() {
    return new Date().getTime()
  }

  render() {
    return (
      <Query
      query={this.props.query}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>`Loading TableQL...`</p>
          if (error) return <p>`Error while loading TableQL`</p>

          let displayData = traversData(data)

          if (!displayData || displayData.length == 0) {
            return <p>`No data found!`</p>
          }
          return (
            <table className={(this.props.tableql) ? this.props.tableql:'tableql'}>
              <thead className={this.props.thead}>
                <tr className={this.props.theadtr}>
                  {getHeaderLabels(displayData[0]).map((label) => (
                    <th className={this.props.theadth} key={label}>{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody className={this.props.tbody}>
                { displayData.map((data) => (
                  <tr key={JSON.stringify(data)} className={this.props.tbodytr}>
                    {getHeaderLabels(displayData[0]).map((label) => (
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
