import React, { FC, useEffect } from 'react'
import { render, screen, fireEvent, getByText } from '@testing-library/react'

import {
  TableQLProvider,
  useTableQL,
  useTableQLState,
  useTableQLDispatch,
} from './TableQLProvider'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import { defaultDarkTheme, defaultTheme } from '../themes'

const changeThemeButtonText = 'Change Theme'
const updateThemeButtonText = 'Update Theme'
const breakButtonText = 'Break It'

const ExamplePage: FC = () => {
  const { theme } = useTableQLState()
  const { setTheme, updateTheme } = useTableQL()
  const context = useTableQLDispatch()

  const handleClick = () => {
    setTheme({ header: { background: 'red' } })
  }

  const handleThemeUpdate = () => {
    updateTheme({ header: { background: 'green' } })
  }

  const handleBreak = () => {
    context({
      // @ts-expect-error
      type: 'incorrectAction',
      theme: defaultTheme,
    })
  }

  return (
    <div>
      <span>{theme && theme.header && theme?.header?.background}</span>
      <button onClick={handleClick}>{changeThemeButtonText}</button>
      <button onClick={handleThemeUpdate}>{updateThemeButtonText}</button>
      <button onClick={handleBreak}>{breakButtonText}</button>
    </div>
  )
}

const ExampleApp: FC = () => {
  return (
    <ErrorBoundary>
      <TableQLProvider theme={{ header: { background: 'blue' } }}>
        <ExamplePage />
      </TableQLProvider>
    </ErrorBoundary>
  )
}

describe('<TableQLProvider>', () => {
  beforeEach(() => {
    render(<ExampleApp />)
  })

  describe('when page is initialized', () => {
    it('header background should be blue', () => {
      expect(screen.getByText('blue')).toBeTruthy()
    })
  })

  describe('set theme', () => {
    beforeEach(() => {
      fireEvent.click(screen.getByText(changeThemeButtonText))
    })

    it('header background should be red', () => {
      expect(screen.getByText('red')).toBeTruthy()
    })
  })

  describe('update theme', () => {
    beforeEach(() => {
      fireEvent.click(screen.getByText(updateThemeButtonText))
    })

    it('header background should be green', () => {
      expect(screen.getByText('green')).toBeTruthy()
    })
  })

  describe('errors', () => {
    it('useTableQLDispatch error', () => {
      const BrokenComponent = () => {
        const context = useTableQLDispatch()

        useEffect(() => {
          context({
            // @ts-expect-error
            type: 'incorrectAction',
            theme: defaultDarkTheme,
          })
        }, [])

        return <></>
      }

      const { container } = render(
        <ErrorBoundary>
          <BrokenComponent />
        </ErrorBoundary>,
      )

      expect(getByText(container, 'Something went wrong!')).toBeTruthy()
    })

    it('useTableQLState error', () => {
      const BrokenComponent = () => {
        const context = useTableQLState()

        useEffect(() => {
          // @ts-expect-error
          context({
            type: 'incorrectAction',
            theme: { header: { background: 'blue' } },
          })
        }, [])

        return <></>
      }

      const { container } = render(
        <ErrorBoundary>
          <BrokenComponent />
        </ErrorBoundary>,
      )

      expect(getByText(container, 'Something went wrong!')).toBeTruthy()
    })

    it('tableQLReducer error', () => {
      fireEvent.click(screen.getByText(breakButtonText))
      expect(screen.getByText('Something went wrong!')).toBeTruthy()
    })
  })
})
