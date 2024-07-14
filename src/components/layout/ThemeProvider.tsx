import { ThemeProvider, createTheme } from '@mui/material'
import React from 'react'

const theme = createTheme()

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Provider
