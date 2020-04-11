import React from 'react'

import Pagination from './Pagination'
import { STORYBOOK_SECTIONS } from '../../../stories/constants'

export default {
  title: `${STORYBOOK_SECTIONS.buildingBlocks}|Pagination`,
  component: Pagination,
}

export const Default = () => <Pagination totalRecords={100} log={() => {}} />
