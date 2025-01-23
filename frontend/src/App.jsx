import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/admin/Dashboard'

function App() {
  return (
    <div className="font-work">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Dashboard />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
