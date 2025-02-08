import { useEffect, useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/admin/AdminDashboard";
import DashboardNavbar from "../../components/dashboard/DashboardNavbar";
import Challenges from "../../pages/admin/AdminChallenges";
import NewChallenge from "../../components/dashboard/NewChallenge";
import ChallengeDetails from "../../pages/admin/AdminChallengeDetails";
import { useAuth } from "../../utils/AuthContext";
import NotFound from "../NotFound";
const AdminDashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { userData, isLoading } = useAuth();

    const toggleSideBar = (e) => {
        setIsOpen(true)
    }

    useEffect(() => {
        document.addEventListener('mousedown', () => {
            setIsOpen(false)
        })
    })
    if(isLoading){
        return <p>loading...</p>
    }
    return (
        <div className="flex relative h-lvh bg-offwhite overflow-hidden">
            <Sidebar isOpen={isOpen} />
            <div className="w-full">
                <DashboardNavbar toggleSideBar={toggleSideBar} />
                <div className="md:p-8 p-4 overflow-scroll h-full">
                    <Routes>
                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />
                        <Route
                            path="/challenges"
                            element={<Challenges />}
                        />
                        <Route
                            path="/challenges/:id"
                            element={<ChallengeDetails />}
                        />

                        <Route path="/newChallenge" element={<NewChallenge />} />
                        <Route path="*" element={<NotFound />} />

                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboardLayout;