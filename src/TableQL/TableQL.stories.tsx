import React from 'react'

import TableQL from './TableQL'
import { FILMS } from '../../__mocks__/data'
import { STORYBOOK_SECTIONS } from '../../stories/constants'

export default {
  title: `${STORYBOOK_SECTIONS.tableQl}/Basic`,
  component: TableQL,
}

export const Default = () => <TableQL data={FILMS} />

export const NoData = () => (
  <TableQL
    data={{ data: [] }}
    columns={[
      { id: 'foo', label: 'Foo', sort: true },
      { id: 'bar', label: 'Bar', sort: false },
    ]}
    pagination
  />
)

export const OnEmpty = () => (
  <TableQL
    data={{ data: [] }}
    columns={[
      { id: 'foo', label: 'Foo', sort: true },
      { id: 'bar', label: 'Bar', sort: false },
    ]}
    onEmpty={({ reason }) => <h3>You don't have data yet. Reason {reason}</h3>}
  />
)

export const IncorectData = () => <TableQL data={{ data: 'asd' }} />
