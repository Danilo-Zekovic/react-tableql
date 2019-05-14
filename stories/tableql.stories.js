import React from 'react'
import { storiesOf } from '@storybook/react'

import './customStories/styles.css'

import TableQL from '../src/index'
import ApolloWrapper from './ApolloWrapper'
import {
  GET_ALL_FILMS,
  GET_ALL_PEOPLE,
  GET_ALL_FILMS_SWAPI,
  GET_ALL_PEOPLE_SWAPI,
} from './queries'

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
storiesOf('TableQL', module)
  .add('default', () => <TableQL query={GET_ALL_FILMS} />)
  .add('with debug on', () => <TableQL query={GET_ALL_FILMS} debug={true} />)
  .add('click row', () => (
    <TableQL
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

storiesOf('TableQL/Custom Styles', module)
  .add('table', () => (
    <TableQL query={GET_ALL_FILMS} styles={{ table: 'bg-color' }} />
  ))
  .add('thead', () => (
    <TableQL query={GET_ALL_FILMS} styles={{ thead: 'bg-color' }} />
  ))
  .add('tr in thead', () => (
    <TableQL query={GET_ALL_FILMS} styles={{ theadTr: 'bg-color' }} />
  ))
  .add('th in thead', () => (
    <TableQL query={GET_ALL_FILMS} styles={{ theadTh: 'bg-color' }} />
  ))
  .add('tbody', () => (
    <TableQL query={GET_ALL_FILMS} styles={{ tbody: 'bg-color' }} />
  ))
  .add('tr in tbody', () => (
    <TableQL query={GET_ALL_FILMS} styles={{ tbodyTr: 'bg-color' }} />
  ))
  .add('td in tbody', () => (
    <TableQL query={GET_ALL_FILMS} styles={{ tbodyTd: 'bg-color' }} />
  ))

storiesOf('TableQL/Custom Columns', module)
  .add('order', () => (
    <TableQL
      query={GET_ALL_FILMS}
      columns={['releaseDate', 'title', 'episodeID']}
    />
  ))
  .add('header label', () => (
    <TableQL
      query={GET_ALL_FILMS}
      columns={[
        { id: 'episodeID', label: 'Episode Identification' },
        'releaseDate',
        'title',
      ]}
    />
  ))
  .add('component', () => (
    <TableQL
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
    <TableQL
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
    <TableQL
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
    <TableQL
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
    <TableQL
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
    <TableQL
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

storiesOf('TableQL/Pagination', module)
  .add('basic', () => <TableQL query={GET_ALL_PEOPLE} pagination />)
  .add('with debug mode', () => (
    <TableQL query={GET_ALL_PEOPLE} pagination debug />
  ))
  .add('with page limit', () => (
    <TableQL
      query={GET_ALL_PEOPLE}
      pagination={{
        pageLimit: 5,
      }}
    />
  ))
  .add('with page neighbors', () => (
    <TableQL
      query={GET_ALL_PEOPLE}
      pagination={{
        pageNeighbors: 2,
        pageLimit: 5,
      }}
    />
  ))
  .add('with current page', () => (
    <TableQL
      query={GET_ALL_PEOPLE}
      pagination={{
        currentPage: 3,
      }}
    />
  ))
  .add('with on page changed', () => (
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
  ))
  .add('with custom style', () => (
    <TableQL
      query={GET_ALL_PEOPLE}
      pagination={{
        styles: 'pagination',
      }}
    />
  ))

// requires setup of ApolloWrapper
// here just to test some other stuff as well
// TODO uncomment when needed
// storiesOf('TableQL/SWAPI (only locally)', module)
//   .add('default', () => (
//     <ApolloWrapper>
//       <TableQL query={GET_ALL_FILMS_SWAPI} />
//     </ApolloWrapper>
//   ))
//   .add('pagination', () => (
//     <ApolloWrapper>
//       <TableQL query={GET_ALL_PEOPLE_SWAPI} pagination />
//     </ApolloWrapper>
//   ))
