import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { BiInjection } from "react-icons/bi";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { BiPlusMedical } from "react-icons/bi";

const Feature = () => {

    useEffect(() => {
        AOS.init({
          duration: 300, // animation duration in ms
          once: true,    // whether animation should happen only once
        });
      }, []);

  return (
    <div className='bg-[#F6F6F6] w-full mt-[70px] py-[40px] md:mt-[80px] flex flex-col items-center gap-[30px] md:gap-[50px] px-[30px] md:px-[205px]'>

        <div className='flex flex-col gap-[8px] md:gap-[16px] md:w-[60%]'>
            <p className='text-[#002C5B] font-bold text-[24px] leading-[30.17px] md:text-[32px] md:leading-[40.22px] text-center'>Our Features</p>
            <p className='text-[#54697E] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[32px] text-center'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost card or catch-up vaccines.</p>
        </div>

        <div className='flex flex-col items-center gap-[50px]'>

            {/* Vaccine tracker */}
            <div className='grid md:grid-cols-2 items-center gap-[10px] space-y-8'>
                <div data-aos="fade-up" data-aos-delay="300" className='md:block hidden opacity-0 transition-opacity duration-300'>
                    <img src={'/feature1.png'} className='object-cover'/>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className='flex flex-col gap-[8px] md:gap-[16px] p-[8px] opacity-0 transition-opacity duration-300'>
                    <div className='flex items-center gap-[8px] p-[8px]'>
                        <div className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-[#002C5B] flex items-center justify-center'>
                            <BiInjection className='w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-[#FC681D]'/>
                        </div>
                        <p className='text-[#002C5B] font-semibold text-[20px] leading-[20px] md:text-[32px] md:leading-[32px]'>Vaccine Tracker</p>
                    </div> 

                    <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic. The Vaccine App is an all in one solution. No more lost cards, parental guilt, missed or catch-up vaccines.</p>
                </div>

                {/* Will display on the mobile view */}
                <div data-aos="fade-up" data-aos-delay="500" className='md:hidden flex items-center justify-center opacity-0 transition-opacity duration-300'>
                    <img src={'/feature1.png'} className='object-cover w-[220px]'/>
                </div>
            </div>

            {/* Medication tracker */}
            <div className='grid md:grid-cols-2 items-center gap-[10px] md:gap-[100px] space-y-8'>
                <div data-aos="fade-up" data-aos-delay="300" className='flex flex-col gap-[8px] md:gap-[16px] p-[8px] opacity-0 transition-opacity duration-300'>
                    <div className='flex items-center gap-[8px] p-[8px]'>
                        <div className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-[#002C5B] flex items-center justify-center'>
                            <BiPlusMedical  className='w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-[#FC681D]'/>
                        </div>
                        <p className='text-[#002C5B] font-semibold text-[20px] leading-[20px] md:text-[32px] md:leading-[32px]'>Medication Tracker</p>
                    </div> 

                    <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic. The Vaccine App is an all in one solution. No more lost cards, parental guilt, missed or catch-up vaccines.</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className='md:block hidden opacity-0 transition-opacity duration-300'>
                    <img src={'/feature2.png'} className='object-cover'/>
                </div>
                
                {/* Will display on the mobile view */}
                <div  data-aos="fade-up" data-aos-delay="500"className='md:hidden flex items-center justify-center opacity-0 transition-opacity duration-300'>
                    <img src={'/feature2.png'} className='object-cover w-[220px]'/>
                </div>
            </div>
        
            {/* Doc chat */}
            <div className='grid md:grid-cols-2 items-center gap-[10px]'>

                <div data-aos="fade-up" data-aos-delay="300" className='md:block hidden opacity-0 transition-opacity duration-300'>
                    <img src={'/feature3.png'} className='object-cover'/>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className='flex flex-col gap-[8px] md:gap-[16px] p-[8px] opacity-0 transition-opacity duration-300'>
                    <div className='flex items-center gap-[8px] p-[8px]'>
                        <div className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-[#002C5B] flex items-center justify-center'>
                            <IoChatbubbleEllipses className='w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-[#FC681D]'/>
                        </div>
                        <p className='text-[#002C5B] font-semibold text-[20px] leading-[20px] md:text-[32px] md:leading-[32px]'>Doc Chat</p>
                    </div> 

                    <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic. The Vaccine App is an all in one solution. No more lost cards, parental guilt, missed or catch-up vaccines.</p>
                </div>
                
                {/* Will display on the mobile view */}
                <div data-aos="fade-up" data-aos-delay="500" className='md:hidden flex items-center justify-center opacity-0 transition-opacity duration-300'>
                    <img src={'/feature3.png'} className='object-cover w-[220px]'/>
                </div>
            </div>

            <div className='bg-[#FC681D] py-[16px] px-[32px] rounded-[4px] flex items-center justify-center'>
                <Link to='/feature' className='text-[#FBFBFB] font-normal text-[18px] leading-[18px] md:text-[20px] md:leading-[20px]'>View All Features</Link>
            </div>
            
        </div>

    </div>
  )
}

export default Feature