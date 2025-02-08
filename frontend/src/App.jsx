import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/users/HomePage";
import AdminDashboardLayout from "./layouts/admin/AdminDashboardLayout";
import UserDashboardLayout from "./layouts/users/UserDashboardLayout";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminSignin from "./pages/admin/AdminSignin";
import ProtectedRoute from "./routes/ProtectedRoutes";
import PublicRoute from "./routes/PublicRoutes";
import NotFound from "./layouts/NotFound";
function App() {
  return (
    <div className="font-work">
      <BrowserRouter>
        <Routes>
        
          
          <Route element={<ProtectedRoute />}>
          <Route path="/admin/*" element={<AdminDashboardLayout />} />
            </Route>
          <Route element={<PublicRoute />}>
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/admin/signin" element={<AdminSignin />} />
          <Route path="/user/*" element={<UserDashboardLayout />} />
          <Route path="/" exact element={<HomePage />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
