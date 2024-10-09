import React from 'react'

const FeatureHero = () => {
  return (
    <main className='featureHero w-full h-[400px] md:h-[723px] flex items-center justify-center'>
      <div className='flex flex-col items-center gap-[32px] md:gap-[96px] p-[8px]'>

        <div className='flex flex-col items-center gap-[8px]'>
          <p className='font-bold text-[35px] leading-[35px] md:text-[48px] md:leading-[64px] text-center text-[#FBFBFB]'>Medivap Features</p>
          <p className='text-[18px] leading-[24px] md:text-[20px] md:leading-[32px] text-center text-[#FBFBFB] md:w-[60%]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines. With built in reminders, pdf printouts and geolocation to find the nearest clinic.</p>
        </div>

        <div className='flex items-center gap-[16px] px-[8px] md:gap-[24px]'>
          <img src={'/appStore.png'} className='w-[120px] h-[35px] md:w-[162px] md:h-[47px]'/>
          <img src={'/playStore.png'} className='w-[120px] h-[35px] md:w-[162px] md:h-[47px]'/>
        </div>
      </div>
    </main>
  )
}

export default FeatureHero