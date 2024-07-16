import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import { Box, Button, ButtonOwnProps } from '@mui/material'

const HomeButton = ({ color, ...props }: { color: ButtonOwnProps['color'] }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button variant='outlined' component={Link} to='/' color={color} {...props}>
        <HomeIcon sx={{ mr: 1 }} />
        Go Home
      </Button>
    </Box>
  )
}

export default HomeButton
