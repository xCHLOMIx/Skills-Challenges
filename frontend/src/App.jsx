import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/users/HomePage'
import AdminDashboardLayout from './layouts/admin/AdminDashboardLayout'
import UserDashboardLayout from './layouts/users/UserDashboardLayout'
import AdminSignup from './pages/admin/AdminSignup'
import AdminSignin from './pages/admin/AdminSignin'

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
          <Route path='/' exact element={<HomePage />}></Route>
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/admin/signin" element={<AdminSignin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
