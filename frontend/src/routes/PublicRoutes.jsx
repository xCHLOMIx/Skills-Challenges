import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const PublicRoute = () => {
    const { userData, isLoading } = useAuth();

    if (isLoading) return <p>Loading...</p>;

    return userData ? <Navigate to="/admin/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;
