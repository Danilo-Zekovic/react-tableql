import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@babel/polyfill' // TODO: not ideal find the way to move it globally, webpack

import ErrorBoundary from '../src/ErrorBaundary'

// NOTE: credit for these tests goes to @kentcdodds,
// as I used his code and explanation https://github.com/kentcdodds/react-testing-library-course/blob/master/src/__tests__/error-boundary.js

function Bomb({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('Boom')
  } else {
    return null
  }
}

describe('<ErrorBoundary>', () => {
  afterEach(cleanup)

  it('default', () => {
    console.error = jest.fn()
    console.log = jest.fn()

    const { container, rerender } = render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    )

    rerender(
      <ErrorBoundary>
        <Bomb shouldThrow={true} />
      </ErrorBoundary>,
    )

    expect(console.log).toHaveBeenCalledTimes(1)
    const error = expect.any(Error)
    const info = { componentStack: expect.stringContaining('Bomb') }
    expect(console.log).toHaveBeenCalledWith(
      'React-TableQL Error: ',
      error,
      '\nMore info about error: ',
      info,
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild.firstChild.textContent).toBe(
      'Something went wrong!',
    )

    // by mocking out console.error we may inadvertantly be missing out on logs
    // in the future that could be important, so let's reduce that liklihood by
    // adding an assertion for how frequently console.error is called.
    expect(console.error).toHaveBeenCalledTimes(2)

    // clear the mocks
    console.error.mockClear()
    console.log.mockClear()

    // check if user can recover from errors
    rerender(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    )

    expect(console.log).not.toHaveBeenCalled()
    expect(console.error).not.toHaveBeenCalled()
    expect(container.firstChild.firstChild.textContent).not.toBe(
      'There was a problem',
    )
  })
})
