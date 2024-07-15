import React from 'react'
import Nav from './nav'
import Content from './content'
import Footer from './footer'
import { Box } from '@mui/material'

const Layout: React.FC = () => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='space-between' height='100vh'>
      <Nav />
      <Content />
      <Footer />
    </Box>
  )
}

export default Layout
