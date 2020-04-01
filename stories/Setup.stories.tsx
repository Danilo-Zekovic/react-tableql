import React from 'react'

import { Setup } from './customStories'
import { STORYBOOK_SECTIONS } from './constants'

export default {
  title: `${STORYBOOK_SECTIONS.gettingStarted}|Setup`,
}

export const Install = () => <Setup />
