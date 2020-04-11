import { FILMS, PEOPLE } from './data'
import { GET_ALL_FILMS, GET_ALL_PEOPLE } from './queries'

import gql from 'graphql-tag'

// mocking graphql for Storybook
export const mocks = {
  Query: () => {
    return {
      allFilms: () => {
        return FILMS
      },
      allPeople: () => {
        return PEOPLE
      },
    }
  },
}

// mocking graphql for tests
export const testMocks = [
  {
    request: {
      query: gql(GET_ALL_FILMS),
    },
    result: {
      data: {
        allFilms: FILMS,
      },
    },
  },
  {
    request: {
      query: gql(GET_ALL_PEOPLE),
    },
    result: {
      data: {
        allFilms: PEOPLE,
      },
    },
  },
]
