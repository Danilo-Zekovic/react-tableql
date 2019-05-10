import React from 'react'
import { storiesOf } from '@storybook/react'

import { Setup, Welcome } from './customStories'

storiesOf('Welcome', module)
  .addParameters({ options: { showPanel: false } })
  .add('to TableQL', () => <Welcome />)

storiesOf('Getting Started', module)
  .addParameters({ options: { showPanel: false } })
  .add('setup', () => <Setup />)
