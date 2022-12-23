import { Action, State } from './types'

export const tableReducer = (
  state: State,
  { type, payload }: Action,
): State => {
  // if (!theme) {
  //   return { theme: { ...state.theme } }
  // }

  switch (type) {
    case 'setTheme': {
      if (!payload.theme) {
        // TODO consider maybe throwing error
        // throw new Error(`Theme not passed.`)
        return { ...state }
      }
      return { ...state, theme: { ...payload.theme } }
    }
    case 'setData': {
      return { ...state, data: [...payload.data] }
    }

    case 'setDataKeys': {
      return { ...state, dataKeys: [...payload.dataKeys] }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}
