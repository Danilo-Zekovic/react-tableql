import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@babel/polyfill' // TODO: not ideal find the way to move it globally, webpack

import { FILMS } from '../__mocks__/data'
import Table from '../src/Table'

const DATA_KEYS = [
  'title',
  'episodeID',
  'openingCrawl',
  'director',
  'producer',
  'releaseDate',
]

describe('<Table>', () => {
  afterEach(cleanup)

  it('default', () => {
    const { container } = render(
      <Table displayData={FILMS} dataKeys={DATA_KEYS} log={() => {}} />,
    )

    expect(container.firstChild).toMatchSnapshot()

    // per page
    expect(container.querySelector('tbody').querySelectorAll('tr')).toBeTruthy()
    expect(container.querySelector('tbody').querySelectorAll('tr').length).toBe(
      FILMS.length,
    )
    // number of columns
    expect(container.querySelector('thead').querySelector('tr')).toBeTruthy()
    expect(
      container
        .querySelector('thead')
        .querySelector('tr')
        .querySelectorAll('th').length,
    ).toBe(DATA_KEYS.length)
    // label formated correctly
    expect(
      container.querySelector('thead').querySelector('tr').firstChild
        .textContent,
    ).toBe('Title')
  })

  it('onRowClick', () => {
    console.log = jest.fn()

    const { container } = render(
      <Table
        displayData={FILMS}
        dataKeys={DATA_KEYS}
        onRowClick={data => console.log(data)}
        log={() => {}}
      />,
    )

    expect(container.firstChild).toMatchSnapshot()

    expect(container.querySelector('tbody').firstChild).toBeTruthy()
    fireEvent.click(container.querySelector('tbody').firstChild)

    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith({
      title: 'A New Hope',
      episodeID: 4,
      openingCrawl:
        "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      director: 'George Lucas',
      producer: 'Gary Kurtz, Rick McCallum',
      releaseDate: '1977-05-25',
    })

    console.log.mockRestore()
  })

  it('columns label', () => {
    const titleLabel = 'Movie Title'
    const { container, queryByText } = render(
      <Table
        displayData={FILMS}
        dataKeys={[
          { id: 'title', label: titleLabel },
          'episodeID',
          'openingCrawl',
          'director',
          'producer',
          'releaseDate',
        ]}
        log={() => {}}
      />,
    )

    expect(container.firstChild).toMatchSnapshot()

    const firstLabel = container.querySelector('thead').querySelector('tr')
      .firstChild

    expect(firstLabel).toBeTruthy()
    expect(firstLabel).toBe(queryByText(titleLabel))
    expect(firstLabel.textContent).toBe(queryByText(titleLabel).textContent)
  })

  it('columns component data formating', () => {
    const { container, queryByText } = render(
      <Table
        displayData={FILMS}
        dataKeys={[
          { id: 'title', component: data => data.toUpperCase() },
          'episodeID',
          'openingCrawl',
          'director',
          'producer',
          'releaseDate',
        ]}
        log={() => {}}
      />,
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(
      container.querySelector('tbody').querySelector('tr').firstChild
        .textContent,
    ).toBe(FILMS[0].title.toUpperCase())
  })

  it('columns component data formating', () => {
    const buttonLabel = 'Click Me'
    const Button = () => <button>{buttonLabel}</button>
    const { container, queryByText } = render(
      <Table
        displayData={FILMS}
        dataKeys={[
          { id: 'title', component: data => <Button /> },
          'episodeID',
          'openingCrawl',
          'director',
          'producer',
          'releaseDate',
        ]}
        log={() => {}}
      />,
    )

    expect(container.firstChild).toMatchSnapshot()

    expect(
      container.querySelector('tbody').querySelector('tr').firstChild.firstChild
        .textContent,
    ).toBe(buttonLabel)
  })

  it('columns custom column', () => {
    const buttonLabel = 'Click Me'
    const Button = () => <button>{buttonLabel}</button>
    const { container } = render(
      <Table
        displayData={FILMS}
        dataKeys={[
          { id: 'custom', customColumn: true, component: () => <Button /> },
          ...DATA_KEYS,
        ]}
        log={() => {}}
      />,
    )

    expect(container.firstChild).toMatchSnapshot()

    expect(
      container.querySelector('tbody').querySelector('tr').firstChild.firstChild
        .textContent,
    ).toBe(buttonLabel)
    // number of columns
    expect(container.querySelector('thead').querySelector('tr')).toBeTruthy()
    expect(
      container
        .querySelector('thead')
        .querySelector('tr')
        .querySelectorAll('th').length,
    ).toBe(DATA_KEYS.length + 1)
    // custom column label formated correctly
    expect(
      container.querySelector('thead').querySelector('tr').firstChild
        .textContent,
    ).toBe('Custom')
  })

  it('columns custom column error component required', () => {
    console.error = jest.fn()

    expect(() => {
      render(
        <Table
          displayData={FILMS}
          dataKeys={[{ id: 'custom', customColumn: true }, ...DATA_KEYS]}
          log={() => {}}
        />,
      )
    }).toThrowError(
      new Error('When customColumn true, component property must be provided!'),
    )
    expect(console.error).toHaveBeenCalled()

    console.error.mockRestore()
  })

  it('custom column style', () => {
    const customClass = 'test-class'
    const { container } = render(
      <Table
        displayData={FILMS}
        dataKeys={[
          { id: 'title', nodeStyle: customClass },
          'episodeID',
          'openingCrawl',
          'director',
          'producer',
          'releaseDate',
        ]}
        log={() => {}}
      />,
    )

    expect(container.firstChild).toMatchSnapshot()

    expect(
      container
        .querySelector('tbody')
        .querySelector('tr')
        .firstChild.classList.contains(customClass),
    ).toBeTruthy()
    expect(
      container
        .querySelector('tbody')
        .querySelector('tr')
        .lastChild.classList.contains(customClass),
    ).toBeFalsy()
  })

  it('selective custom column cell style', () => {
    const customClass = 'test-class'
    const { container } = render(
      <Table
        displayData={FILMS}
        dataKeys={[
          {
            id: 'title',
            nodeStyle: data => {
              if (data.title <= FILMS[0].title) return customClass
            },
          },
          'episodeID',
          'openingCrawl',
          'director',
          'producer',
          'releaseDate',
        ]}
        log={() => {}}
      />,
    )

    expect(container.firstChild).toMatchSnapshot()

    // select first row and first cell
    expect(
      container
        .querySelector('tbody')
        .querySelector('tr')
        .firstChild.classList.contains(customClass),
    ).toBeTruthy()
    // selects last row and first column
    expect(
      container
        .querySelector('tbody')
        .lastChild.firstChild.classList.contains(customClass),
    ).toBeFalsy()
  })

  it('sort', () => {
    console.log = jest.fn()

    const { container } = render(
      <Table
        displayData={FILMS}
        dataKeys={[
          'title',
          'episodeID',
          'openingCrawl',
          'director',
          'producer',
          'releaseDate',
        ]}
        log={() => {}}
        sort
        onSort={column => {
          console.log(column)
        }}
      />,
    )

    const headerLabel = container.querySelector('thead').firstChild.firstChild
    fireEvent.click(headerLabel)

    expect(container.firstChild).toMatchSnapshot()
    expect(headerLabel.classList.contains('TableQL-thead-th-sort')).toBeTruthy()
    expect(console.log).toHaveBeenCalledTimes(1)

    console.log.mockRestore()
  })

  it('sort through column', () => {
    console.log = jest.fn()

    const { container } = render(
      <Table
        displayData={FILMS}
        dataKeys={[
          { id: 'title', sort: true },
          'episodeID',
          'openingCrawl',
          'director',
          'producer',
          'releaseDate',
        ]}
        log={() => {}}
        onSort={column => {
          console.log(column)
        }}
      />,
    )

    const headerLabel = container.querySelector('thead').firstChild.firstChild
    fireEvent.click(headerLabel)

    expect(container.firstChild).toMatchSnapshot()
    expect(headerLabel.classList.contains('TableQL-thead-th-sort')).toBeTruthy()
    expect(console.log).toHaveBeenCalledTimes(1)

    console.log.mockRestore()
  })

  it('sort through column', () => {
    console.log = jest.fn()

    const { container } = render(
      <Table
        displayData={FILMS}
        dataKeys={[
          'title',
          'episodeID',
          'openingCrawl',
          'director',
          'producer',
          'releaseDate',
        ]}
        log={() => {}}
      />,
    )

    const headerLabel = container.querySelector('thead').firstChild.firstChild
    fireEvent.click(headerLabel)

    expect(container.firstChild).toMatchSnapshot()
    expect(headerLabel.classList.contains('TableQL-thead-th-sort')).toBeFalsy()
    expect(console.log).toHaveBeenCalledTimes(0)

    console.log.mockRestore()
  })
})
