import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex h-lvh bg-offwhite">
            <Sidebar />
            <div className="w-full">
                <Navbar />
            </div>
        </div>
    );
}

export default Dashboard;