import { Action, State } from './types'

export const tableQLReducer = (
  state: State,
  { type, theme }: Action,
): State => {
  switch (type) {
    case 'setTheme': {
      return { theme: theme }
    }
    case 'updateTheme': {
      return { theme: { ...state.theme, ...theme } }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}
