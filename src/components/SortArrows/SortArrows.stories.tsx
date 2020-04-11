import React from 'react'

import SortArrows from './SortArrows'
import { STORYBOOK_SECTIONS } from '../../../stories/constants'

export default {
  title: `${STORYBOOK_SECTIONS.buildingBlocks}|SortArrows`,
  component: SortArrows,
}

export const Default = () => <SortArrows />
