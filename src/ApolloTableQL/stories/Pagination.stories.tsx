import React from 'react'

import ApolloTableQL from '../ApolloTableQL'
import { GET_ALL_PEOPLE } from '../../../__mocks__/queries'
import { STORYBOOK_SECTIONS } from '../../../stories/constants'

import './customStyles.css'

export default {
  title: `${STORYBOOK_SECTIONS.apolloTableQl}|Pagination`,
  component: ApolloTableQL,
}

export const Basic = () => <ApolloTableQL query={GET_ALL_PEOPLE} pagination />

export const DebugMode = () => (
  <ApolloTableQL query={GET_ALL_PEOPLE} pagination debug />
)

export const PageLimit = () => (
  <ApolloTableQL
    query={GET_ALL_PEOPLE}
    pagination={{
      pageLimit: 5,
    }}
  />
)

export const PageNeighbors = () => (
  <ApolloTableQL
    query={GET_ALL_PEOPLE}
    pagination={{
      pageNeighbors: 2,
      pageLimit: 5,
    }}
  />
)

export const CurrentPage = () => (
  <ApolloTableQL
    query={GET_ALL_PEOPLE}
    pagination={{
      currentPage: 3,
    }}
  />
)

export const OnPageChanged = () => (
  <ApolloTableQL
    query={GET_ALL_PEOPLE}
    pagination={{
      onPageChanged: (
        currentPage?: number,
        totalPages?: number,
        pageLimit?: number,
        totalRecords?: number,
      ) =>
        alert(
          'FUNCTION PASSED AS PROP, RETURNED VALUES: ' +
            'Current Page > ' +
            currentPage +
            ', Total Pages > ' +
            totalPages +
            ', Page Limit > ' +
            pageLimit +
            ', Total Records > ' +
            totalRecords,
        ),
    }}
  />
)

export const CustomStyles = () => (
  <ApolloTableQL
    query={GET_ALL_PEOPLE}
    pagination={{
      styles: 'pagination',
    }}
  />
)

export const Sort = () => (
  <ApolloTableQL query={GET_ALL_PEOPLE} pagination sort />
)
