import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
    const [showNav, setShowNav] = useState(true);

    const handleShowNav = () => {
        return setShowNav((prev) => !prev);
    }

  return (
    <header className='w-full md:bg-[#002C5B] bg-[#F6F6F6] md:h-[88px] px-[30px] md:px-[100px] flex flex-col gap-[8x]'>

        <div className='flex items-center justify-between py-[20px] md:py-[15px]'>
            <p className='font-josefin text-[#002C5B] text-[24px] leading-[24px] md:text-[#FFFCFC] font-bold md:text-[32px] md:leading-[32px]'>MEDIVAP</p>

            <div className='md:hidden'>
                {
                    showNav ? <RxHamburgerMenu className='w-[32px] h-[32px]' onClick={()=> handleShowNav()}/> : <LiaTimesSolid className='w-[32px] h-[32px]' onClick={()=> handleShowNav()}/>
                }
                
            </div>

            <nav className='md:flex items-center gap-[40px] hidden'>
                <ul className='flex items-center gap-[30px]'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#FFFCFC] nunito-400 font-josefin text-[20px] leading-[20px] border-b-2 border-[#FC681D] p-[8px]' : 'text-[#54697E] font-josefin nunito-400 text-[20px] leading-[20px]'}>
                        Home
                    </NavLink>

                    <NavLink to='/feature' className={({ isActive }) => isActive ? 'text-[#FFFCFC] nunito-400 font-josefin text-[20px] leading-[20px] border-b-2 border-[#FC681D] p-[8px]' : 'text-[#54697E] font-josefin nunito-400 text-[20px] leading-[20px]'}>
                        Features
                    </NavLink>

                    <NavLink to='/vaccine' className={({ isActive }) => isActive ? 'text-[#FFFCFC] nunito-400 font-josefin text-[20px] leading-[20px] border-b-2 border-[#FC681D] p-[8px]' : 'text-[#54697E] font-josefin nunito-400 text-[20px] leading-[20px]'}>
                        Vaccines
                    </NavLink>

                    <NavLink to='/doctor' className={({ isActive }) => isActive ? 'text-[#FFFCFC] nunito-400 font-josefin text-[20px] leading-[20px] border-b-2 border-[#FC681D] p-[8px]' : 'text-[#54697E] font-josefin nunito-400 text-[20px] leading-[20px]'}>
                        Doctors
                    </NavLink>
                </ul>

                <div className='bg-[#FC681D] h-[56px] md:w-[176px] rounded-[4px] px-[32px] py-[16px]'>
                    <a className='text-[#FBFBFB] font-josefin font-normal text-[24px] leading-[24px]'>Download</a>
                </div>
            </nav>
        </div>
        
        {/* Mobile view */}
        <nav className={showNav ? 'hidden' : 'flex flex-col'}>
            <ul className='flex flex-col gap-[15px] md:hidden'>
                <NavLink to='/' className='text-[#54697E] nunito-400 font-josefin text-[20px] leading-[20px] p-[8px]'>
                    Home
                </NavLink>

                <NavLink to='/feature' className='text-[#54697E] nunito-400 font-josefin text-[20px] leading-[20px] p-[8px]'>
                    Features
                </NavLink>

                <NavLink to='/vaccine' className='text-[#54697E] nunito-400 font-josefin text-[20px] leading-[20px] p-[8px]'>
                    Vaccines
                </NavLink>

                <NavLink to='/doctor' className='text-[#54697E] nunito-400 font-josefin text-[20px] leading-[20px] p-[8px]'>
                    Doctors
                </NavLink>
            </ul>
        </nav>
       
    </header>
  )
}

export default Header