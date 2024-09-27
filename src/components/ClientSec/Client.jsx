import React, { useState } from 'react'
import ClientData from '../../data/ClientData'

import { FaStar, FaInstagramSquare, FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Client = () => {
    const [startIndex, setStartIndex] = useState(0)
    const slidesToShow = 4;

    const handleNext = () => {
        return setStartIndex((prev) => (prev + 1)  % ClientData.length)
    }

    const handlePrev = () => {
        return setStartIndex((prev) => (prev - 1)  % ClientData.length)
    }

    const currentSlides = ClientData.slice(startIndex, startIndex + slidesToShow);

    if (currentSlides.length < slidesToShow) {
        currentSlides.push(...ClientData.slice(0, slidesToShow - currentSlides.length));
    }

    const DisplayClientReview = () => {
        return (
            currentSlides.map((data, index) => {
                return (
                    <div key={data.id} className={index === 0 ? 'first' : ''}>

                        <div className='flex flex-col gap-[40px] bg-[#F6F6F6]'>
                            <div className='flex flex-col gap-[8px] p-[16px]'>
                                <p className='font-normal text-[#202020] text-[18px] leading-[24px]'>{data.review}</p>
                                <div className='flex items-center gap-[2px]'>
                                    <FaStar className='text-[#FC681D] w-[16px] h-[16px]'/>
                                    <FaStar className='text-[#FC681D] w-[16px] h-[16px]'/>
                                    <FaStar className='text-[#FC681D] w-[16px] h-[16px]'/>
                                    <FaStar className='text-[#FC681D] w-[16px] h-[16px]'/>
                                    <FaStar className='text-[#FC681D] w-[16px] h-[16px]'/>
                                </div>
                            </div>

                            <div className='bg-[#002C5B]'>
                                <div className='flex flex-col gap-[8px] transform translate-y-[-20%]'>

                                    <div className='flex items-center justify-center'>
                                        <img src={data.image} alt='client image' className='w-[76px] h-[76px]'/>
                                    </div>
                                
                                    <div className='flex flex-col gap-[8px] items-center'>

                                        <p className='text-[#FBFBFB] font-bold text-[18px] leading-[24px] text-center'>{data.name}</p>

                                        <div className='flex items-center gap-[5px]'>
                                            <div className='w-[24px] h-[24px] bg-white flex items-center justify-center'>
                                                <FaFacebookF className='w-[18px] h-[18px] text-[#002C5B]'/>
                                            </div>
                                            <div className='w-[24px] h-[24px] bg-white flex items-center justify-center'>
                                                <FaTwitter className='w-[18px] h-[18px] text-[#002C5B]'/>
                                            </div>
                                            <div className='w-[24px] h-[24px] bg-white flex items-center justify-center'>
                                                <FaInstagramSquare className='w-[18px] h-[18px] text-[#002C5B]'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

  return (
    <div className='w-full px-[30px] mt-[50px] md:px-[100px] md:mt-[100px] flex flex-col items-center gap-[20px] md:gap-[50px]'>

        <div className='flex flex-col gap-[8px] md:gap-[16px] md:w-[60%]'>
            <p className='text-[#002C5B] font-bold text-[24px] leading-[30.17px] md:text-[32px] md:leading-[40.22px] text-center'>Our Happy Clients</p>
            <p className='text-[#54697E] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[30px] text-center'>Hear what our happy clients say...</p>
        </div>

        <div className='flex flex-col gap-[30px]'>
            <div className='grid md:grid-cols-4 gap-[20px]'>
                <DisplayClientReview />
            </div> 

            <div className='flex items-center justify-between'>
                <IoIosArrowBack className='text-[#54697E] w-[30px] h-[31px] cursor-pointer' onClick={() => handlePrev()}/>

                <div className='flex justify-between gap-[8px]'>
                    {ClientData.map((_, index) => (
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

export default Client