import React from 'react'
import Router from './routes'
import { AuthProvider } from './context/auth'
import './styles/global.css'
import ThemeProvider from './components/layout/ThemeProvider'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { ToastProvider } from './context/toasts'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ToastContainer theme='colored' />
      <ThemeProvider>
        <ToastProvider>
          <Router />
        </ToastProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
