import React from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

import TableQL from './TableQL'

const ApolloTableQL = ({ query, ...props }) => {
  const { loading, error, data } = useQuery(
    typeof query === 'string' ? gql(query) : query,
    { ...props },
  )

  return <TableQL loading={loading} data={data} error={error} {...props} />
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
  sort: PropTypes.bool,
}

export default ApolloTableQL
