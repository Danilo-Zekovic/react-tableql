import React, { FC } from 'react'

import { render, screen } from '@testing-library/react'

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

  it('pass onEmpty', () => {
    const Empty: FC = () => <h3>I am empty</h3>
    const { container } = render(
      <TableProvider data={[]} onEmpty={Empty}>
        <Table />)
      </TableProvider>,
    )
    expect(screen.getByText('I am empty')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
