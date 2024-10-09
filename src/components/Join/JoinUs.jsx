import React from 'react'

const JoinUs = () => {
  return (
    <div className='w-full bg-[#002C5B] flex flex-col md:flex-row items-center gap-[50px] py-[40px] px-[30px] mt-[40px] md:py-0 md:gap-[30px] md:px-[204px] md:mt-[60px] md:h-[498px]'>
        <div className='flex flex-col items-center md:items-start gap-[16px] md:gap-[32px]'>
            <div className='flex flex-col gap-[16px] md:gap-[24px] '>
                <p className='text-[#FBFBFB] font-bold text-[24px] leading-[30.17px] text-center md:text-start md:text-[32px] md:leading-[40.22px]'>Ready to join Us?</p>
                <p className='text-[#FBFBFB] text-[18px] leading-[24px] text-center md:text-start md:text-[18px] md:leading-[24px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt.</p>
            </div>

            <div className='flex items-center gap-[16px]'>
                <img src={'/appStore.png'} className='w-[106px] h-[33px] md:w-[173px] md:h-[54px]'/>
                <img src={'/playStore.png'} className='w-[106px] h-[33px] md:w-[173px] md:h-[54px]'/>
            </div>
        </div>

        <div>
            <img src={'/feature2.png'} className='object-cover transform rotate-[7.8deg]'/>
        </div>
    </div>
  )
}

export default JoinUs