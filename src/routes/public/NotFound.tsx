import React from 'react'
import Alert from '@mui/material/Alert'
import HomeButton from '../../components/HomeButton'

const NotFound = () => {
  return (
    <Alert severity='error'>
      <h2>Ooooops... error 404</h2>
      <h3>The requested page not found.</h3>
      <HomeButton color='error' />
    </Alert>
  )
}

export default NotFound
