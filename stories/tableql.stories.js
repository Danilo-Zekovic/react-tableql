import React from 'react'
import { storiesOf } from '@storybook/react'

import './customStories/styles.css'

import TableQL from '../src/index'
import ApolloWrapper from './ApolloWrapper'
import { GET_ALL_FILMS, GET_ALL_PEOPLE } from './queries'

// TODO https://github.com/abhiaiyer91/apollo-storybook-decorator

/**
 * This story is documentation of all possible options in TableQL
 */
const tableQl = storiesOf('TableQL', module)

tableQl.add('default', () => (
  <ApolloWrapper>
    <TableQL query={GET_ALL_FILMS} />
  </ApolloWrapper>
))

tableQl.add('with debug on', () => (
  <ApolloWrapper>
    <TableQL query={GET_ALL_FILMS} debug={true} />
  </ApolloWrapper>
))

storiesOf('TableQL/Custom Styles', module)
  .add('tableql', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_FILMS} styles={{ table: 'bg-color' }} />
    </ApolloWrapper>
  ))
  .add('thead', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_FILMS} styles={{ thead: 'bg-color' }} />
    </ApolloWrapper>
  ))
  .add('theadtr', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_FILMS} styles={{ theadTr: 'bg-color' }} />
    </ApolloWrapper>
  ))
  .add('theadth', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_FILMS} styles={{ theadTh: 'bg-color' }} />
    </ApolloWrapper>
  ))
  .add('tbody', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_FILMS} styles={{ tbody: 'bg-color' }} />
    </ApolloWrapper>
  ))
  .add('tbodytr', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_FILMS} styles={{ tbodyTr: 'bg-color' }} />
    </ApolloWrapper>
  ))
  .add('tbodytd', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_FILMS} styles={{ tbodyTd: 'bg-color' }} />
    </ApolloWrapper>
  ))

storiesOf('TableQL/Custom Columns', module)
  .add('order', () => (
    <ApolloWrapper>
      <TableQL
        query={GET_ALL_FILMS}
        columns={['releaseDate', 'title', 'episodeID']}
      />
    </ApolloWrapper>
  ))
  .add('header label', () => (
    <ApolloWrapper>
      <TableQL
        query={GET_ALL_FILMS}
        columns={[
          { id: 'episodeID', label: 'Episode Identification' },
          'releaseDate',
          'title',
        ]}
      />
    </ApolloWrapper>
  ))

storiesOf('TableQL/Pagination', module)
  .add('basic', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_PEOPLE} pagination />
    </ApolloWrapper>
  ))
  .add('with debug mode', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_PEOPLE} pagination debug />
    </ApolloWrapper>
  ))
  .add('with page limit', () => (
    <ApolloWrapper>
      <TableQL
        query={GET_ALL_PEOPLE}
        pagination={{
          pageLimit: 5,
        }}
      />
    </ApolloWrapper>
  ))
  .add('with page neighbors', () => (
    <ApolloWrapper>
      <TableQL
        query={GET_ALL_PEOPLE}
        pagination={{
          pageNeighbors: 2,
          pageLimit: 5,
        }}
      />
    </ApolloWrapper>
  ))
  .add('with current page', () => (
    <ApolloWrapper>
      <TableQL
        query={GET_ALL_PEOPLE}
        pagination={{
          currentPage: 3,
        }}
      />
    </ApolloWrapper>
  ))
  .add('with on page changed', () => (
    <ApolloWrapper>
      <TableQL
        query={GET_ALL_PEOPLE}
        pagination={{
          onPageChanged: (currentPage, totalPages, pageLimit, totalRecords) =>
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
    </ApolloWrapper>
  ))
  .add('with custom style', () => (
    <ApolloWrapper>
      <TableQL
        query={GET_ALL_PEOPLE}
        pagination={{
          styles: 'pagination',
        }}
      />
    </ApolloWrapper>
  ))
