import { Action, State } from './types'

export const tableReducer = (state: State, { type, theme }: Action): State => {
  if (!theme) {
    return { theme: { ...state.theme } }
  }

  switch (type) {
    case 'setTheme': {
      return { theme: { ...theme } }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}
