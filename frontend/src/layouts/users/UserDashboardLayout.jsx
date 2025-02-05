import { useEffect, useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { Route, Routes } from "react-router-dom";
import DashboardNavbar from "../../components/dashboard/DashboardNavbar";
import UserChallengeDetails from "../../pages/users/UserChallengeDetails";
import UserChallenges from "../../pages/users/UserChallenges";
import UserDashboard from "../../pages/users/UserDashboard";

const UserDashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSideBar = (e) => {
        setIsOpen(true)
    }

    useEffect(() => {
        document.addEventListener('mousedown', () => {
            setIsOpen(false)
        })
    })
    return (
        <div className="flex relative h-lvh bg-offwhite overflow-hidden">
            <Sidebar isOpen={isOpen} />
            <div className="w-full">
                <DashboardNavbar toggleSideBar={toggleSideBar} />
                <div className="md:p-8 p-4 overflow-scroll h-full">
                    <Routes>
                        <Route
                            path="/dashboard"
                            element={<UserDashboard />}
                        />
                        <Route
                            path="/challenges"
                            element={<UserChallenges />}
                        />
                        <Route
                            path="/challenges/:id"
                            element={<UserChallengeDetails />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default UserDashboardLayout;