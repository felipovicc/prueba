import React from 'react'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import NotFound from '../pages/public/NotFound'
import Home from '../pages/private/Home'
import Private from './Private'
import Login from '../pages/public/Login'
import Layout from '../pages/layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
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
