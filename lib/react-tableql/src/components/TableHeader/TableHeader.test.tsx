import React from 'react'

import { render } from '@testing-library/react'

import TableHeader from './TableHeader'

describe('<TableHeader>', () => {
  it('default snapshot', () => {
    const thead = document.createElement('thead')

    const { container } = render(<TableHeader />, {
      container: document.body.appendChild(thead),
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
