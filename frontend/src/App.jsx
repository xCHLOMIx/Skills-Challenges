import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardLayout from './layouts/DashboardLayout'
import HomePage from './pages/users/HomePage'
import AuthLayout from './layouts/AuthLayout'
import LoginAuth from './layouts/LoginAuth'
function App() {
  return (
    <div className="font-work">
      <BrowserRouter>
        <Routes>
          <Route
            path='/admin/*'
            element={<DashboardLayout />}
          />
            <Route path='/home' exact element={<HomePage />}></Route>
          <Route path="/signup" element={<AuthLayout></AuthLayout>}/>
          <Route path="/signin" element={<LoginAuth></LoginAuth>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
