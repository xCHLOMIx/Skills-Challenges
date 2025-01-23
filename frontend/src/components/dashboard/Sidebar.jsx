import logo from '../../assets/img/logoOne.png'
import { TbSmartHome, TbHeadset } from "react-icons/tb";
import { HiOutlineGift } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { LuGlobe } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";

const Sidebar = () => {
    return (
        <div className="bg-blue-500 h-full w-80 p-2 pt-8 flex flex-col justify-between">
            <div className="gap-1 flex flex-col">
                <div className="flex w-full p-3">
                    <img className="w-10" src={logo} alt="" />
                </div>
                <div className="mt-2 flex bg-white w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer">
                    <TbSmartHome size={"20px"} color='#2B71F0' />
                    <span className="font-medium text-primary text-sm">Dashboard</span>
                </div>
                <div className="flex bg-none w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer">
                    <CgFileDocument size={"20px"} color="white" />
                    <span className="font-normal text-white text-sm">Challenges & Hackathons</span>
                </div>
                <div className="flex bg-none w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer">
                    <LuGlobe size={"20px"} color="white" />
                    <span className="font-normal text-white text-sm">Community</span>
                </div>
            </div>
            <div>
                <div className="flex bg-none w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer">
                    <SlSettings size={"20px"} color="white" />
                    <span className="font-normal text-white text-sm">Settings</span>
                </div>
                <div className="flex bg-none w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer">
                    <TbHeadset size={"20px"} color="white" />
                    <span className="font-normal text-white text-sm">Help Center</span>
                </div>
                <div className="flex bg-none w-full p-3 gap-3 items-center rounded-[4px] cursor-pointer">
                    <HiOutlineGift size={"20px"} color="white" />
                    <span className="font-normal text-white text-sm">Refer family & friends</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;