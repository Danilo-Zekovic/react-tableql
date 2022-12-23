import React from 'react'

import { render } from '@testing-library/react'

import Table from './Table'
import { TableProvider } from '../../TableProvider'
import { MOCK_DATA } from '../../shared/testUtils'

describe('<Table>', () => {
  it('default snapshot', () => {
    const { container } = render(
      <TableProvider data={MOCK_DATA}>
        <Table />)
      </TableProvider>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
