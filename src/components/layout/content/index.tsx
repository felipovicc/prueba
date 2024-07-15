import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <Box sx={{ flexGrow: 1 }} display='flex' justifyContent='center' alignItems='flex-start'>
      <Outlet />
    </Box>
  )
}

export default Content
