import React from 'react'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface AvatarWithUsernameProps {
  username: string
  imageUrl?: string
  hidden?: boolean
}

const User: React.FC<AvatarWithUsernameProps> = ({ username = 'User', imageUrl, hidden }) => {
  if (hidden) return null
  return (
    <Box display='flex' alignItems='center' sx={{ mx: 1 }}>
      <Avatar alt={username} src={imageUrl} />
      <Typography component='span' marginLeft={1}>
        {username}
      </Typography>
    </Box>
  )
}

export default User
