import React from 'react'
import Router from './routes'
import { AuthProvider } from './context/auth'
import './styles/global.css'
import ThemeProvider from './components/layout/ThemeProvider'
import { ToastProvider } from './context/toasts'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ToastProvider>
          <Router />
        </ToastProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
