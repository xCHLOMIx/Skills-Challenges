import { GoSearch } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = ({ toggleSideBar }) => {
    return (
        <div className="bg-white w-full p-3 flex justify-between gap-2 max-sm:pr-3 pr-7">
            <RiMenu2Line onClick={ toggleSideBar } className="hidden max-sm:block" size={"40px"} />
            <div className="bg-offwhite max-w-[600px] max-sm:mx-3 w-full flex items-center pl-2 overflow-hidden rounded-lg">
                <GoSearch size={"20px"} />
                <input className="bg-transparent py-2 pl-2 text-sm w-full outline-none" type="text" placeholder="Search here..." />
            </div>
            <div>
                <div className="flex gap-3">
                    <div className="cursor-pointer bg-gray-200 h-10 w-10 rounded-full p-[10px]">
                        <FaRegBell size={"100%"} />
                    </div>
                    <div className="cursor-pointer w-10 h-10 rounded-full overflow-hidden object-cover">
                        <img className="object-cover w-full h-full" src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;