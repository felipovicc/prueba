import React from 'react'
import Router from './routes'
import { AuthProvider } from './context/auth'
import './styles/global.css'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App
