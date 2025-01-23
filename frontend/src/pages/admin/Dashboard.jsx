import { useEffect, useState } from "react";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";

const Dashboard = () => {
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
    <div className="flex relative h-lvh bg-offwhite">
        <Sidebar isOpen={isOpen} />
        <div className="w-full">
            <Navbar toggleSideBar={toggleSideBar} />
        </div>
    </div>
);
}

export default Dashboard;