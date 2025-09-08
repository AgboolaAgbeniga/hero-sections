import React, { useState } from 'react'
import { Menu, SearchIcon, X } from 'lucide-react'
import threeIcon from '../logo/assets/notificationIcons.png'
import searchIcon from '../logo/assets/searchIcon.svg'

const logo = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='w-full logo-bg bg-[#F6FDFD] h-[1021px]'>
            <section>

                {/* Navbar */}
                <div className=" relative container mx-auto px-4 pt-6">
                    <nav
                        className="  bg-[#eeeeee85] font-inter border border-[#89999752] h-12 flex items-center justify-between rounded-[14px] xl:w-[1152px] mx-auto md:pr-1 pl-4 pr-2 
            "
                    >
                        {/* Logo */}
                        <div>
                            <a href="/" >
                                <p className="font-bold text-xl text-[#1ACC6D]">LOGO</p>
                            </a>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8 text-base text-[#54555D] tracking-[-0.5px] ">
                            <a href="/" className='text-[#94BE47] hover:text-[#54555D]' >Home</a>
                            <a href="/" className='hover:text-[#94BE47]'>About</a>
                            <a href="/" className='hover:text-[#94BE47]'>Blog</a>
                            <a href="/" className='hover:text-[#94BE47]'>Contacts</a>
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex bg-[#9AC749] h-[38px] px-5 rounded-[11px] text-center items-center justify-center font-medium text-base text-white hover:text-[#9AC749] hover:border hover:border-[#89999783] hover:bg-[white] transition duration-300">
                            <a href="/">Become a member</a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-[#54555D]"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </nav>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className='px-4 relative mt-4'>
                            <div className="absolute left-0 w-full md:hidden py-4 flex flex-col items-center gap-4 
                  bg-[#eeeeeeef] text-[#54555D] font-inter rounded-xl z-50 shadow-lg ">
                                <a href="/" className="text-[#94BE47] hover:text-[#54555D]">Home</a>
                                <a href="/" className="hover:text-[#94BE47]">About</a>
                                <a href="/" className="hover:text-[#94BE47]">Blog</a>
                                <a href="/" className="hover:text-[#94BE47]">Contacts</a>
                                <div className="bg-[#9AC749] h-[38px] px-5 rounded-[11px] flex text-center items-center justify-center 
                    font-medium text-base text-white hover:text-[#9AC749] hover:border hover:border-[#89999783] 
                    hover:bg-[white] transition duration-300">
                                    <a href="/">Become a member</a>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
                {/* navbar ends here */}

                    <div className='container  mx-auto mt-[100px] '>
                        <div className='flex mx-auto h-[33px] items-center justify-between bg-[#1acc6d52]  max-w-[302px] rounded-[72px] text-sm font-sf-pro-display pr-3 gap=2.5 mb-3'>
                            <img src={threeIcon} alt="" />
                            <p>3 brand owners booked a call this week</p>
                        </div>
                        <div className='flex flex-col items-center text-center gap-4 font-manrope'>
                            <p className=' text-[60px] font-bold tracking-[-2.6px] leading-17  bg-gradient-to-tl from-[#000000af] via-[#1acc6d] to-[#1ACC6D] text-transparent bg-clip-text'>Custom Shopify Store<br /> built to sell like crazy</p>
                            <p className='text-xl font-medium tracking-[-0.6px]'>Scale your brand with our commission-based retention systems</p>
                        </div>
                    </div>


                <div className='relative bottom-0 w-full h-[551.44px] bg-gradient-to-t from-[#94BE47] via-[#F6FDFD] to-[#f6fdfd00]'>
                    <div className='flex w-[310px] gap-0 mx-auto border border-[#ffffff86] bg-[#ffffffc0] rounded-[11px] drop-shadow-[0_8px_15px_rgba(0,0,0,0.2)] backdrop-blur-xl'>
                        <input type="search" name="" id="" placeholder='Search your Custom Store' className='w-full ' />
                        <div className='bg-[#fff] w-[52px] h-[35px] rounded-[11px]'><img src={searchIcon} alt="" className='mx-auto' /></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default logo