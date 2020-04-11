import React from 'react'

import { render } from '@testing-library/react'

import SortArrows from './SortArrows'

describe('<SortArrows>', () => {
  it('default snapshot', () => {
    const { container } = render(<SortArrows />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
