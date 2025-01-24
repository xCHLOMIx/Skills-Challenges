import umurava_logo from '../../assets/img/umurava_logo.png'
import PrimaryButton from './PrimaryButton'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <nav className='w-72 h-[37.01px] my-5 flex-col  font-work'>
            <div className="flex justify-end">
                <img src={umurava_logo} alt="" className='w-[125px] h-full' />
            </div>
            <div className="">
                <ul className='flex-row  space-y-4 my-4'>
                   <li className='w-full rounded-sm bg-primary px-5 py-3  text-white'> <NavLink to='/home' className={({isActive})=> isActive ? 'text-white bg-primary font-semibold':'text-black'}>Home</NavLink></li>
                    <li className='w-full rounded-sm  px-5 py-3 '><NavLink>Challeng& hackathons</NavLink></li>
                    <li className='w-full rounded-sm  px-5 py-3 '><NavLink>For learning Instutions</NavLink></li>
                    <li className='w-full rounded-sm  px-5 py-3 '><NavLink>About us</NavLink></li>
                    <li className='w-full rounded-sm  px-5 py-3 '><NavLink>Contact us</NavLink></li>

                </ul>
            </div>
            <hr />
            <div className="flex items-center mt-5">
                <PrimaryButton content="Join the Program" styles="w-full py-3 px-6 rounded-[6px] bg-secondary text-white"/>
            </div>
        </nav>

        
    </>
  )
}

export default Navbar