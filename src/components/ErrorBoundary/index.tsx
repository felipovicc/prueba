import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Alert, Container } from '@mui/material'
import HomeButton from '../HomeButton'

const ErrorPage = () => {
  const error = useRouteError() as Error

  return (
    <Container fixed sx={{ my: 8 }}>
      <Alert severity='error'>
        <h1>Oops! Something went wrong...</h1>
        <h2>Sorry, an unexpected error has occurred. Please get in touch with IT team with the info below.</h2>
        <pre>
          <p>
            <strong>Error: {error.message}</strong>
          </p>
          <i>{error.stack}</i>
        </pre>
        <HomeButton color='error' />
      </Alert>
    </Container>
  )
}

export default ErrorPage
