import React, { FC } from 'react'
import { useQuery, QueryHookOptions } from 'react-apollo'
import gql from 'graphql-tag'
import { DocumentNode } from 'graphql'

import TableQL from '../TableQL/TableQL'

export interface ComponentProps {
  query: DocumentNode | string
  columns?: any[]
  pagination?:
    | {
        pageLimit?: number
        pageNeighbors?: number
        currentPage?: number
        onPageChanged?: (
          currentPage?: number,
          totalPages?: number,
          pageLimit?: number,
          totalRecords?: number,
        ) => void
        styles?: string
      }
    | boolean
  styles?: {
    table?: string
    thead?: string
    theadTr?: string
    theadTh?: string
    tbody?: string
    tbodyTr?: string
    tbodyTd?: string
  }
  onRowClick?: (data: any) => void
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
