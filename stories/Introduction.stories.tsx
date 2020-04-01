import React from 'react'

import { Welcome, StorybookDirections } from './customStories'
import { STORYBOOK_SECTIONS } from './constants'

export default {
  title: `${STORYBOOK_SECTIONS.gettingStarted}|Introduction`,
  id: 0,
}

export const toReactTableQL = () => <Welcome />

export const toStorybook = () => <StorybookDirections />
