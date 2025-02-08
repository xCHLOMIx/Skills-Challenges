import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const ProtectedRoute = () => {
    const { userData, isLoading } = useAuth();

    if (isLoading) return <p>Loading...</p>;

    return userData ? <Outlet /> : <Navigate to="admin/signin" replace />;
};

export default ProtectedRoute;
