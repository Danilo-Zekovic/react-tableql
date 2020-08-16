import React, { FC } from 'react'
import { useQuery, QueryHookOptions, gql } from '@apollo/client'
import { DocumentNode } from 'graphql'

import TableQL, { PaginationConfig } from '../TableQL/TableQL'
import { Styles, ColumnConfig } from '../components/Table/Table'

export interface ComponentProps {
  query: DocumentNode | string
  columns?: (string | ColumnConfig)[]
  pagination?: PaginationConfig | boolean
  styles?: Styles
  onRowClick?: (data: { [key: string]: unknown }) => void
  errorMessage?: string
  debug?: boolean
  sort?: boolean
}

type Props = QueryHookOptions & ComponentProps

const ApolloTableQL: FC<Props> = ({ query, ...props }) => {
  const { loading, error, data } = useQuery(
    typeof query === 'string' ? gql(query) : (query as DocumentNode),
    { ...props },
  )

  return (
    <TableQL loading={loading} data={data} error={error as Error} {...props} />
  )
}

export default ApolloTableQL
