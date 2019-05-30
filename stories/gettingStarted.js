import React from 'react'
import { storiesOf } from '@storybook/react'

import { Setup, Welcome, StorybookDirections } from './customStories'

export const foo = storiesOf('Getting Started|Introduction', module)
  .addParameters({ options: { showPanel: false } })
  .add('to React TableQL', () => <Welcome />)
  .add('to Storybook', () => <StorybookDirections />)

export const boo = storiesOf('Getting Started|Setup', module)
  .addParameters({ options: { showPanel: false } })
  .add('Install', () => <Setup />)
