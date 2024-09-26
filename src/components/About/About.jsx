import React from 'react'

import { FaUserDoctor } from "react-icons/fa6";
import { FaUserClock } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const About = () => {
  return (
    <div className='w-full  px-[30px] mt-[40px] md:px-[100px] md:mt-[80px] flex flex-col items-center justify-center gap-[30px] md:gap-[50px]'>

        <div className='flex flex-col gap-[8px] md:w-[60%]'>
            <p className='text-[#002C5B] font-bold text-[24px] leading-[30.17px] md:text-[32px] md:leading-[40.22px] text-center'>What Makes Us Different</p>
            <p className='text-[#54697E] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[30px] text-center'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost card catch-up vaccines.</p>
        </div>

        <div className='flex flex-col items-center gap-[30px] md:flex-row md:gap-[100px]'>
            <div className='w-[100%] hidden md:block'>
                <img src={'/aboutSection.png'} alt='doctor' className=''/>
            </div>

            <div className='grid md:grid-cols-2 gap-[20px] place-content-center items-center w-[70%] md:w-[100%]'>

                <div className='md:flex flex-col gap-[8px] rounded-[8px] py-[32px] px-[16px] md:py-[48px] bg-[#002C5B] hidden'>
                    <div className='flex flex-col gap-[16px]'>
                        <FaUserDoctor className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#FC681D]'/>
                        <p className='text-[#FBFBFB] font-bold text-[20px] leading-[20px] md:text-[24px] md:leading-[24px]'>Qualified Doctors</p>
                    </div>

                    <div>
                        <p className='text-[#FBFBFB] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[22px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier.</p>
                    </div>
                </div>

                {/* Only displays on the mobile view */}
                <div className='flex flex-col gap-[8px] rounded-[8px] py-[32px] px-[16px] md:py-[48px] bg-[#F6F6F6] md:hidden'>
                    <div className='flex flex-col gap-[16px]'>
                        <FaUserDoctor className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#FC681D]'/>
                        <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[24px] md:leading-[24px]'>Qualified Doctors</p>
                    </div>

                    <div>
                        <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[22px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-[8px] rounded-[8px] py-[32px] px-[16px] md:py-[48px] bg-[#F6F6F6]'>
                    <div className='flex flex-col gap-[16px]'>
                        <FaUserClock className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#FC681D]'/>
                        <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[24px] md:leading-[24px]'>Always Available</p>
                    </div>

                    <div>
                        <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[22px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-[8px] rounded-[8px] py-[32px] px-[16px] md:py-[48px] bg-[#F6F6F6]'>
                    <div className='flex flex-col gap-[16px]'>
                        <BsFillHandThumbsUpFill className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#FC681D]'/>
                        <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[24px] md:leading-[24px]'>Best Price</p>
                    </div>

                    <div>
                        <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[22px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-[8px] rounded-[8px] py-[32px] px-[16px] md:py-[48px] bg-[#F6F6F6]'>
                    <div className='flex flex-col gap-[16px]'>
                        <FaAward className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#FC681D]'/>
                        <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[24px] md:leading-[24px]'>Center of Excellence</p>
                    </div>

                    <div>
                        <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[22px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier.</p>
                    </div>
                </div>

            </div>

            {/* display on the mobile view */}
            <div className='w-[100%] md:hidden'>
                <img src={'/aboutSection.png'} alt='doctor' className=''/>
            </div>

        </div>
    </div>
  )
}

export default About