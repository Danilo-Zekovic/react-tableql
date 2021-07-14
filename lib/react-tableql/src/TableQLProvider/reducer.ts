import { Action, State } from './types'

export const tableQLReducer = (
  state: State,
  { type, theme }: Action,
): State => {
  if (!theme) {
    return { theme: { ...state.theme } }
  }

  switch (type) {
    case 'setTheme': {
      return { theme: { ...theme } }
    }
    // TODO this will change to update just the property passed but for now it should do the same as setTheme
    case 'updateTheme': {
      return { theme: { ...theme } }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}
