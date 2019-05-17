import React from 'react'
import { storiesOf } from '@storybook/react'
import gql from 'graphql-tag'

import './customStories/styles.css'

import { ApolloTableQL } from '../src/index'
import ApolloWrapper from './ApolloWrapper'
import {
  GET_ALL_FILMS,
  GET_ALL_PEOPLE,
  GET_ALL_FILMS_SWAPI,
  GET_ALL_PEOPLE_SWAPI,
  FALSE,
} from '../__mocks__/queries'
import IntroApolloTableQL from './customStories/IntroApolloTableQL'

const Button = ({ data }) => {
  return (
    <button onClick={() => console.log('Returned data: ', data)}>
      Click Me
    </button>
  )
}

/**
 * This stories is documentation of all possible options in TableQL
 */
export const BASIC = storiesOf('Apollo-TableQL|Basic', module)
  .addParameters({ options: { showPanel: false } })
  .add('introduction', () => <IntroApolloTableQL />)
  .addParameters({ options: { showPanel: true } })
  .add('default', () => <ApolloTableQL query={GET_ALL_FILMS} />)
  .add('with debug on', () => (
    <>
      <h3>Check Actions bellow!</h3>
      <ApolloTableQL query={GET_ALL_FILMS} debug={true} />
    </>
  ))
  .add('click row', () => (
    <ApolloTableQL
      query={GET_ALL_FILMS}
      onRowClick={data =>
        alert(
          `Row has been clicked. This is data that has been returned: Title - ${
            data.title
          }, Episode ID - ${data.episodeID}, Release Date - ${
            data.releaseDate
          }`,
        )
      }
    />
  ))
  .add('error boundary', () => (
    <ApolloTableQL
      query={GET_ALL_FILMS}
      columns={[
        'title',
        'episodeID',
        { id: 'releaseDate', customColumn: true },
      ]}
    />
  ))

export const CUSTOM_STYLES = storiesOf('Apollo-TableQL|Custom Styles', module)
  .add('table', () => (
    <ApolloTableQL query={GET_ALL_FILMS} styles={{ table: 'bg-color' }} />
  ))
  .add('thead', () => (
    <ApolloTableQL query={GET_ALL_FILMS} styles={{ thead: 'bg-color' }} />
  ))
  .add('tr in thead', () => (
    <ApolloTableQL query={GET_ALL_FILMS} styles={{ theadTr: 'bg-color' }} />
  ))
  .add('th in thead', () => (
    <ApolloTableQL query={GET_ALL_FILMS} styles={{ theadTh: 'bg-color' }} />
  ))
  .add('tbody', () => (
    <ApolloTableQL query={GET_ALL_FILMS} styles={{ tbody: 'bg-color' }} />
  ))
  .add('tr in tbody', () => (
    <ApolloTableQL query={GET_ALL_FILMS} styles={{ tbodyTr: 'bg-color' }} />
  ))
  .add('td in tbody', () => (
    <ApolloTableQL query={GET_ALL_FILMS} styles={{ tbodyTd: 'bg-color' }} />
  ))

export const CUSTOM_COLUMNS = storiesOf('Apollo-TableQL|Custom Columns', module)
  .add('order', () => (
    <ApolloTableQL
      query={GET_ALL_FILMS}
      columns={['releaseDate', 'title', 'episodeID']}
    />
  ))
  .add('header label', () => (
    <ApolloTableQL
      query={GET_ALL_FILMS}
      columns={[
        { id: 'episodeID', label: 'Episode Identification' },
        'releaseDate',
        'title',
      ]}
    />
  ))
  .add('component', () => (
    <ApolloTableQL
      query={GET_ALL_FILMS}
      columns={[
        'episodeID',
        'releaseDate',
        {
          id: 'title',
          component: data => data.toUpperCase(),
        },
      ]}
    />
  ))
  .add('react component', () => (
    <ApolloTableQL
      query={GET_ALL_FILMS}
      columns={[
        'episodeID',
        'releaseDate',
        {
          id: 'title',
          component: data => <Button data={data} />,
        },
      ]}
    />
  ))
  .add('custom column', () => (
    <ApolloTableQL
      query={GET_ALL_FILMS}
      columns={[
        'episodeID',
        'releaseDate',
        'title',
        {
          id: 'actions',
          component: props => <Button data={props} />,
          customColumn: true,
        },
      ]}
    />
  ))
  .add('style header', () => (
    <ApolloTableQL
      query={GET_ALL_FILMS}
      columns={[
        'episodeID',
        'releaseDate',
        {
          id: 'title',
          headerStyle: 'bg-color',
        },
      ]}
    />
  ))
  .add('style nodes', () => (
    <ApolloTableQL
      query={GET_ALL_FILMS}
      columns={[
        'episodeID',
        'releaseDate',
        {
          id: 'title',
          nodeStyle: 'bg-color',
        },
      ]}
    />
  ))
  .add('selective styling', () => (
    <ApolloTableQL
      query={GET_ALL_FILMS}
      columns={[
        'episodeID',
        'releaseDate',
        {
          id: 'title',
          nodeStyle: data => {
            if (data.title.length <= 19) return 'bg-color'
          },
        },
      ]}
    />
  ))

export const PAGINATION = storiesOf('Apollo-TableQL|Pagination', module)
  .add('basic', () => <ApolloTableQL query={GET_ALL_PEOPLE} pagination />)
  .add('with debug mode', () => (
    <ApolloTableQL query={GET_ALL_PEOPLE} pagination debug />
  ))
  .add('with page limit', () => (
    <ApolloTableQL
      query={GET_ALL_PEOPLE}
      pagination={{
        pageLimit: 5,
      }}
    />
  ))
  .add('with page neighbors', () => (
    <ApolloTableQL
      query={GET_ALL_PEOPLE}
      pagination={{
        pageNeighbors: 2,
        pageLimit: 5,
      }}
    />
  ))
  .add('with current page', () => (
    <ApolloTableQL
      query={GET_ALL_PEOPLE}
      pagination={{
        currentPage: 3,
      }}
    />
  ))
  .add('with on page changed', () => (
    <ApolloTableQL
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
  ))
  .add('with custom style', () => (
    <ApolloTableQL
      query={GET_ALL_PEOPLE}
      pagination={{
        styles: 'pagination',
      }}
    />
  ))
