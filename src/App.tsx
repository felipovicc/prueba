import React from 'react'
import Router from './routes'
import { AuthProvider } from './context/auth'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App
