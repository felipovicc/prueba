import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/auth"

const Private: React.FC = () => {
  const {
    state: { user },
  } = useAuth()

  if (!user.token) return <Navigate to="/login" />
  return <Outlet />
}

export default Private
