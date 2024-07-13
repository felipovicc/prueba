export type AuthState = {
  loggedIn: boolean
  user?: UserType | undefined | null
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

export type UserType = {
  id: number
  token: string
  name: string
  year: number
  color: string
  pantone_value: string
}
