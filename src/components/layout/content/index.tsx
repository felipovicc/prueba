import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <Container fixed>
      <Outlet />
    </Container>
  )
}

export default Content
