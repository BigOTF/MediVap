import React, { useState } from 'react'
import UserData from '../../data/UserData';

import { FaStar, FaInstagramSquare, FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const UserStory = () => {
    const [startIndex, setStartIndex] = useState(0)
    const slidesToShow = 1;

    const handleNext = () => {
        return setStartIndex((prev) => (prev + 1)  % UserData.length)
    }

    const handlePrev = () => {
        return setStartIndex((prev) => (prev - 1)  % UserData.length)
    }

    const currentSlides = UserData.slice(startIndex, startIndex + slidesToShow);

    if (currentSlides.length < slidesToShow) {
        currentSlides.push(...UserData.slice(0, slidesToShow - currentSlides.length));
    }

    const DisplayUserStory = () => {
        return (
            currentSlides.map((data, index) => {
                return (
                    <div key={data.id} className={index === 0 ? 'first' : ''}>

                        <div className='flex flex-col md:flex-row'>
                           
                           {/* This will display on the larger screen */}
                            <div className='hidden md:block'>
                                <img src={data.image} className='h-full object-cover'/>
                            </div>

                            <div className='bg-[#FBFBFB] border-[0.5px] border-[#54697E33] p-[24px] md:py-[112px] md:px-[24px] flex flex-col gap-[16px] md:gap-[24px]'>
                                <p className='font-bold text-[24px] leading-[24px] md:text-[32px] md:leading-[32px] text-[#002C5B]'>{data.user}</p>
                                <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>{data.story}</p>
                            </div>

                            {/* This will display on the mobile screen */}
                            <div className='md:hidden'>
                                <img src={data.image} className='h-full object-cover'/>
                            </div>

                        </div>
                    </div>
                )
            })
        )
    }

  return (
    <div className='w-full px-[30px] py-[50px] md:py-[100px] md:px-[100px]'>

        <div className='flex flex-col gap-[30px]'>
            <div className=''>
                <DisplayUserStory />
            </div> 

            <div className='flex items-center justify-between'>
                <IoIosArrowBack className='text-[#54697E] w-[30px] h-[31px] cursor-pointer' onClick={() => handlePrev()}/>

                <div className='flex justify-between gap-[8px]'>
                    {UserData.map((_, index) => (
                        <div className={index === startIndex ? 'w-[10px] h-[10px] rounded-[50%] bg-[#202020]' : 'w-[10px] h-[10px] rounded-[50%] bg-[#54697E]'} key={index}>
                
                        </div>
                    ))}
                </div>

                <IoIosArrowForward className='text-[#54697E] w-[30px] h-[31px] cursor-pointer' onClick={() => handleNext()}/>
            </div>
        </div>

     
    </div>
  )
}

export default UserStory