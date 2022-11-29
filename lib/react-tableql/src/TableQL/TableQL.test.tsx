import React from 'react'

import { render } from '@testing-library/react'

import TableQL from './TableQL'

describe('<TableQL>', () => {
  it('default snapshot', () => {
    const { container } = render(<TableQL />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
