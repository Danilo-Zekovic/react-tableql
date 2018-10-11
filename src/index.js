import React, { Component } from 'react'
import { Query } from "react-apollo"
import './index.css'

class TableQL extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Query
      query={this.props.query}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>`Loading TableQL...`</p>
          if (error) return <p>`Error while loading TableQL`</p>

          console.log(data.allFilms.films)
          return (
            <table className={(this.props.tableql) ? this.props.tableql:'tableql'}>
              <thead className={this.props.thead}>
                <tr className={this.props.theadtr}>
                  <th className={this.props.theadth}>Title</th>
                  <th className={this.props.theadth}>ID</th>
                </tr>
              </thead>
              <tbody className={this.props.tbody}>
                { data.allFilms.films.map(({title, episodeID}) => (
                  <tr key={title} className={this.props.tbodytr}>
                    <td className={this.props.tbodytd}>{title}</td>
                    <td className={this.props.tbodytd}>{episodeID}</td>
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
