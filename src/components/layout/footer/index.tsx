import { Box, Container } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ mx: 0, mt: 8, py: 4, px: 8, backgroundColor: 'primary.main', color: 'white' }}>
      <Container fixed>
        <Box display='flex' justifyContent='center' alignItems='center'>
          FOOTER
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
