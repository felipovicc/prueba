export type AuthState = {
  loggedIn: boolean
  user?: string | null
  token?: string | null
}

export enum ActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export type AuthAction = {
  type: ActionType
  payload?: object | undefined | null
}

export interface AuthContextInterface {
  state: AuthState
  dispatch: React.Dispatch<AuthAction>
}
