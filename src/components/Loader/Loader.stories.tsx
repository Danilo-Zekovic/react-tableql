import React from 'react'

import Loader from './Loader'
import { STORYBOOK_SECTIONS } from '../../../stories/constants'

export default {
  title: `${STORYBOOK_SECTIONS.buildingBlocks}|Loader`,
  component: Loader,
}

export const Default = () => <Loader />
