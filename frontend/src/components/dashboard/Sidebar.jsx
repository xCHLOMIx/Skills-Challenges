import logo from '../../assets/img/logoOne.png'
import { TbSmartHome, TbHeadset } from "react-icons/tb";
import { HiOutlineGift } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { LuGlobe, LuLogOut } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom"
import {useAuth}  from "../../utils/AuthContext";
const Sidebar = ({ isOpen }) => {
    const { userData,logout } = useAuth();
    const handleLogout = () => {
        logout()
    }
    return (
        <div className={`bg-primary max-sm:absolute ${isOpen ? "max-sm:translate-x-0" : "max-sm:-translate-x-full"} h-full transition duration-300 delay-0 w-80 p-2 pt-6 flex flex-col justify-between`}>
            <div className="gap-1 flex flex-col">
                <div className="flex w-full p-3">
                    <img className="w-10" src={logo} alt="" />
                </div>
                <NavLink to="/admin/dashboard">
        {({ isActive }) => (
          <div
            className={`mt-2 flex w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer ${
              isActive ? 'bg-white' : 'bg-transparent '
            }`}
          >
            
            <TbSmartHome size="20px" color={isActive ? '#2B71F0' : 'white'} />
            <span className="font-medium text-sm" style={{ color: isActive ? '#2B71F0' : 'white' }}>
              Dashboard
            </span>
          </div>
        )}
      </NavLink>

      {/* Challenges & Hackathons Link */}
      <NavLink to="/admin/challenges">
        {({ isActive }) => (
          <div
            className={`flex w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer ${
              isActive ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <CgFileDocument
              size="20px"
              color={isActive ? '#2B71F0' : 'white'}
            />
            <span
              className="font-normal text-sm"
              style={{ color: isActive ? '#2B71F0' : 'white' }}
            >
              Challenges & Hackathons
            </span>
          </div>
        )}
      </NavLink>

      {/* Community Link */}
      <NavLink to="/admin/community">
        {({ isActive }) => (
          <div
            className={`flex w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer ${
              isActive ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <LuGlobe size="20px" color={isActive ? '#2B71F0' : 'white'} />
            <span
              className="font-normal text-sm"
              style={{ color: isActive ? '#2B71F0' : 'white' }}
            >
              Community
            </span>
          </div>
        )}
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
                <button onClick={handleLogout} className="flex w-full p-3 gap-3 items-center justify-between rounded-[4px] cursor-pointer">
                    <div className="flex bg-none w-full p-3 gap-3 items-center justify-between rounded-[4px] cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="cursor-pointer border-2 border-white w-10 h-10 rounded-full overflow-hidden object-cover">
                                <img className="object-cover w-full h-full" src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-normal text-white text-sm">{userData.profile.name}</span>
                                <span className="font-normal text-white text-sm">{userData.profile.email}</span>
                            </div>
                        </div>
                        <LuLogOut color='white' size={"20px"} />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;