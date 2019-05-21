import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

import TableQL from './TableQL'

const ApolloTableQL = ({ query, ...props }) => {
  return (
    <>
      <Query
        query={typeof query === 'string' ? gql(query) : query}
        {...props} // skip, pollInterval, notifyOnNetworkStatusChange, onError, onCompleted, variables
      >
        {({ data, loading, error }) => (
          <TableQL loading={loading} data={data} error={error} {...props} />
        )}
      </Query>
    </>
  )
}

ApolloTableQL.propTypes = {
  query: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  columns: PropTypes.array,
  pagination: PropTypes.oneOfType([
    PropTypes.shape({
      pageLimit: PropTypes.number,
      pageNeighbors: PropTypes.number,
      currentPage: PropTypes.number,
      onPageChanged: PropTypes.func,
      styles: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
  errorMessage: PropTypes.string,
  styles: PropTypes.shape({
    table: PropTypes.string,
    thead: PropTypes.string,
    theadTr: PropTypes.string,
    theadTh: PropTypes.string,
    tbody: PropTypes.string,
    tbodyTr: PropTypes.string,
    tbodyTd: PropTypes.string,
  }),
  onRowClick: PropTypes.func,
  errorMessage: PropTypes.string,
  debug: PropTypes.bool,
}

export default ApolloTableQL
