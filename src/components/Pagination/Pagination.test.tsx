// @ts-nocheck
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
// import '@babel/polyfill' // TODO: not ideal find the way to move it globally, webpack

import Pagination from './Pagination'

describe('<Pagination>', () => {
  afterEach(cleanup)

  it('default', () => {
    const { container } = render(
      <Pagination totalRecords={100} log={() => {}} />,
    )

    expect(container.firstChild).toMatchSnapshot()

    expect(container.firstChild?.firstChild?.textContent).toBe('1')
    expect(container.firstChild?.lastChild?.textContent).toBe('10')
    expect(
      container.firstChild?.querySelectorAll('button')[1].textContent,
    ).toBe('2')
    expect(
      container.firstChild?.querySelectorAll('button')[2].textContent,
    ).toBe('3')
    expect(container.firstChild?.querySelectorAll('button').length).toBe(5)
    expect(
      container.firstChild?.classList!.contains('PaginationContainer'),
    ).toBeTruthy()
  })

  it('should have page limit 5', () => {
    const { container } = render(
      <Pagination totalRecords={100} log={() => {}} pageLimit={5} />,
    )

    expect(container.firstChild).toMatchSnapshot()

    expect(container.firstChild?.firstChild?.textContent).toBe('1')
    expect(
      container.firstChild?.firstChild?.classList?.contains('active'),
    ).toBeTruthy()
    expect(container.firstChild?.lastChild?.textContent).toBe('20')
    expect(
      container.firstChild?.querySelectorAll('button')[1].textContent,
    ).toBe('2')
    expect(
      container.firstChild?.querySelectorAll('button')[2].textContent,
    ).toBe('3')
    expect(container.firstChild?.querySelectorAll('button').length).toBe(5)
  })

  it('should have page neighbors 2', () => {
    const { container } = render(
      <Pagination totalRecords={100} log={() => {}} pageNeighbors={2} />,
    )

    expect(container.firstChild).toMatchSnapshot()

    const buttons = container.firstChild?.querySelectorAll('button')
    expect(container.firstChild?.firstChild?.textContent).toBe('1')
    expect(container.firstChild?.lastChild?.textContent).toBe('10')
    expect(buttons[1].textContent).toBe('2')
    expect(buttons[2].textContent).toBe('3')
    expect(buttons.length).toBe(9)
  })

  it('changing pages', () => {
    const { container } = render(
      <Pagination
        totalRecords={100}
        log={() => {}}
        pageNeighbors={2}
        pageLimit={5}
      />,
    )

    const buttons = container.firstChild?.querySelectorAll('button')

    expect(buttons[0].classList.contains('active')).toBeTruthy()
    // move right
    fireEvent.click(buttons[buttons.length - 2])
    expect(buttons[0].classList.contains('active')).toBeFalsy()
    expect(buttons[1].classList.contains('active')).toBeTruthy()
    fireEvent.click(buttons[buttons.length - 2])
    expect(buttons[1].classList.contains('active')).toBeFalsy()
    expect(buttons[2].classList.contains('active')).toBeTruthy()
    fireEvent.click(buttons[buttons.length - 2])
    expect(buttons[2].classList.contains('active')).toBeFalsy()
    expect(buttons[3].classList.contains('active')).toBeTruthy()
    fireEvent.click(buttons[buttons.length - 2])
    expect(buttons[3].classList.contains('active')).toBeFalsy()
    expect(buttons[4].classList.contains('active')).toBeTruthy()
    // passed 5th/middle button
    fireEvent.click(buttons[buttons.length - 2])
    expect(buttons[4].classList.contains('active')).toBeTruthy()
    expect(buttons[5].classList.contains('active')).toBeFalsy()
    // move left
    fireEvent.click(buttons[1])
    expect(buttons[4].classList.contains('active')).toBeTruthy()
    expect(buttons[5].classList.contains('active')).toBeFalsy()
    fireEvent.click(buttons[1])
    expect(buttons[3].classList.contains('active')).toBeTruthy()
    expect(buttons[4].classList.contains('active')).toBeFalsy()
  })

  it('onPageChanged', () => {
    console.log = jest.fn()

    const { container } = render(
      <Pagination
        totalRecords={100}
        log={() => {}}
        onPageChanged={data => {
          console.log(data)
        }}
      />,
    )

    const buttons = container.firstChild?.querySelectorAll('button')

    expect(buttons[0].classList.contains('active')).toBeTruthy()
    fireEvent.click(buttons[buttons.length - 2])
    expect(buttons[0].classList.contains('active')).toBeFalsy()
    expect(buttons[1].classList.contains('active')).toBeTruthy()

    expect(console.log).toHaveBeenCalledTimes(2) // once initial, second on click
    expect(console.log).toHaveBeenCalledWith({
      currentPage: 2,
      pageLimit: 10,
      totalPages: 10,
      totalRecords: 100,
    }) // second call is with this data

    console.log.mockRestore()
  })

  it('current page to be 5', () => {
    const { container } = render(
      <Pagination totalRecords={100} log={() => {}} selectedPage={5} />,
    )

    expect(container.firstChild).toMatchSnapshot()

    const buttons = container.firstChild?.querySelectorAll('button')

    expect(buttons.length).toBe(5)
    expect(buttons[2].textContent).toBe('5')
    expect(buttons[2].classList.contains('active')).toBeTruthy()
    // first and last are not active
    expect(buttons[0].classList.contains('active')).toBeFalsy()
    expect(buttons[buttons.length - 1].classList.contains('active')).toBeFalsy()
  })

  it('custom styles', () => {
    const customClass = 'test-class'
    const { container } = render(
      <Pagination totalRecords={100} log={() => {}} styles={customClass} />,
    )

    expect(container.firstChild?.classList.contains(customClass)).toBeTruthy()
    expect(
      container.firstChild?.classList.contains('PaginationContainer'),
    ).toBeFalsy()
  })

  // TODO this one seams like a cheat
  it('button calculation one last page selected', () => {
    const { container } = render(
      <Pagination
        totalRecords={100}
        log={() => {}}
        pageLimit={10}
        selectedPage={10}
      />,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
