import React from 'react'
import logoOne from '../../assets/img/logoOne.png'
import PrimaryButton from './PrimaryButton'
import { IoEyeOutline } from "react-icons/io5";

const Card = () => {
    return (
        <div className='py-4 font-work border-slate-light bg-white border-[1px] rounded-2xl'>
            <div className="flex flex-col gap-2 px-4">
                <div className="relative bg-primary h-48 w-full rounded-lg">
                    <div className="p-2 px-[0.6rem]">
                        <div className="bg-open rounded-md w-max justify-self-end font-medium text-white text-sm px-3 py-1">
                            <span>Open</span>
                        </div>
                    </div>
                    <div className="flex w-full h-full justify-center">
                        <img src={logoOne} className='w-auto  h-14 mt-8' alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className='font-semibold text-base'>
                        <span>Design a Dashboard for SokoFund, Fintech Product</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className='font-semibold text-xs'>Skills needed:</span>
                        <div className="">
                            <div>
                                <span className="text-primary text-xs font-medium border-[1px] border-primary p-1 rounded-full px-2">UI/UX Design</span>
                            </div>
                        </div>
                        <div className="text-xs">
                            <span className='font-semibold'>Seniority Level: </span>
                            <span>(Junior, Intermediate, Advanced)</span>
                        </div>
                        <div className="text-xs">
                            <span className='font-semibold'>Timeline:</span>
                            <span> 15 Days</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 pt-4 border-t-[1px] mt-4">
                <PrimaryButton content="View challenge" />
            </div>
        </div>
    )
}

export default Card