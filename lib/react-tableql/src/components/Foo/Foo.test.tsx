import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'

import Foo from './Foo'

describe('<Foo>', () => {
  it('default snapshot', () => {
    const { container } = render(<Foo foo="asd" />)

    expect(container.firstChild).toMatchSnapshot()
  })
  it('test click', () => {
    console.log = jest.fn()
    render(<Foo foo="asd" />)

    const button = screen.getByText('Click me')

    fireEvent.click(button)
    expect(button).toBeTruthy()
    expect(console.log).toHaveBeenCalledTimes(2)
  })
})
