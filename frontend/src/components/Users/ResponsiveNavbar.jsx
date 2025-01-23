import umurava_logo from '../../assets/img/umurava_logo.png'
import PrimaryButton from './PrimaryButton'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <nav className=' h-[37.01px] my-5 flex-col  font-work'>
            <div className="">
                <img src={umurava_logo} alt="" className='w-[125px] h-full' />
            </div>
            <div className="">
                <ul className='flex-row'>
                   <li> <NavLink to='/home' className={({isActive})=> isActive ? 'text-primary font-semibold':'text-black'}>Home</NavLink></li>
                    <li><NavLink>Challeng& hackathons</NavLink></li>
                    <li><NavLink>For learning Instutions</NavLink></li>
                    <li><NavLink>About us</NavLink></li>
                    <li><NavLink>Contact us</NavLink></li>

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