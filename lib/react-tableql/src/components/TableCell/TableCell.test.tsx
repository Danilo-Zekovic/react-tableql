import React from 'react'
import { render } from '@testing-library/react'

import TableCell from './TableCell'
import { TableProvider } from '../../TableProvider'
import { MOCK_DATA } from '../../shared/testUtils'

describe('<TableRows>', () => {
  it('default snapshot', () => {
    const tbody = document.createElement('tbody')
    const { container } = render(
      <TableProvider data={MOCK_DATA}>
        <TableCell column={{ id: 'foo' }} data={'Foo'} />
      </TableProvider>,

      {
        container: document.body.appendChild(tbody),
      },
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
