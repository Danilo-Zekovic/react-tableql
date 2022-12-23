import React from 'react'

import { render } from '@testing-library/react'

import TableQL from './TableQL'
import { MOCK_DATA } from '../shared/testUtils'

describe('<TableQL>', () => {
  it('default snapshot', () => {
    const { container } = render(<TableQL data={MOCK_DATA} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
