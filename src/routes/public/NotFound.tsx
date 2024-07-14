import React from 'react'
import Alert from '@mui/material/Alert'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Alert severity='error'>
      <h2>Ooooops... error 404</h2>
      <h3>
        The requested page not found. <Link to='/'>Go Home</Link>
      </h3>
    </Alert>
  )
}

export default NotFound
