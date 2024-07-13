import React from 'react'
import Router from './routes'
import { AuthProvider } from './context/auth'

const App: React.FC = () => {
  return (
    <div>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  )
}

export default App
