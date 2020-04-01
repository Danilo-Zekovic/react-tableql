import React from 'react'

import ApolloTableQL from '../ApolloTableQL'
import { GET_ALL_FILMS } from '../../../__mocks__/queriesMock'
import { STORYBOOK_SECTIONS } from '../../../stories/constants'

import './customStyles.css'

const Button = ({ data }) => (
  <button onClick={() => console.log('Returned data: ', data)}>Click Me</button>
)

export default {
  title: `${STORYBOOK_SECTIONS.apolloTableQl}|Custom Columns`,
  component: ApolloTableQL,
}

export const Order = () => (
  <ApolloTableQL
    query={GET_ALL_FILMS}
    columns={['releaseDate', 'title', 'episodeID']}
  />
)

export const HeaderLabel = () => (
  <ApolloTableQL
    query={GET_ALL_FILMS}
    columns={[
      { id: 'episodeID', label: 'Episode Identification' },
      'releaseDate',
      'title',
    ]}
  />
)

export const Component = () => (
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
)

export const ReactComponent = () => (
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
)

export const CustomColumn = () => (
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
)

export const StyleHeader = () => (
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
)

export const StyleNodes = () => (
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
)

export const SelectiveStyling = () => (
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
)

export const Sort = () => (
  <ApolloTableQL
    query={GET_ALL_FILMS}
    columns={[
      'episodeID',
      'releaseDate',
      {
        id: 'title',
        sort: true,
      },
    ]}
  />
)

export const CustomSort = () => (
  <ApolloTableQL
    query={GET_ALL_FILMS}
    columns={[
      'episodeID',
      'releaseDate',
      {
        id: 'title',
        sort: (data, property) => data.reverse(),
      },
    ]}
  />
)
