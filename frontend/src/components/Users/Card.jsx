import React from 'react'
import logoOne from '../../assets/img/logoOne.png'
import Skills from './skills'
import PrimaryButton from './PrimaryButton'
const Card = () => {
  return (
    <div className='p-4 font-work  w-80 mt-10 bg-offwhite rounded-md'>
        <div className="relative bg-primary h-52 w-72 rounded-lg">
            <div className="rounded-full bg-open w-20 flex justify-center text-white h-8 items-center absolute right-3  top-2">Open</div>
            <div className="flex w-full h-full justify-center items-center">
            <img src={logoOne} className='w-14' alt="" />
            <p className='text-2xl text-white'>Umurava</p>
            </div>
        
        </div>
        <div className="my-4">
            <div className='font-semibold text-lg'>
                <p>Design Dashboard for sokoFund</p>
            </div>
            <div className="">
                <p className='font-semibold my-1'>skills needed:</p>
                <div className="grid grid-cols-3 gap-3 ">
                    <Skills skill="UI/UXdesign"/>
                    <Skills skill="Userreasearch"/>
                    <Skills skill="math"/>
                    <Skills skill="math"/>
                    <Skills skill="math"/>
                    <Skills skill="math"/>

                </div>
                <p>
                <h4 className='font-semibold'>seniority Level: </h4>
                <p>(junior,intermediate,advanced)</p>
                </p>
                <div><span className='font-semibold'>timeline:</span> 15 days</div>

            </div>
            <hr className='w-full border-t border-gray-300 my-4' />
            <div className="mt-5">
                <PrimaryButton content="View challenge" styles="bg-primary rounded-lg text-white px-4 py-2"/>
            </div>
        </div>

    </div>
  )
}

export default Card