import React from 'react'
import { render } from '@testing-library/react'

import TableQL from './index'
import { FILMS } from '../__mocks__/dataMock'

describe('index', () => {
  it('TableQL', () => {
    const { container } = render(<TableQL data={FILMS} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
