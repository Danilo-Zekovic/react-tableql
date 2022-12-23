import React from 'react'

import { render } from '@testing-library/react'

import TableHeader from './TableHeader'
import { TableProvider } from '../../TableProvider'
import { MOCK_DATA, MOCK_DATA_KEYS } from '../../shared/testUtils'

describe('<TableHeader>', () => {
  it('default snapshot', () => {
    const thead = document.createElement('thead')

    const { container } = render(
      <TableProvider data={MOCK_DATA}>
        <TableHeader />
      </TableProvider>,
      {
        container: document.body.appendChild(thead),
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
        <TableHeader />
      </TableProvider>,
      {
        container: document.body.appendChild(thead),
      },
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
