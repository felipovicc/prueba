import React, { useReducer } from "react"
import { useContext, createContext } from "react"
import { AuthAction, AuthProps, AuthState } from "./constants"

const Context = createContext<AuthState>({})

const AuthReducer = (state = {}, action: AuthAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export const AuthProvider: React.FC = ({ children }: AuthProps) => {
  const [state, dispatch] = useReducer(AuthReducer, {})
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

export const useAuth = () => {
  const [state, dispatch] = useContext(Context)

  const actions = {}

  return { state, dispatch, actions }
}
