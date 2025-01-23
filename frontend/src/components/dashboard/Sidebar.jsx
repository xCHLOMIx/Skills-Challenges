import logo from '../../assets/img/logoOne.png'
import { TbSmartHome, TbHeadset } from "react-icons/tb";
import { HiOutlineGift } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { LuGlobe } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom"

const Sidebar = ({ isOpen }) => {
    return (
        <div className={`bg-primary max-sm:absolute ${isOpen ? "max-sm:translate-x-0" : "max-sm:-translate-x-full"} h-full transition duration-300 w-80 p-2 pt-8 flex flex-col justify-between`}>
            <div className="gap-1 flex flex-col">
                <div className="flex w-full p-3">
                    <img className="w-10" src={logo} alt="" />
                </div>
                <NavLink to='/admin/dashboard'>
                    <div className="mt-2 flex bg-white w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer">
                        <TbSmartHome size={"20px"} color='#2B71F0' />
                        <span className="font-medium text-[#2B71F0] text-sm">Dashboard</span>
                    </div>
                </NavLink>
                <NavLink to='/admin/challenges'>
                    <div className="flex bg-none w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer">
                        <CgFileDocument size={"20px"} color="white" />
                        <span className="font-normal text-white text-sm">Challenges & Hackathons</span>
                    </div>
                </NavLink>
                <NavLink to='/admin/community'>
                    <div className="flex bg-none w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer">
                        <LuGlobe size={"20px"} color="white" />
                        <span className="font-normal text-white text-sm">Community</span>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to='/admin/dashboard'>
                    <div className="flex bg-none w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer">
                        <SlSettings size={"20px"} color="white" />
                        <span className="font-normal text-white text-sm">Settings</span>
                    </div>
                </NavLink>
                <NavLink to='/admin/dashboard'>
                    <div className="flex bg-none w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer">
                        <TbHeadset size={"20px"} color="white" />
                        <span className="font-normal text-white text-sm">Help Center</span>
                    </div>
                </NavLink>
                <NavLink to='/admin/dashboard'>
                    <div className="flex bg-none w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer">
                        <HiOutlineGift size={"20px"} color="white" />
                        <span className="font-normal text-white text-sm">Refer family & friends</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;