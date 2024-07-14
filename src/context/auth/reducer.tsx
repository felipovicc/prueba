import { INITIAL_STATE } from '.'
import { setItem } from '../../hooks/useLocalStorage'
import { AuthState, AuthAction, ActionType } from './types'

const Reducer = (state: AuthState = INITIAL_STATE, action: AuthAction): AuthState => {
  let newState = state

  switch (action.type) {
    case ActionType.LOGIN:
      newState = { ...newState, ...action.payload, loggedIn: true }
      break

    case ActionType.LOGOUT:
      newState = INITIAL_STATE
      break

    default:
  }

  return setItem(process.env.REACT_APP_AUTH_KEY, newState) as AuthState
}

export default Reducer
