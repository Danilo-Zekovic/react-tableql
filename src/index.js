import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"

class TableQL extends React.Component {
  render() {
    return (
      <Query
        query={gql`
          {
            allFilms(first:7){
              films{
                title
                episodeID
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>`Loading TableQL...`</p>
          if (error) return <p>`Error while loading TableQL`</p>

          console.log(data.allFilms.films)
          return (
            <table>
              <thead></thead>
              <tbody>
                { data.allFilms.films.map(({title, episodeID}) => (
                  <tr key={title}>
                    <td>{title}</td>
                    <td>{episodeID}</td>
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
