import { defaultTheme } from '../shared/defaultTheme'
import { tableQLReducer } from './reducer'

describe('TableQLProvider reducer', () => {
  it('setTheme', () => {
    const theme = { primary: 'tomato' }
    expect(
      tableQLReducer({ theme: defaultTheme }, { type: 'setTheme', theme }),
    ).toEqual({ theme })
  })

  it('updateTheme', () => {
    const theme = { primary: 'tomato' }
    expect(
      tableQLReducer({ theme: defaultTheme }, { type: 'updateTheme', theme }),
    ).toEqual({ theme })
  })

  it('no theme passed', () => {
    expect(
      tableQLReducer(
        { theme: defaultTheme },
        // @ts-expect-error testing for when there is no theme passed down
        { type: 'setTheme', theme: undefined },
      ),
    ).toEqual({ theme: defaultTheme })
  })

  it('wrong action type passed', () => {
    function throwError(): void {
      tableQLReducer(
        { theme: defaultTheme },
        // @ts-expect-error testing for when there is no theme passed down
        { type: 'invalidActionType', theme: defaultTheme },
      )
    }

    expect(throwError).toThrow(
      new Error(`Unhandled action type: invalidActionType`),
    )
  })
})
