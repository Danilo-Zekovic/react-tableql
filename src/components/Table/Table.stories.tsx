import React from 'react'

import Table from './Table'
import { FILMS } from '../../../__mocks__/data'
import { STORYBOOK_SECTIONS } from '../../../stories/constants'

const DATA_KEYS = [
  'title',
  'episodeID',
  'openingCrawl',
  'director',
  'producer',
  'releaseDate',
]

export default {
  title: `${STORYBOOK_SECTIONS.buildingBlocks}|Table`,
  component: Table,
}

export const Default = () => (
  <Table log={() => {}} displayData={FILMS} dataKeys={DATA_KEYS} />
)
