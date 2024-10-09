import React from 'react'

const Hero = () => {
  return (
    <main className='w-full pt-[30px] md:pt-[50px] flex flex-col gap-[40px] md:gap-0 md:flex-row md:items-center bg-[#F6F6F6]'>

        <div className='flex flex-col gap-[50px] items-center md:items-start'>

            <div className='flex flex-col gap-[16px] px-[30px] md:gap-[40px] md:pl-[100px] md:pr-[20px]'>

                <div className='flex flex-col gap-[8px]'>
                    <p className='font-josefin font-semibold text-[35px] leading-[40px] md:text-[48px] md:leading-[64px]'>We Care About the <span className='md:text-[#FC681D]'>Medical Record</span> of Your Child</p>
                    <p className='text-[#54697E] font-josefin font-normal text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines.</p>
                </div>
                
                <div className='flex items-center gap-[16px] md:gap-[24px]'>
                    <img src={'/appStore.png'} alt='appStore' className='w-[120px] h-[32px] md:w-[162px] md:h-[47px]'/>
                    <img src={'/playStore.png'} alt='playStore' className='w-[120px] h-[32px] md:w-[162px] md:h-[47px]'/>
                </div>
            </div>

            {/* This will show on the mobile view */}
            <div className='md:hidden'>
                <img src={'/heroMobile.png'} />
            </div>

            {/* This will display on the large view */}
            <div className='md:h-[104px] bg-[#002C5B] md:flex justify-around items-center w-full hidden'>
                <div className='flex flex-col items-center gap-[2px]'>
                    <p className='font-josefin text-[#FBFBFB] font-semibold text-[20px] leading-[20px]'>50k</p>
                    <p className='font-josefin text-[#FBFBFB] font-normal text-[20px] leading-[20px]'>Download</p>
                </div>

                <div className='flex flex-col items-center gap-[2px]'>
                    <p className='font-josefin text-[#FBFBFB] font-semibold text-[20px] leading-[20px]'>1000k</p>
                    <p className='font-josefin text-[#FBFBFB] font-normal text-[20px] leading-[20px]'>Reviews</p>
                </div>
                
                <div className='flex flex-col items-center gap-[2px]'>
                    <p className='font-josefin text-[#FBFBFB] font-semibold text-[20px] leading-[20px]'>200+</p>
                    <p className='font-josefin text-[#FBFBFB] font-normal text-[20px] leading-[20px]'>Experienced doctors</p>
                </div>

                <div className='flex flex-col items-center gap-[2px]'>
                    <p className='font-josefin text-[#FBFBFB] font-semibold text-[20px] leading-[20px]'>1000+</p>
                    <p className='font-josefin text-[#FBFBFB] font-normal text-[20px] leading-[20px]'>Happy patients</p>
                </div>

            </div>
        </div>

        {/* This will display on the mobile view only */}
        <div className='h-[71px] bg-[#002C5B] flex justify-around items-center gap-[10px] md:hidden'>
            <div className='flex flex-col items-center gap-[5px]'>
                <p className='font-josefin text-[#FBFBFB] font-semibold text-[14px] leading-[14px]'>50k</p>
                <p className='font-josefin text-[#FBFBFB] font-normal text-[14px] leading-[14px]'>Download</p>
            </div>

            <div className='flex flex-col items-center gap-[5px]'>
                <p className='font-josefin text-[#FBFBFB] font-semibold text-[14px] leading-[14px]'>1k</p>
                <p className='font-josefin text-[#FBFBFB] font-normal text-[14px] leading-[14px]'>Reviews</p>
            </div>
            
            <div className='flex flex-col items-center gap-[5px]'>
                <p className='font-josefin text-[#FBFBFB] font-semibold text-[14px] leading-[14px]'>200+</p>
                <p className='font-josefin text-[#FBFBFB] font-normal text-[14px] leading-[14px]'>Expert doctors</p>
            </div>

            <div className='flex flex-col items-center gap-[5px]'>
                <p className='font-josefin text-[#FBFBFB] font-semibold text-[14px] leading-[14px]'>1000+</p>
                <p className='font-josefin text-[#FBFBFB] font-normal text-[14px] leading-[14px]'>Happy patients</p>
            </div>

        </div>

        {/* This will display on the large screen */}
        <div className='transform translate-x-[-90px] md:pr-[100px] md:block hidden'>
            <img src={'/hero.png'} className='w-[700px]'/>
        </div>
       
    </main>
  )
}

export default Hero