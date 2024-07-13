import { useNavigate, useRouteError } from 'react-router-dom'
import React from 'react'

const ErrorPage = () => {
  const error = useRouteError() as Error
  const navigate = useNavigate()

  const goHome = () => navigate('/')

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
      <p>{error.stack}</p>
      <button onClick={goHome}>Go Home</button>
    </div>
  )
}

export default ErrorPage
