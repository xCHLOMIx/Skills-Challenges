import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/users/HomePage'
import AdminDashboardLayout from './layouts/admin/AdminDashboardLayout'
import UserDashboardLayout from './layouts/users/UserDashboardLayout'

function App() {
  return (
    <div className="font-work">
      <BrowserRouter>
        <Routes>
          <Route
            path='/admin/*'
            element={<AdminDashboardLayout />}
          />
          <Route
            path='/user/*'
            element={<UserDashboardLayout />}
          />
            <Route path='/home' exact element={<HomePage />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
