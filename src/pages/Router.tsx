import React from 'react'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import NotFound from './public/NotFound'
import Home from './private/Home'
import Private from './private'
import Login from './public/Login'
import Layout from '../components/layout'
import ErrorPage from '../components/ErrorBoundary'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Login />} />
      <Route element={<Private />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

const Routes: React.FC = () => {
  return <RouterProvider router={router} />
}

export default Routes
