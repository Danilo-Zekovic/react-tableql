import React from 'react'
// import { renderHook } from '@testing-library/react-hooks'
import { fireEvent, render, screen } from '@testing-library/react'

import {
  TableQLProvider,
  useTableQLState,
  useTableQLDispatch,
  useTableQL,
} from './TableQLProvider'
import { defaultTheme } from '../shared/defaultTheme'

const MockPage = (): JSX.Element => {
  const { setTheme, updateTheme } = useTableQL()
  const { theme } = useTableQLState()
  const context = useTableQLDispatch()

  const handleSetTheme = (): void => {
    setTheme({ primary: 'tomato' })
  }

  const handleUpdateTheme = (): void => {
    updateTheme({ primary: 'lime' })
  }

  const handleUseTableQLState = (): void => {
    console.log(theme)
  }

  const handleUseTableQLDispatch = (): void => {
    context({ type: 'setTheme', theme: { primary: 'chocolate' } })
  }

  return (
    <>
      <h1>Theme: {JSON.stringify(theme)}</h1>
      <button onClick={handleSetTheme}>setTheme</button>
      <button onClick={handleUpdateTheme}>updateTheme</button>
      <button onClick={handleUseTableQLState}>useTableQLState</button>
      <button onClick={handleUseTableQLDispatch}>useTableQLState</button>
    </>
  )
}

describe('<TableQLProvider>', () => {
  it('useTableQL theme', () => {
    render(
      <TableQLProvider>
        <MockPage />
      </TableQLProvider>,
    )

    expect(
      screen.getByText(`Theme: ${JSON.stringify(defaultTheme)}`),
    ).toBeTruthy()
  })

  it('useTableQL setTheme', () => {
    render(
      <TableQLProvider>
        <MockPage />
      </TableQLProvider>,
    )

    const button = screen.getByText('setTheme')
    fireEvent.click(button)

    expect(
      screen.getByText(`Theme: ${JSON.stringify({ primary: 'tomato' })}`),
    ).toBeTruthy()
  })

  it('useTableQL updateTheme', () => {
    render(
      <TableQLProvider>
        <MockPage />
      </TableQLProvider>,
    )

    const button = screen.getByText('updateTheme')
    fireEvent.click(button)

    expect(
      screen.getByText(`Theme: ${JSON.stringify({ primary: 'lime' })}`),
    ).toBeTruthy()
  })

  it('useTableQL defaultTheme', () => {
    render(
      <TableQLProvider theme={{ primary: 'tomato' }}>
        <MockPage />
      </TableQLProvider>,
    )

    expect(
      screen.getByText(`Theme: ${JSON.stringify({ primary: 'tomato' })}`),
    ).toBeTruthy()
  })

  // TODO once you find the way to test it write the test
  // it('useTableQLState throw error', () => {
  // let caughtError = null

  // try {
  // const { result } = renderHook(() => useTableQLState())
  // expect(result.current.theme).toBeTruthy()
  // } catch (error) {
  //   caughtError = error
  // }

  // expect(caughtError).toEqual(
  //   Error('useTableQLDispatch must be used within a TableQLProvider'),
  // )

  // expect(() => renderHook(() => useTableQLState())).toThrow(
  //   Error(`useTableQLState must be used within a TableQLProvider`),
  // )
  // })
})
