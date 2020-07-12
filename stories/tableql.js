import React from 'react'
import { storiesOf } from '@storybook/react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import './customStories/styles.css'

import TableQL from '../src/index'
import IntroTableQL from './customStories/IntroTableQL'
import { GET_ALL_FILMS } from '../__mocks__/queries'

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
export const BASIC_TABLEQL = storiesOf('2. TableQL|Basic', module)
  .addParameters({ options: { showPanel: false } })
  .add('definition', () => <IntroTableQL />)
  .add('loading', () => <TableQL loading data={[]} />)

export const WRAPPER_EXAMPLES = storiesOf('2. TableQL|Wrapped Examples', module)
  .add('apollo client', () => (
    <Query query={gql(GET_ALL_FILMS)}>
      {(props) => <TableQL {...props} />}
    </Query>
  ))
  .add('axios', () => <h1>Coming soon...</h1>)
