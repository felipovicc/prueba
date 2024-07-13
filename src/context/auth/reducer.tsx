import { useLocalStorage } from "../../hooks/useLocalStorage"
import { AuthState, AuthAction } from "./types"

const authStorage = useLocalStorage(process.env.REACT_APP_AUTH_KEY)

const Reducer = (state: AuthState, action: AuthAction): AuthState => {
  const newState = {}
  switch (action.type) {
    default:
      Object.assign(newState, state)
  }

  return authStorage.set(newState) as AuthState
}

export default Reducer
