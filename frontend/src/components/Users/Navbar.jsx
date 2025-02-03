import umurava_logo from '../../assets/img/umurava_logo.png'
import PrimaryButton from './PrimaryButton'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <nav className=' h-[37.01px] my-5 flex justify-between font-work'>
            <div className="">
                <img src={umurava_logo} alt="" className='w-[125px] h-full' />
            </div>
            <div className="items-center flex">
                <ul className='flex  space-x-14 '>
                    <NavLink to='/home' className={({isActive})=> isActive ? 'text-primary font-semibold':'text-black'}>Home</NavLink>
                    <NavLink>Challeng& hackathons</NavLink>
                    <NavLink>For learning Instutions</NavLink>
                    <NavLink>About us</NavLink>
                    <NavLink>Contact us</NavLink>

                </ul>
            </div>
            <div className="flex items-center">
                <PrimaryButton content="Join the Program"/>
            </div>
        </nav>

        
    </>
  )
}

export default Navbar