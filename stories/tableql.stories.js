import React from 'react'
import { storiesOf } from '@storybook/react'

import TableQL from '../src/index'
import ApolloWrapper from './ApolloWrapper'
import { GET_ALL_FILMS } from './queries'

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
      <TableQL query={GET_ALL_FILMS} />
    </ApolloWrapper>
  ))
  .add('theadtr', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_FILMS} />
    </ApolloWrapper>
  ))
  .add('theadth', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_FILMS} />
    </ApolloWrapper>
  ))
  .add('tbody', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_FILMS} />
    </ApolloWrapper>
  ))
  .add('tbodytr', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_FILMS} />
    </ApolloWrapper>
  ))
  .add('tbodytd', () => (
    <ApolloWrapper>
      <TableQL query={GET_ALL_FILMS} />
    </ApolloWrapper>
  ))

storiesOf('TableQL/Custom Columns', module)
  .add('order', () => (
    <ApolloWrapper>
      <TableQL
        query={GET_ALL_FILMS}
        columns={['releaseDate', 'title', 'episodeId']}
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

storiesOf('TableQL/Pagination', module).add('basic', () => (
  <ApolloWrapper>
    <TableQL query={GET_ALL_FILMS} pagination />
  </ApolloWrapper>
))
