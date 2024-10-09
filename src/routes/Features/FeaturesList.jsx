import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturesList = () => {

    useEffect(() => {
        AOS.init({
          duration: 300, // animation duration in ms
          once: true,    // whether animation should happen only once
        });
      }, []);

  return (
    <div className='w-full mt-[50px] md:mt-[80px] flex flex-col items-center gap-[50px] px-[30px] md:px-[205px]'>
        
        {/* Vaccine Tracker */}
        <div className='grid md:grid-cols-2 items-center gap-[10px]'>
            <div data-aos="fade-up" data-aos-delay="300" className='md:block hidden opacity-0 transition-opacity duration-300'>
                <img src={'/featureTracker.png'} className='object-cover'/>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className='flex flex-col gap-[8px] md:gap-[16px] p-[8px] opacity-0 transition-opacity duration-300'>
                <div className='flex items-center gap-[8px] p-[8px]'>
                    <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[32px] md:leading-[32px]'>Vaccine Tracker</p>
                </div> 

                <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic. The Vaccine App is an all in one solution. No more lost cards, parental guilt, missed or catch-up vaccines.</p>
            </div>

            {/* Will display on the mobile view */}
            <div data-aos="fade-up" data-aos-delay="500" className='md:hidden flex items-center justify-center opacity-0 transition-opacity duration-300'>
                <img src={'/featureTracker.png'} className='object-cover w-[220.74px]'/>
            </div>
        </div>

        {/* Medication tracker */}
        <div className='grid md:grid-cols-2 items-center gap-[10px] md:gap-[100px]'>
                <div data-aos="fade-up" data-aos-delay="300" className='flex flex-col gap-[8px] md:gap-[16px] p-[8px] opacity-0 transition-opacity duration-300'>
                    <div className='flex items-center gap-[8px] p-[8px]'>
                        <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[32px] md:leading-[32px]'>Medication Tracker</p>
                    </div> 

                    <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic. The Vaccine App is an all in one solution. No more lost cards, parental guilt, missed or catch-up vaccines.</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className='md:block hidden opacity-0 transition-opacity duration-300'>
                    <img src={'/feature2.png'} className='object-cover'/>
                </div>
                
                {/* Will display on the mobile view */}
                <div  data-aos="fade-up" data-aos-delay="500"className='md:hidden flex items-center justify-center opacity-0 transition-opacity duration-300'>
                    <img src={'/feature2.png'} className='object-cover w-[220.74px]'/>
                </div>
        </div>

        {/* Doc chat */}
        <div className='grid md:grid-cols-2 items-center gap-[10px]'>
            <div data-aos="fade-up" data-aos-delay="300" className='md:block hidden opacity-0 transition-opacity duration-300'>
                <img src={'/featureDoc.png'} className='object-cover'/>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className='flex flex-col gap-[8px] md:gap-[16px] p-[8px] opacity-0 transition-opacity duration-300'>
                <div className='flex items-center gap-[8px] p-[8px]'>
                    <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[32px] md:leading-[32px]'>Doc chat</p>
                </div> 

                <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic.</p>
            </div>

            {/* Will display on the mobile view */}
            <div data-aos="fade-up" data-aos-delay="500" className='md:hidden flex items-center justify-center opacity-0 transition-opacity duration-300'>
                <img src={'/featureDoc.png'} className='object-cover w-[220.74px]'/>
            </div>
        </div>

        {/* Hospital Database */}
        <div className='grid md:grid-cols-2 items-center gap-[10px] md:gap-[100px]'>
            <div data-aos="fade-up" data-aos-delay="300" className='flex flex-col gap-[8px] md:gap-[16px] p-[8px] opacity-0 transition-opacity duration-300'>
                <div className='flex items-center gap-[8px] p-[8px]'>
                    <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[32px] md:leading-[32px]'>Hospital database</p>
                </div> 

                <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and  making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic. No more lost cards, parental guilt, missed or catch-up vaccines.</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className='md:block hidden opacity-0 transition-opacity duration-300'>
                <img src={'/featureHospital.png'} className='object-cover'/>
            </div>
            
            {/* Will display on the mobile view */}
            <div  data-aos="fade-up" data-aos-delay="500"className='md:hidden flex items-center justify-center opacity-0 transition-opacity duration-300'>
                <img src={'/featureHospital.png'} className='object-cover w-[220.74px]'/>
            </div>
        </div>

        {/* Health Blog */}
        <div className='grid md:grid-cols-2 items-center gap-[10px]'>
            <div data-aos="fade-up" data-aos-delay="300" className='md:block hidden opacity-0 transition-opacity duration-300'>
                <img src={'/featureBlog.png'} className='object-cover'/>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className='flex flex-col gap-[8px] md:gap-[16px] p-[8px] opacity-0 transition-opacity duration-300'>
                <div className='flex items-center gap-[8px] p-[8px]'>
                    <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[32px] md:leading-[32px]'>Health Blog</p>
                </div> 

                <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic.</p>
            </div>

            {/* Will display on the mobile view */}
            <div data-aos="fade-up" data-aos-delay="500" className='md:hidden flex items-center justify-center opacity-0 transition-opacity duration-300'>
                <img src={'/featureBlog.png'} className='object-cover w-[220.74px]'/>
            </div>
        </div>

        {/* Code */}
        <div className='grid md:grid-cols-2 items-center gap-[10px] md:gap-[100px]'>
            <div data-aos="fade-up" data-aos-delay="300" className='flex flex-col gap-[8px] md:gap-[16px] p-[8px] opacity-0 transition-opacity duration-300'>
                <div className='flex items-center gap-[8px] p-[8px]'>
                    <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[32px] md:leading-[32px]'>*548#</p>
                </div> 

                <p className='text-[#202020] font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic.</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className='md:block hidden opacity-0 transition-opacity duration-300'>
                <img src={'/featureCode.png'} className='object-cover'/>
            </div>
            
            {/* Will display on the mobile view */}
            <div  data-aos="fade-up" data-aos-delay="500"className='md:hidden flex items-center justify-center opacity-0 transition-opacity duration-300'>
                <img src={'/featureCode.png'} className='object-cover w-[220.74px]'/>
            </div>
        </div>

        {/* Government Hospital */}
        <div className='grid md:grid-cols-2 items-center gap-[10px]'>
            <div data-aos="fade-up" data-aos-delay="300" className='md:block hidden opacity-0 transition-opacity duration-300'>
                <img src={'/featureGov.png'} className='object-cover'/>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className='flex flex-col gap-[8px] md:gap-[16px] p-[8px] opacity-0 transition-opacity duration-300'>
                <div className='flex items-center gap-[8px] p-[8px]'>
                    <p className='text-[#002C5B] font-bold text-[20px] leading-[20px] md:text-[32px] md:leading-[32px]'>Govt hospital incorporation</p>
                </div> 

                <p className='text-[#202020] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic.</p>
            </div>

            {/* Will display on the mobile view */}
            <div data-aos="fade-up" data-aos-delay="500" className='md:hidden flex items-center justify-center opacity-0 transition-opacity duration-300'>
                <img src={'/featureGov.png'} className='object-cover w-[220.74px]'/>
            </div>
        </div>

    </div>
  )
}

export default FeaturesList