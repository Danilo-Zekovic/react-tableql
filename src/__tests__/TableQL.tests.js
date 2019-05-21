import React, { Simulate } from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import '@babel/polyfill' // TODO: not ideal find the way to move it globally, webpack

import TableQL from '../index'
import { FILMS, PEOPLE } from '../../__mocks__/data'

const wait = time => new Promise(resolve => setTimeout(resolve, time))

describe('<TableQL>', () => {
  afterEach(cleanup)

  it('default snapshot', () => {
    console.log = jest.fn()

    const container = render(<TableQL data={FILMS} />)

    expect(container).toMatchSnapshot()
    expect(console.log).toHaveBeenCalledTimes(0)
  })

  it('loading', () => {
    const container = render(<TableQL data={FILMS} loading={true} />)

    expect(container).toMatchSnapshot()
    expect(container.getByText('Loading...')).toBeTruthy()
    expect(typeof container.getByText('Loading...')).toBe('object')
    expect(container.getAllByText('Loading...').length).toBe(1)
  })

  it('error', () => {
    const container = render(
      <TableQL data={FILMS} error={new Error('You have an Error mate!')} />,
    )

    expect(container).toMatchSnapshot()
    expect(
      container.getByText(
        'Error while loading TableQL: You have an Error mate!',
      ),
    ).toBeTruthy()
    expect(
      typeof container.getByText(
        'Error while loading TableQL: You have an Error mate!',
      ),
    ).toBe('object')
    expect(
      container.getAllByText(
        'Error while loading TableQL: You have an Error mate!',
      ).length,
    ).toBe(1)
  })

  it('custom error message', () => {
    const container = render(
      <TableQL
        data={FILMS}
        error={new Error('You have an Error mate!')}
        errorMessage={'Hey I am an Error!'}
      />,
    )

    expect(container).toMatchSnapshot()
    expect(container.getByText('Hey I am an Error!')).toBeTruthy()
    expect(typeof container.getByText('Hey I am an Error!')).toBe('object')
    expect(container.getAllByText('Hey I am an Error!').length).toBe(1)
  })

  it('no data found', () => {
    const container = render(<TableQL data={[]} />)

    expect(container).toMatchSnapshot()
    expect(container.getByText('No data found!')).toBeTruthy()
    expect(typeof container.getByText('No data found!')).toBe('object')
    expect(container.getAllByText('No data found!').length).toBe(1)
  })

  it('should have pagination', () => {
    const { container, queryAllByTestId, findByTestId } = render(
      <TableQL data={PEOPLE} pagination={true} />,
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(findByTestId('pagination')).toBeTruthy()
    expect(queryAllByTestId('pagination').length).toBe(1)

    expect(container.querySelector('tbody').querySelectorAll('tr')).toBeTruthy()
    expect(container.querySelector('tbody').querySelectorAll('tr').length).toBe(
      10,
    )
  })

  it('should not have pagination as there is not enough object/data/rows', async () => {
    const { container, queryAllByTestId, queryByTestId } = render(
      <TableQL data={FILMS} pagination={true} />,
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(queryByTestId('pagination')).toBeFalsy()
    expect(queryAllByTestId('pagination').length).toBe(0)
  })

  it('should have pagination object', async () => {
    console.log = jest.fn()
    const pageLimit = 5

    const { container, queryAllByTestId, queryByTestId, queryByText } = render(
      <TableQL
        data={PEOPLE}
        pagination={{
          currentPage: 3,
          onPageChanged: (currentPage, totalPages, pageLimit, totalRecords) =>
            console.log(currentPage, totalPages, pageLimit, totalRecords),
          pageLimit,
        }}
      />,
    )
    // pagination exists
    expect(container.firstChild).toMatchSnapshot()
    expect(queryByTestId('pagination')).toBeTruthy()
    expect(queryAllByTestId('pagination').length).toBe(1)
    // change page
    expect(queryByText('1')).toBeTruthy()
    fireEvent.click(queryByText('1'))
    expect(console.log).toBeCalled()
    expect(console.log).toHaveBeenCalledWith(1, 18, pageLimit, PEOPLE.length)
    // page limit
    expect(container.querySelector('tbody').querySelectorAll('tr')).toBeTruthy()
    expect(container.querySelector('tbody').querySelectorAll('tr').length).toBe(
      pageLimit,
    )
  })

  it('debug mode', () => {
    console.log = jest.fn()

    const { container } = render(<TableQL data={FILMS} debug />)

    expect(container.firstChild).toMatchSnapshot()
    expect(console.log).toBeCalled()
    expect(console.log).toHaveBeenCalledTimes(12)
  })
})
