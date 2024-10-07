import React from 'react'
import { Link } from 'react-router-dom'

const FeatureSubHero = () => {
  return (
    <div className='flex items-center justify-center mt-[30px]'>
        <div className='flex flex-col items-center gap-[16px] md:gap-[24px]'>
            <p className='text-[#002C5B] font-semibold text-[18px] leading-[24px] md:text-[24px] md:leading-[36px] text-center w-[70%]'>MediVap the #1 Medication and Vaccination tracker App</p>
            <div className='border-[2px] border-[#FC681D] rounded-[4px] py-[16px] px-[8px] md:px-[32px]'>
                <Link to='/review' className='text-[20px] leading-[20px] md:text-[24px] md:leading-[24px] text-[#FC681D]'>View All Reviews</Link>
            </div>
        </div>
    </div>
  )
}

export default FeatureSubHero