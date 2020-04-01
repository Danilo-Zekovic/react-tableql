import React from 'react'

import TableQL from './TableQL'
import { FILMS } from '../../__mocks__/dataMock'
import { STORYBOOK_SECTIONS } from '../../stories/constants'

export default {
  title: `${STORYBOOK_SECTIONS.tableQl}|Basic`,
  component: TableQL,
}

export const Default = () => <TableQL data={FILMS} />
