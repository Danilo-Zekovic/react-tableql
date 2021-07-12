import React from 'react'

import { render } from '@testing-library/react'

import Foo from './Foo'

describe('<SortArrows>', () => {
  it('default snapshot', () => {
    const { container } = render(<Foo foo="asd" />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
