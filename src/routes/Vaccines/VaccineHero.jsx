import React from 'react'

const VaccineHero = () => {
  return (
    <main className='bg-[#F6F6F6] px-[30px] py-[20px] md:py-[60px] md:px-[100px] grid md:grid-cols-2 items-center gap-[24px]'>

        <div className='flex flex-col gap-[24px] md:gap-[48px]'>
            <div className='flex flex-col gap-[8px] p-[8px]'>
                <p className='text-[#002C5B] font-bold text-[35px] leading-[40px] md:text-[48px] md:leading-[58px]'>Stay on track with your child’s vaccine</p>
                <p className='text-[#54697E] text-[18px] leading-[24px] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt, missed or catch-up vaccines.</p>
            </div>

            <div className='flex items-center gap-[16px] md:gap-[24px] p-[8px]'>
                <img src={'appStore.png'} className='w-[120px] h-[35px] md:w-[162px] md:h-[47px]'/>
                <img src={'playStore.png'} className='w-[120px] h-[35px] md:w-[162px] md:h-[47px]'/>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-[16px] md:gap-[24px]'>
            <img src={'vaccineHero1.png'} className='object-cover'/>
            <img src={'vaccineHero2.png'} className='object-cover'/>
            <img src={'vaccineHero3.png'} className='object-cover'/>
            <img src={'vaccineHero4.png'} className='object-cover'/>
        </div>

    </main>
  )
}

export default VaccineHero