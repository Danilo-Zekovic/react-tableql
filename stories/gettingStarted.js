import React from 'react'
import { storiesOf } from '@storybook/react'

import { Setup, Welcome } from './customStories'

export const foo = storiesOf('Getting Started|Introduction', module)
  .addParameters({ options: { showPanel: false } })
  .add('to TableQL', () => <Welcome />)

export const boo = storiesOf('Getting Started|Setup', module)
  .addParameters({ options: { showPanel: false } })
  .add('Install', () => <Setup />)
