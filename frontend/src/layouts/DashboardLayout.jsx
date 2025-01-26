import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import Challenges from "../pages/admin/Challenges";

const DashboardLayout = () => {
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
                <div className="p-8 overflow-scroll h-full">
                    <Routes>
                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />
                        <Route
                            path="/challenges"
                            element={<Challenges />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;