import React from 'react'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useAuth } from '../../context/auth'

const User: React.FC = () => {
  const { state } = useAuth()

  if (!state.loggedIn) return null

  return (
    <Box display='flex' alignItems='center' sx={{ mx: 1 }}>
      <Avatar alt={state.user || 'User'} />
      <Typography component='span' marginLeft={1} fontWeight='semibold'>
        {state.user}
      </Typography>
    </Box>
  )
}

export default User
