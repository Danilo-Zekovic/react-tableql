import React from 'react'

import ApolloTableQL from '../ApolloTableQL'
import { GET_ALL_FILMS } from '../../../__mocks__/queries'
import { STORYBOOK_SECTIONS } from '../../../stories/constants'

import './customStyles.css'

export default {
  title: `${STORYBOOK_SECTIONS.apolloTableQl}|Custom Styles`,
  component: ApolloTableQL,
}

export const Table = () => (
  <ApolloTableQL query={GET_ALL_FILMS} styles={{ table: 'bg-color' }} />
)

export const Thead = () => (
  <ApolloTableQL query={GET_ALL_FILMS} styles={{ thead: 'bg-color' }} />
)

export const TrInThead = () => (
  <ApolloTableQL query={GET_ALL_FILMS} styles={{ theadTr: 'bg-color' }} />
)

export const ThInThead = () => (
  <ApolloTableQL query={GET_ALL_FILMS} styles={{ theadTh: 'bg-color' }} />
)

export const Tbody = () => (
  <ApolloTableQL query={GET_ALL_FILMS} styles={{ tbody: 'bg-color' }} />
)

export const TrInTbody = () => (
  <ApolloTableQL query={GET_ALL_FILMS} styles={{ tbodyTr: 'bg-color' }} />
)

export const TdInTbody = () => (
  <ApolloTableQL query={GET_ALL_FILMS} styles={{ tbodyTd: 'bg-color' }} />
)
