import { INITIAL_STATE } from '.'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { AuthState, AuthAction, ActionType } from './types'

const Reducer = (state: AuthState = INITIAL_STATE, action: AuthAction): AuthState => {
  const authStorage = useLocalStorage(process.env.REACT_APP_AUTH_KEY)

  let newState = state
  switch (action.type) {
    case ActionType.LOGIN:
      Object.assign(newState, action.payload)
      break

    case ActionType.LOGOUT:
      newState = INITIAL_STATE
      break

    default:
  }

  return authStorage.set(newState) as AuthState
}

export default Reducer
