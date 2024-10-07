import React, { useState } from 'react'
import { IoIosMail } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";

const NewsLetter = () => {
    const [email, setEmail] = useState('');

  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-center gap-[14px] md:gap-[24px] mt-[50px] md:mt-[80px]'>
        <div className='flex flex-col gap-[8px]'> 
            <p className='text-[#002C5B] text-[16px] leading-[20.11px] md:text-[18px] md:leading-[22.63px] text-center md:text-start'>Newsletter</p>
            <p className='text-[#202020] font-bold text-[20px] leading-[32px] md:text-[32px] md:leading-[40px] text-center md:text-start'>Subscribe to Get More Update</p>
        </div>

        <div className='bg-[#002C5B] rounded-[8px] py-[12px] px-[10px] flex items-center gap-[24px]'>
            <div className='flex items-center gap-[10px]'>
                <IoIosMail className='w-[18px] h-[18px] text-[#FBFBFB]'/>

                <input className='bg-inherit focus:outline-none text-[18px] md:text-[14px] leading-[24px] text-[#FBFBFB]'
                    type='email'
                    placeholder='Enter Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='bg-[#F6F6F6] rounded-[8px] py-[4px] px-[12px] flex items-center justify-center'>
                <FaLocationArrow className='text-[#FC681D] w-[21.99px] h-[22.5px]'/>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter