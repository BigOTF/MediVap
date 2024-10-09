import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import DoctorData from '../../data/DoctorData'

const DoctorsRole = () => {

    useEffect(() => {
        AOS.init({
          duration: 300, // animation duration in ms
          once: true,    // whether animation should happen only once
        });
    }, []);

    const DisplayDoctorRole = () => {
        return (
            DoctorData.map((data) => {
                return (
                    <div key={data.id} className='bg-[#FBFBFB] rounded-t-[8px] rounded-b-[4px] border-[0.5px] border-[#54697E33] flex flex-col gap-[8px]'>
                        <div>
                            <img src={data.image} alt='Doctor image'/>
                        </div>

                        <div className='pt-[8px] pr-[8px] md:pr-[16px] pb-[24px] pl-[16px] flex flex-col gap-[16px]'>
                            <p className='text-[#002C5B] font-semibold text-[24px] leading-[24px] md:text-[32px] md:leading-[32px]'>{data.role}</p>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>{data.description}</p>
                        </div>
                    </div>
                )
            })
        )
    }

  return (
    <div className='w-full px-[30px] md:px-[100px] mt-[50px] md:mt-[80px'>
        <div data-aos="fade-up" data-aos-delay="400" className='grid md:grid-cols-3 gap-[24px] opacity-0 transition-opacity duration-300'>
            <DisplayDoctorRole />
        </div>
    </div>
  )
}

export default DoctorsRole