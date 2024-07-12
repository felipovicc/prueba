import { DispatchWithoutAction } from "react"

export const LOCAL_STORAGE_KEY = "AUTH_KEY"

export type AuthProps = {
  children?: React.ReactNode
}

export type AuthState = {
  loggedIn: boolean
  user?: object | null
}

export type AutgContext = [state: AuthState, disapatch: DispatchWithoutAction]

export type AuthAction = {
  type: string
  key?: string
  value?: object
}
