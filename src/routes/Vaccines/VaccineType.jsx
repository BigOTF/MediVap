import React, { useEffect } from 'react'
import { FaCheck } from "react-icons/fa6";

import AOS from 'aos';
import 'aos/dist/aos.css';

const VaccineType = () => {

    useEffect(() => {
        AOS.init({
          duration: 300, // animation duration in ms
          once: true,    // whether animation should happen only once
        });
      }, []);

  return (
    <div className='w-full px-[30px] mt-[50px] md:px-[100px] md:mt-[100px] flex flex-col gap-[50px] md:gap-[80px]'>

        {/* Child Vaccine */}
        <div className='grid gap-[20px] md:grid-cols-2 md:items-center md:gap-[106px]'>

            {/* This will display on larger screen */}
            <div  data-aos="fade-up" data-aos-delay="300" className='opacity-0 transition-opacity duration-300 hidden md:block'>
                <img src='/childVaccine.png' className='object-cover'/>
            </div>

            <div  data-aos="fade-up" data-aos-delay="400"  className='flex flex-col gap-[24px] md:gap-[32px] p-[8px] opacity-0 transition-opacity duration-300'>
                <div className='flex flex-col gap-[16px] md:gap-[24px]'>
                    <p className='text-[#002C5B] font-bold text-[24px] leading-[24px] md:text-[32px] md:leading-[32px]'>Child Vaccine <span className='font-normal'>(Birth-6yrs)</span></p>
                    <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines.</p>
                </div>

                <div className='flex gap-[14px] md:gap-[20px]'>
                    <ul className='flex flex-col gap-[16px] md:gap-[24px]'>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Hepatitis B</p>
                        </li>
                        
                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Rotavirus</p>
                        </li>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Diphtheria</p>
                        </li>
                        
                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Pertussis</p>
                        </li>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Tetanus</p>
                        </li>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Haemophilus influenzae type b (Hib)</p>
                        </li>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Pneumococcaldisease (PCV13, PCV15)</p>
                        </li>

                    </ul>

                    <ul className='flex flex-col gap-[16px] md:gap-[24px]'>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Polio</p>
                        </li>
             
                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Coronavirus disease 2019 (COVID-19)</p>
                        </li>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Influenza (Flu)</p>
                        </li>
                        
                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Measles</p>
                        </li>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Mumps</p>
                        </li>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Rubella</p>
                        </li>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Chickenpox</p>
                        </li>

                    </ul>
                </div>
            </div>

            {/* This will display on mobile screen */}
            <div  data-aos="fade-up" data-aos-delay="500" className='opacity-0 transition-opacity duration-300 md:hidden px-[10px]'>
                <img src='/childVaccine.png' className='object-cover rounded-[8px]'/>
            </div>
        </div>

        {/* Teen Vaccine */}
        <div className='grid gap-[20px] md:grid-cols-2 md:items-center md:gap-[106px]'>

            <div  data-aos="fade-up" data-aos-delay="400"  className='flex flex-col gap-[24px] md:gap-[32px] p-[8px] opacity-0 transition-opacity duration-300'>
                <div className='flex flex-col gap-[16px] md:gap-[24px]'>
                    <p className='text-[#002C5B] font-bold text-[24px] leading-[24px] md:text-[32px] md:leading-[32px]'>Teen Vaccine <span className='font-normal'>(7-18yrs)</span></p>
                    <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines.</p>
                </div>

                <div className='flex gap-[14px] md:gap-[20px]'>
                    <ul className='flex flex-col gap-[16px] md:gap-[24px]'>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>COVID-19 Coronavirus disease 2019</p>
                        </li>
                        
                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Flu** Influenza</p>
                        </li>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>Tdap Tetanus, Diphtheria, & Pertussis</p>
                        </li>

                    </ul>

                    <ul className='flex flex-col gap-[16px] md:gap-[24px]'>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>HPV†
                            Human papillomavirus</p>
                        </li>
            
                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[24px] h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>MenACWY
                            Meningococcal disease</p>
                        </li>

                        <li className='flex items-center gap-[8px]'>
                            <div className='w-[24px] h-[24px]'>
                                <div className='bg-[#FC681D] w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-[50%] flex items-center justify-center'>
                                    <FaCheck className='text-[#FBFBFB] w-[13.5px] h-[11.5px]'/>
                                </div>
                            </div>
                            
                            <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>MenB
                            Meningococcal disease</p>
                        </li>

                    </ul>
                </div>
            </div>

            <div  data-aos="fade-up" data-aos-delay="500" className='opacity-0 transition-opacity duration-300'>
                <img src='/teenVaccine.png' className='object-cover rounded-[8px] md:rounded-none'/>
            </div>
        </div>

        {/* Travel Vaccine */}
        <div className='grid gap-[20px] md:grid-cols-2 md:items-center md:gap-[106px]'>

            {/* This will display on larger screen */}
            <div  data-aos="fade-up" data-aos-delay="300" className='opacity-0 transition-opacity duration-300 hidden md:block'>
                <img src='/travelVaccine.png' className='object-cover'/>
            </div>

            <div  data-aos="fade-up" data-aos-delay="400"  className='flex flex-col gap-[24px] md:gap-[32px] p-[8px] opacity-0 transition-opacity duration-300'>
                <div className='flex flex-col gap-[16px] md:gap-[24px]'>
                    <p className='text-[#002C5B] font-bold text-[24px] leading-[24px] md:text-[32px] md:leading-[32px]'>Travel Vaccine</p>
                    <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic. The Vaccine App is an all in one solution.  With built in reminders, pdf printouts and geolocation to find the nearest clinic. The Vaccine App is an all in one solution.</p>
                </div>
            </div>

            {/* This will display on mobile screen */}
            <div  data-aos="fade-up" data-aos-delay="500" className='opacity-0 transition-opacity duration-300 md:hidden'>
                <img src='/travelVaccine.png' className='object-cover rounded-[8px]'/>
            </div>
        </div>

    </div>
  )
}

export default VaccineType