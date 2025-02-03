import logo from '../../assets/img/logoOne.png'
import { TbSmartHome, TbHeadset } from "react-icons/tb";
import { HiOutlineGift } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { LuGlobe, LuLogOut } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom"

const Sidebar = ({ isOpen }) => {
    return (
        <div className={`bg-primary max-sm:absolute ${isOpen ? "max-sm:translate-x-0" : "max-sm:-translate-x-full"} h-full transition duration-300 delay-0 w-80 p-2 pt-6 flex flex-col justify-between`}>
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
                <NavLink to='/admin/logout'>
                    <div className="flex bg-none w-full p-3 gap-3 items-center justify-between rounded-[4px] cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="cursor-pointer border-2 border-white w-10 h-10 rounded-full overflow-hidden object-cover">
                                <img className="object-cover w-full h-full" src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-normal text-white text-sm">Admin</span>
                                <span className="font-normal text-white text-sm">admin@gmail.com</span>
                            </div>
                        </div>
                        <LuLogOut color='white' size={"20px"} />
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;