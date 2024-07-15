import React from 'react'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import NotFound from './public/NotFound'
import Home from './private/Home'
import Private from './private'
import Login from './public/Login'
import Layout from '../components/layout'
import ErrorPage from '../components/ErrorBoundary'
import Users from './private/Users'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Login />} />
      <Route element={<Private />}>
        <Route index path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

const Router: React.FC = () => {
  return <RouterProvider router={router} />
}

export default Router
