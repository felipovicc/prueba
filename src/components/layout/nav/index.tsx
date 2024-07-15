import React from 'react'
import { Box, Container } from '@mui/material'
import User from '../../User'
import Menu from '../../Menu'

const Nav = () => {
  return (
    <Box sx={{ py: 2, px: 4, mb: 4 }}>
      <Container fixed>
        <Box display='flex' justifyContent='space-between'>
          <User />
          <Menu />
        </Box>
      </Container>
    </Box>
  )
}

export default Nav
