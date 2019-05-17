import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import TableQL from './TableQL'

const ApolloTableQL = ({ query, ...props }) => {
  return (
    <>
      <Query
        query={typeof query === 'string' ? gql(query) : query}
        {...props} // skip, pollInterval, notifyOnNetworkStatusChange, onError, onCompleted, variables
      >
        {apolloData => <TableQL {...apolloData} {...props} />}
      </Query>
    </>
  )
}

export default ApolloTableQL
