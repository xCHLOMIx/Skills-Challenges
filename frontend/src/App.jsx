import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/admin/Dashboard';
import HomePage from './pages/users/HomePage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Dashboard />}
        />
        <Route path='/home' exact element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
