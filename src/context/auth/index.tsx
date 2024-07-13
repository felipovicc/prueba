import React, { useReducer, useContext, createContext } from 'react'
import { AuthState, AuthContextInterface, ActionType } from './types'
import AuthReducer from './reducer'

const INITIAL_STATE: AuthState = { loggedIn: false, user: null }

export const AuthContext = createContext<AuthContextInterface>({
  state: INITIAL_STATE,
  dispatch: () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext)

  const actions = {
    login: (payload: object) => dispatch({ type: ActionType.LOGIN, payload }),
    logout: () => dispatch({ type: ActionType.LOGOUT }),
  }

  return { state, dispatch, actions }
}
