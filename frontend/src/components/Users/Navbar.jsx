import logo from '../../assets/img/logoTwo.png'
import { NavLink } from 'react-router-dom'
import SecondaryButton from './SecondaryButton'
const Navbar = () => {
    return (
        <>
            <nav className='py-6 px-24 flex justify-between font-work'>
                <div className="">
                    <img src={logo} alt="" className='w-[125px]' />
                </div>
                <div className="items-center flex">
                    <ul className='flex gap-8'>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}>
                            <span className="text-sm font-medium">Home</span>
                        </NavLink>
                        <NavLink>
                            <span className="text-sm font-medium text-black-blue">Challenge & hackathons</span>
                        </NavLink>
                        <NavLink>
                            <span className="text-sm font-medium text-black-blue">For learning Instutions</span>
                        </NavLink>
                        <NavLink>
                            <span className="text-sm font-medium text-black-blue">About us</span>
                        </NavLink>
                        <NavLink>
                            <span className="text-sm font-medium text-black-blue">Contact us</span>
                        </NavLink>

                    </ul>
                </div>
                <div className="flex items-center">
                    <SecondaryButton styles="bg-[#041738] text-white font-semibold text-sm px-5 py-3 border-none" content="Join the Program" />
                </div>
            </nav>


        </>
    )
}

export default Navbar