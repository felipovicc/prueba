import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/auth'

const Private: React.FC = () => {
  const {
    state: { loggedIn, user },
  } = useAuth()

  if (!loggedIn || !user?.token) return <Navigate to='/login' />
  return <Outlet />
}

export default Private
