import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaLongArrowAltRight } from "react-icons/fa";

const Blog = () => {
    useEffect(() => {
        AOS.init({
          duration: 300, // animation duration in ms
          once: false,   // Allows animations to trigger every time the user scrolls
          offset: 50,    // Trigger animations when elements are 50px from the viewport
        });
    }, []);

  return (
    <div className='w-full flex flex-col items-center mt-[60px] gap-[30px] md:gap-[60px] px-[30px] md:px-[100px] md:mt-[100px]'>
        <div>
            <p className='text-[#002C5B] font-bold text-[24px] leading-[30.17px] md:text-[32px] md:leading-[40.22px] text-center'>News & Blogs</p>
        </div>

        <div className='grid gap-[10px] md:grid-cols-3 md:gap-[20px] space-y-8'>

            <div data-aos="fade-up" data-aos-delay="300" className='flex flex-col opacity-0 transition-opacity duration-300'>
                <div>
                    <img src={'/blog1.png'} className=''/>
                </div>

                <div className='bg-[#F6F6F6] flex flex-col gap-[16px] p-[16px] rounded-br-[50px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <p className='font-bold text-[#002C5B] text-[20px] leading-[30px] md:text-[24px] md:leading-[30px]'>Preventing Dehydration in Children</p>
                        <p className='text-[#54697E] font-normal text-[16px] leading-[16px] md:text-[18px] md:leading-[18px]'>October 19, 2023</p>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt.</p>
                        <div className='flex items-center gap-[8px]'>
                            <a className='text-[#002C5B] font-semibold text-[18px] leading-[30px] md:text-[20px] cursor-pointer'>Learn More</a>
                            <FaLongArrowAltRight className='text-[#FC681D] w-[18px]'/>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="500" className='flex flex-col opacity-0 transition-opacity duration-300'>
                <div>
                    <img src={'/blog2.png'} className=''/>
                </div>

                <div className='bg-[#F6F6F6] flex flex-col gap-[16px] p-[16px] rounded-br-[50px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <p className='font-bold text-[#002C5B] text-[20px] leading-[30px] md:text-[24px] md:leading-[30px]'>Mother and Child Healthcare Tips</p>
                        <p className='text-[#54697E] font-normal text-[16px] leading-[16px] md:text-[18px] md:leading-[18px]'>October 19, 2023</p>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt.</p>
                        <div className='flex items-center gap-[8px]'>
                            <a className='text-[#002C5B] font-semibold text-[18px] leading-[30px] md:text-[20px] cursor-pointer'>Learn More</a>
                            <FaLongArrowAltRight className='text-[#FC681D] w-[18px]'/>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="800" className='flex flex-col opacity-0 transition-opacity duration-300'>
                <div>
                    <img src={'/blog3.png'} className=''/>
                </div>

                <div className='bg-[#F6F6F6] flex flex-col gap-[16px] p-[16px] rounded-br-[50px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <p className='font-bold text-[#002C5B] text-[20px] leading-[30px] md:text-[24px] md:leading-[30px]'>Children Vaccine Safety Measures</p>
                        <p className='text-[#54697E] font-normal text-[16px] leading-[16px] md:text-[18px] md:leading-[18px]'>October 19, 2023</p>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt.</p>
                        <div className='flex items-center gap-[8px]'>
                            <a className='text-[#002C5B] font-semibold text-[18px] leading-[30px] md:text-[20px] cursor-pointer'>Learn More</a>
                            <FaLongArrowAltRight className='text-[#FC681D] w-[18px]'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Blog