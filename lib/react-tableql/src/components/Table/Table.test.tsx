import React from 'react'

import { render } from '@testing-library/react'

import Table from './Table'

describe('<Table>', () => {
  it('default snapshot', () => {
    const { container } = render(<Table />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
