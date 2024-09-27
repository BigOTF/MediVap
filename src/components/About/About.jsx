import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaUserDoctor } from "react-icons/fa6";
import { FaUserClock } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const About = () => {

    useEffect(() => {
        AOS.init({
          duration: 300, // Animation duration
          once: false,   // Allows animations to trigger every time the user scrolls
          offset: 50,    // Trigger animations when elements are 50px from the viewport
        });
      }, []);


  return (
    <div className='w-full  px-[30px] mt-[40px] md:px-[100px] md:mt-[80px] flex flex-col items-center justify-center gap-[30px] md:gap-[50px]'>

        <div className='flex flex-col gap-[8px] md:w-[60%]'>
            <p className='text-[#002C5B] font-bold text-[24px] leading-[30.17px] md:text-[32px] md:leading-[40.22px] text-center'>What Makes Us Different</p>
            <p className='text-[#54697E] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[30px] text-center'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost card catch-up vaccines.</p>
        </div>

        <div className='flex flex-col items-center gap-[30px] md:flex-row md:gap-[20px]'>
            <div data-aos="fade-up" data-aos-delay="300" className='w-[100%] hidden md:block opacity-0 transition-opacity duration-300'>
                <img src={'/aboutSection.png'} alt='doctor' className=''/>
            </div>

            <div className='grid md:grid-cols-2 gap-[20px] md:gap-[25px] w-[70%] md:w-[100%] space-y-8 p-4'>

                <div data-aos="fade-up" data-aos-delay="300"  className='md:flex flex-col gap-[8px] rounded-[8px] py-[32px] px-[16px] md:py-[48px] bg-[#002C5B] hidden opacity-0 transition-opacity duration-300'>
                    <div className='flex flex-col gap-[16px]'>
                        <FaUserDoctor className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#FC681D]'/>
                        <p className='text-[#FBFBFB] font-bold text-[20px] leading-[20px] md:text-[24px] md:leading-[24px]'>Qualified Doctors</p>
                    </div>

                    <div>
                        <p className='text-[#FBFBFB] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[22px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier.</p>
                    </div>
                </div>

                {/* Only displays on the mobile view */}
                <div data-aos="fade-up" data-aos-delay="300"  className='flex flex-col gap-[8px] rounded-[8px] py-[32px] px-[16px] md:py-[48px] bg-[#F6F6F6] md:hidden opacity-0 transition-opacity duration-300'>
                    <div className='flex flex-col gap-[16px]'>
                        <FaUserDoctor className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#FC681D]'/>
                        <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[24px] md:leading-[24px]'>Qualified Doctors</p>
                    </div>

                    <div>
                        <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[22px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier.</p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="600"  className='flex flex-col gap-[8px] rounded-[8px] py-[32px] px-[16px] md:py-[48px] bg-[#F6F6F6] opacity-0 transition-opacity duration-300'>
                    <div className='flex flex-col gap-[16px]'>
                        <FaUserClock className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#FC681D]'/>
                        <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[24px] md:leading-[24px]'>Always Available</p>
                    </div>

                    <div>
                        <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[22px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier.</p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="900"  className='flex flex-col gap-[8px] rounded-[8px] py-[32px] px-[16px] md:py-[48px] bg-[#F6F6F6] opacity-0 transition-opacity duration-300'>
                    <div className='flex flex-col gap-[16px]'>
                        <BsFillHandThumbsUpFill className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#FC681D]'/>
                        <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[24px] md:leading-[24px]'>Best Price</p>
                    </div>

                    <div>
                        <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[22px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier.</p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="1200"  className='flex flex-col gap-[8px] rounded-[8px] py-[32px] px-[16px] md:py-[48px] bg-[#F6F6F6] opacity-0 transition-opacity duration-300'>
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
            <div data-aos="fade-up" data-aos-delay="1500" className='w-[100%] md:hidden opacity-0 transition-opacity duration-300'>
                <img src={'/aboutSection.png'} alt='doctor' className=''/>
            </div>

        </div>
    </div>
  )
}

export default About