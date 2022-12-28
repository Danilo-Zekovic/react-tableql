import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import TableRows from './TableRows'
import { TableProvider } from '../../TableProvider'
import { MOCK_DATA, MOCK_DATA_KEYS } from '../../shared/testUtils'

describe('<TableRows>', () => {
  it('default snapshot', () => {
    const tbody = document.createElement('tbody')
    const { container } = render(
      <TableProvider data={MOCK_DATA}>
        <TableRows />
      </TableProvider>,

      {
        container: document.body.appendChild(tbody),
      },
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('when columns config passed', () => {
    const thead = document.createElement('thead')

    const { container } = render(
      <TableProvider
        data={MOCK_DATA}
        columns={[MOCK_DATA_KEYS[0], { id: MOCK_DATA_KEYS[1] }]}
      >
        <TableRows />
      </TableProvider>,
      {
        container: document.body.appendChild(thead),
      },
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('when onRowClick passed', () => {
    const thead = document.createElement('thead')

    const mockFn = jest.fn()

    render(
      <TableProvider data={MOCK_DATA} onRowClick={mockFn}>
        <TableRows />
      </TableProvider>,
      {
        container: document.body.appendChild(thead),
      },
    )

    const author = screen.getByText(MOCK_DATA[0].author)

    fireEvent.click(author)
    expect(author).toBeTruthy()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
