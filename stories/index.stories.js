import React from 'react'
import { storiesOf } from '@storybook/react'

import TableQL from '../src/index'
import ApolloWrapper from './ApolloWrapper'
import { GET_ALL_FILMS } from './queries'
import { Setup, Welcome } from './customStories'

storiesOf('Welcome', module)
  .addParameters({ options: { showPanel: false } })
  .add('to TableQL', () => <Welcome />)

storiesOf('Getting Started', module)
  .addParameters({ options: { showPanel: false } })
  .add('setup', () => <Setup />)

// storiesOf('TableQL', module).add('default', () => (
//   <ApolloWrapper>
//     <TableQL query={GET_ALL_FILMS} />
//   </ApolloWrapper>
// ))
