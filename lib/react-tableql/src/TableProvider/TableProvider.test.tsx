import React from 'react'
import { render, screen } from '@testing-library/react'

import { TableProvider, useTableState } from './TableProvider'
import { defaultTheme } from '../shared/defaultTheme'
import { tableReducer } from './reducer'
import { getFormattedTheme } from './getFormattedTheme'

const MockPage = (): JSX.Element => {
  const { theme, data, dataKeys } = useTableState()

  return (
    <>
      <h1>Theme: {JSON.stringify(theme)}</h1>
      <h2>Data: {JSON.stringify(data)}</h2>
      <h3>Data Keys: {JSON.stringify(dataKeys)}</h3>
    </>
  )
}

describe('<TableProvider>', () => {
  it('useTable theme', () => {
    render(
      <TableProvider data={[]}>
        <MockPage />
      </TableProvider>,
    )

    expect(
      screen.getByText(`Theme: ${JSON.stringify(defaultTheme)}`),
    ).toBeTruthy()
  })

  it('pass theme', () => {
    render(
      <TableProvider theme={{ primary: 'tomato' }} data={[]}>
        <MockPage />
      </TableProvider>,
    )

    expect(
      screen.getByText(
        `Theme: ${JSON.stringify({
          ...defaultTheme,
          header: {
            color: defaultTheme.header.color,
            background: 'tomato',
          },
        })}`,
      ),
    ).toBeTruthy()
  })

  it('useTable data', () => {
    render(
      <TableProvider data={[{ name: 'Danilo' }]}>
        <MockPage />
      </TableProvider>,
    )

    expect(
      screen.getByText(`Data: ${JSON.stringify([{ name: 'Danilo' }])}`),
    ).toBeTruthy()
  })
})

describe('<TableProvider> reducer', () => {
  it('setTheme', () => {
    const theme = {
      ...defaultTheme,
      header: {
        color: defaultTheme.header.color,
        background: 'tomato',
      },
    }

    expect(
      tableReducer(
        { theme: defaultTheme, data: [], dataKeys: [] },
        { type: 'setTheme', payload: { theme } },
      ),
    ).toEqual({ theme, data: [], dataKeys: [] })
  })

  it('no theme passed', () => {
    expect(
      tableReducer(
        { theme: defaultTheme, data: [], dataKeys: [] },
        // @ts-expect-error testing for when there is no theme passed down
        { type: 'setTheme', payload: { theme: undefined } },
      ),
    ).toEqual({ theme: defaultTheme, data: [], dataKeys: [] })
  })

  it('wrong action type passed', () => {
    function throwError(): void {
      tableReducer(
        { theme: defaultTheme, data: [], dataKeys: [] },
        // @ts-expect-error testing for when there is no theme passed down
        { type: 'invalidActionType', payload: { theme: defaultTheme } },
      )
    }

    expect(throwError).toThrow(
      new Error(`Unhandled action type: invalidActionType`),
    )
  })
})

describe('<TableProvider> getFormattedTheme', () => {
  it('formattedAdvancedTheme', () => {
    const theme = {
      header: {
        color: '#000',
        background: '#fff',
      },
      rows: {
        color: '#000',
        background: '#fff',
        hover: '#f1f3f5',
        stripes: {
          color: '#111111',
          background: '#222222',
          hover: '#333333',
        },
      },
      grid: {
        frame: '#dee2e6',
        horizontal: '#dee2e6',
        vertical: '#dee2e6',
      },
    }

    expect(getFormattedTheme(theme)).toEqual({ ...theme })
  })

  it('formattedAdvancedTheme missing pieces', () => {
    expect(
      getFormattedTheme({
        header: {
          color: '#000',
        },
      }),
    ).toEqual({ ...defaultTheme })
  })

  it('formattedBasicTheme', () => {
    expect(
      getFormattedTheme({
        secondaryFontColor: '#000',
      }),
    ).toEqual({ ...defaultTheme })
  })
})
