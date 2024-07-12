import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Layout from "./layout"
import NotFound from "../pages/public/NotFound"
import Home from "../pages/private/Home"
import Private from "./Private"
import Login from "../pages/public/Login"
import Layout from "../pages/layout"

const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Login />} />
            <Route element={<Private />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
