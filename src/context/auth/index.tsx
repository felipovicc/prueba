import React, { useReducer, useContext, createContext } from 'react'
import { AuthState, AuthContextInterface, ActionType, AuthAction } from './types'
import AuthReducer from './reducer'
import useLocalStorage from '../../hooks/useLocalStorage'

export const INITIAL_STATE: AuthState = { loggedIn: false, user: null }

export const AuthContext = createContext<AuthContextInterface>({
  state: INITIAL_STATE,
  dispatch: () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { get } = useLocalStorage(process.env.REACT_APP_AUTH_KEY)
  const storage = get()

  const [state, dispatch] = useReducer(AuthReducer, storage || INITIAL_STATE)

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext)

  const actions = {
    login: (payload: AuthAction['payload']) => dispatch({ type: ActionType.LOGIN, payload }),
    logout: () => dispatch({ type: ActionType.LOGOUT }),
  }

  return { state, dispatch, actions }
}
