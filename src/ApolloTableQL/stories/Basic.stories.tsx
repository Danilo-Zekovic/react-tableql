import React from 'react'

import ApolloTableQL from '../ApolloTableQL'
import { GET_ALL_FILMS } from '../../../__mocks__/queriesMock'
import { STORYBOOK_SECTIONS } from '../../../stories/constants'

export default {
  title: `${STORYBOOK_SECTIONS.apolloTableQl}|Basic`,
  component: ApolloTableQL,
}

export const Default = () => <ApolloTableQL query={GET_ALL_FILMS as any} />

export const DebugOn = () => (
  <>
    <h3>Check Actions bellow!</h3>
    <ApolloTableQL query={GET_ALL_FILMS as any} debug />
  </>
)

export const ClickRow = () => (
  <ApolloTableQL
    query={GET_ALL_FILMS as any}
    onRowClick={(data: any) =>
      alert(
        `Row has been clicked. This is data that has been returned: Title - ${data.title}, Episode ID - ${data.episodeID}, Release Date - ${data.releaseDate}`,
      )
    }
  />
)

export const Sort = () => <ApolloTableQL query={GET_ALL_FILMS as any} sort />

export const ErrorBoundary = () => (
  <ApolloTableQL
    query={GET_ALL_FILMS as any}
    columns={['title', 'episodeID', { id: 'releaseDate', customColumn: true }]}
  />
)
