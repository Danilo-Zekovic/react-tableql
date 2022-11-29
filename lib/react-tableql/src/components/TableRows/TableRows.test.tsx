import React from 'react'

import { render } from '@testing-library/react'

import TableRows from './TableRows'

describe('<TableRows>', () => {
  it('default snapshot', () => {
    const tbody = document.createElement('tbody')
    const { container } = render(<TableRows />, {
      container: document.body.appendChild(tbody),
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
