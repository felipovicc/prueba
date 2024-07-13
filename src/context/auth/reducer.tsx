import { useLocalStorage } from '../../hooks/useLocalStorage'
import { AuthState, AuthAction } from './types'

const Reducer = (state: AuthState, action: AuthAction): AuthState => {
  const authStorage = useLocalStorage(process.env.REACT_APP_AUTH_KEY)

  const newState = {}
  switch (action.type) {
    default:
      Object.assign(newState, state)
  }

  return authStorage.set(newState) as AuthState
}

export default Reducer
