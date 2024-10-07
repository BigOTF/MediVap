import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaGooglePlusSquare, FaPhoneAlt } from "react-icons/fa";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='w-full px-[30px] mt-[50px] md:px-[100px] md:mt-[100px] md:border-t-[0.5px] border-[#002C5B]'>
        
        {/* Will display on the larger screen */}
        <div className=' py-[40px] md:flex flex-col items-center gap-[70px] hidden'>

            <div className='grid grid-cols-4 gap-[30px]'>

                {/* About Us */}
                <div className='flex flex-col gap-[16px]'>

                    <div className='flex flex-col gap-[8px] px-[8px]'>
                        <p className='text-[#002C5B] font-bold md:text-[24px] md:leading-[40px]'>About Us</p>
                        <p className='text-[#54697E] md:text-[20px] md:leading-[32px]'>The Vaccine App moves us on to efficiency and convenience making all our lives easier. No more lost cards, parental guilt.</p>
                    </div>

                    <div className='flex flex-col gap-[8px] md:w-[118px]'>
                        <div className='flex items-center gap-[2px]'>

                            <div className='w-[32px] h-[32px] flex items-center justify-center'>
                                <FaFacebookSquare className='text-[#4867AA]'/>
                            </div>

                            <div className='w-[32px] h-[32px] flex items-center justify-center'>
                                <FaSquareXTwitter className='text-[#002C5B]'/>
                            </div>

                            <div className='w-[32px] h-[32px] flex items-center justify-center'>
                                <FaInstagramSquare className='text-[#FF543E]'/>
                            </div>

                            <div className='w-[32px] h-[32px] flex items-center justify-center'>
                                <FaGooglePlusSquare className='text-[#002C5B]'/>
                            </div>

                        </div>
                        <p className='font-bold text-[#002C5B] md:text-[20px] md:leading-[32px] text-center'>MEDIVAP</p>
                    </div>

                </div>

                {/* Features */}
                <div className='flex flex-col gap-[16px] px-[8px]'>
                    <p className='font-bold md:text-[24px] md:leading-[40px] text-[#002C5B]'>Features</p>

                    <ul className='flex flex-col gap-[16px]'>
                        <li className='md:text-[20px] md:leading-[24px] text-[#54697E]'>Vaccine tracker</li>
                        <li className='md:text-[20px] md:leading-[24px] text-[#54697E]'>Medication tracker</li>
                        <li className='md:text-[20px] md:leading-[24px] text-[#54697E]'>Doc Chat</li>
                        <li className='md:text-[20px] md:leading-[24px] text-[#54697E]'>Health blog</li>
                        <li className='md:text-[20px] md:leading-[24px] text-[#54697E]'>USSD</li>
                        <li className='md:text-[20px] md:leading-[24px] text-[#54697E]'>Govt hospital incoporation</li>
                        <li className='md:text-[20px] md:leading-[24px] text-[#54697E]'>Hospital data base</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className='flex flex-col gap-[16px] px-[8px]'>
                    <p className='font-bold md:text-[24px] md:leading-[40px] text-[#002C5B]'>Quick Links</p>

                    <ul className='flex flex-col gap-[16px]'>
                        <Link to='/about' className='md:text-[20px] md:leading-[24px] text-[#54697E]'>About Us</Link>
                        <Link to='/services' className='md:text-[20px] md:leading-[24px] text-[#54697E]'>Services</Link>
                        <Link to='/pricing' className='md:text-[20px] md:leading-[24px] text-[#54697E]'>Pricing</Link>
                        <li className='md:text-[20px] md:leading-[24px] text-[#54697E]'>FAQ</li>
                        <li className='md:text-[20px] md:leading-[24px] text-[#54697E]'>Terms and Condition</li>
                        <li className='md:text-[20px] md:leading-[24px] text-[#54697E]'>Privacy Policy</li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className='flex flex-col gap-[16px] px-[8px]'>
                    <p className='font-bold md:text-[24px] md:leading-[40px] text-[#002C5B]'>Contact us</p>

                    <ul className='flex flex-col gap-[16px]'>
                        <li className='flex items-center gap-[8px]'>
                            <FaPhoneAlt className='text-[#FC681D] w-[18px] h-[18px]'/>
                            <p className='text-[#54697E] md:text-[20px] md:leading-[24px]'>+234-825470000</p>
                        </li>
                        <li className='flex items-center gap-[8px]'>
                            <FaLocationDot className='text-[#FC681D] w-[18px] h-[18px]'/>
                            <p className='text-[#54697E] md:text-[20px] md:leading-[24px]'>No 125 Crescent road, Umuahia</p>
                        </li>
                        <li className='flex items-center gap-[8px]'>
                            <MdEmail className='text-[#FC681D] w-[18px] h-[18px]'/>
                            <p className='text-[#54697E] md:text-[20px] md:leading-[24px]'>Vaccineapp@gmial.com</p>
                        </li>
                    </ul>
                </div>

            </div>

            <div>
                <p className='text-[#54697E] md:text-[20px] md:leading-[30px]'>Copyright 2023,medivap@gmail.com.All right reserved</p>
            </div>

        </div>

        {/* Will display on Mobile screens */}
        <div className='md:hidden flex flex-col gap-[24px]'>

            <div className='flex flex-col gap-[16px] px-[8px]'>
                <p className='font-bold text-[24px] leading-[40px] text-[#002C5B]'>Contact us</p>

                <ul className='flex flex-col gap-[16px]'>
                    <li className='flex items-center gap-[8px]'>
                        <FaPhoneAlt className='text-[#FC681D] w-[18px] h-[18px]'/>
                        <p className='text-[#54697E] text-[18px] leading-[24px]'>+234-825470000</p>
                    </li>
                    <li className='flex items-center gap-[8px]'>
                        <FaLocationDot className='text-[#FC681D] w-[18px] h-[18px]'/>
                        <p className='text-[#54697E] text-[18px] leading-[24px]'>No 125 Crescent road, Umuahia</p>
                    </li>
                    <li className='flex items-center gap-[8px]'>
                        <MdEmail className='text-[#FC681D] w-[18px] h-[18px]'/>
                        <p className='text-[#54697E] text-[18px] leading-[24px]'>Vaccineapp@gmial.com</p>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col gap-[16px] px-[8px]'>
                <p className='font-bold text-[24px] leading-[40px] text-[#002C5B]'>Pages</p>

                <ul className='flex flex-col gap-[16px]'>
                    <Link to='/' className='text-[18px] md:leading-[24px] text-[#54697E]'>Home</Link>
                    <Link to='/feature' className='text-[18px] md:leading-[24px] text-[#54697E]'>Feature</Link>
                    <Link to='/pricing' className='text-[18px] md:leading-[24px] text-[#54697E]'>Pricing</Link>
                    <Link to='/vaccine' className='text-[18px] md:leading-[24px] text-[#54697E]'>Vaccines</Link>
                    <Link to='/doctor' className='text-[18px] md:leading-[24px] text-[#54697E]'>Doctors</Link>
                    <li className='text-[18px] md:leading-[24px] text-[#54697E]'>FAQ</li>
                    <li className='text-[18px] md:leading-[24px] text-[#54697E]'>Terms and Condition</li>
                </ul>
            </div>

            <div className='flex flex-col gap-[8px] w-[118px]'>
                <div className='flex items-center gap-[2px]'>

                    <div className='w-[32px] h-[32px] flex items-center justify-center'>
                        <FaFacebookSquare className='text-[#4867AA]'/>
                    </div>

                    <div className='w-[32px] h-[32px] flex items-center justify-center'>
                        <FaSquareXTwitter className='text-[#002C5B]'/>
                    </div>

                    <div className='w-[32px] h-[32px] flex items-center justify-center'>
                        <FaInstagramSquare className='text-[#FF543E]'/>
                    </div>

                    <div className='w-[32px] h-[32px] flex items-center justify-center'>
                        <FaGooglePlusSquare className='text-[#002C5B]'/>
                    </div>

                </div>

                <p className='font-bold text-[#002C5B] text-[20px] leading-[32px] text-center'>MEDIVAP</p>
            </div>

            <div>
                <p className='text-[#54697E] text-[18px] leading-[30px] text-center'>Copyright 2023,medivap@gmail.com.All right reserved</p>
            </div>

        </div>
        
    </footer>
  )
}

export default Footer