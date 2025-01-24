import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardLayout from './layouts/DashboardLayout'

function App() {
  return (
    <div className="font-work">
      <BrowserRouter>
        <Routes>
          <Route
            path='/admin/*'
            element={<DashboardLayout />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
