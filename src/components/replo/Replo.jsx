import React, { useState } from 'react'
import logo from '../replo/assets/logo.svg'
import arrow from '../replo/assets/arrow.svg'
import bgImage from '../replo/assets/bgimage.svg'
import { Menu, X } from 'lucide-react'


const replo = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full bg-[#EAEAEC] grid-bg font-roboto ">
      <main className="pt-8 " >
        {/* Navbar */}
        <div className="container mx-auto px-4">
          <nav
            className="
              bg-[#ffffff]  h-15.5 flex items-center justify-between rounded-xl
              w-full xl:w-[982px] mx-auto px-5 font-space-mono
            "
          >
            <div className='flex gap-7.5'>
              {/* Logo */}
              <div>
                <a href="/" className="">
                  <img src={logo} alt="logo" />
                </a>
              </div>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center gap-4 lg:gap-7.5 text-sm text-[#000]">
                <a href="/" className='flex items-center gap-1 hover:text-[#88888c]'>PRODUCT<span><img src={arrow} alt="" /></span></a>
                <a href="/" className='flex items-center gap-1 hover:text-[#88888c]'>SOLUTIONS<span><img src={arrow} alt="" /></span></a>
                <a href="/" className='flex items-center gap-1 hover:text-[#88888c]'>RESOURCES<span><img src={arrow} alt="" /></span></a>
                <a href="/" className='hover:text-[#88888c]'>PRICING</a>

              </div>
            </div>


            {/* Desktop CTA */}
            <div className=" hidden md:flex w-auto h-[42px] border border-[#E5E0DE] rounded-[62px] px-3.5 py-3 text-center items-center justify-center text-lg hover:bg-[#000000] hover:text-[#fff] transition-colors duration-300">
              <a href="/">BOOK A DEMO</a>
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
          
            <div className="md:hidden abslute  px-4 py-4 flex flex-col items-center gap-4 mt-4 text-sm font-space-mono bg-[#ffffffee] rounded-xl 
              ">
              <a href="/" className='flex items-center gap-1'>PRODUCT<span><img src={arrow} alt="" /></span></a>
              <a href="/" className='flex items-center gap-1'>SOLUTIONS<span><img src={arrow} alt="" /></span></a>
              <a href="/" className='flex items-center gap-1'>RESOURCES<span><img src={arrow} alt="" /></span></a>
              <a href="/" >PRICING</a>
              <div className="bg-[#fff] h-[39px] px-5 border border-[#E5E0DE] rounded-[62px] flex text-center items-center justify-center text-lg ">
                <a href="/">BOOK A DEMO</a>
              </div>
            </div>
         

        )}
        </div>
        {/* Navbar ends here */}

        <section className='containe mx-auto'>
          <div className="leading-16 mt-15 px-4 font-figtree  text-5xl sm:text-[62px] tracking-[-3.1px]">
            <p className="font-semibold text-center">
              Unlock higher revenue with CRO <br className=' hidden lg:block' /> built for scaling Shopify teams
            </p>
          </div>

          <p className="text-base md:text-xl text-[#ACB0BA] text-center mt-4 px-6 font-figtree font-medium tracking-[-1px]">
            Easily access and manage your business back-end
          </p>

          
          <div className='flex flex-wrap justify-center text-sm md:text-base font-aileron mt-5 gap-4 px-5'>
            <div className="px-4 py-3 h-[40px] border  border-[#E5E0DE] bg-[#fff] rounded-[62px] flex  text-center items-center justify-center hover:scale-105 transition-transform duration-300">
              <a href="/">Landing Pages</a>
            </div>
             <div className="px-4 py-3 h-[40px] border  border-[#E5E0DE] bg-[#F9F6F4] rounded-[62px] flex  text-center items-center justify-center hover:scale-105 transition-transform duration-300">
              <a href="/">Templates</a>
            </div>
             <div className="px-4 py-3 h-[40px] border  border-[#E5E0DE] bg-[#F9F6F4] rounded-[62px] flex  text-center items-center justify-center hover:scale-105 transition-transform duration-300">
              <a href="/">Content AI</a>
            </div>
             <div className="px-4 py-3 h-[40px] border  border-[#E5E0DE] bg-[#F9F6F4] rounded-[62px] flex  text-center items-center justify-center hover:scale-105 transition-transform duration-300">
              <a href="/">Analytics</a>
            </div>
             <div className="px-4 py-3 h-[40px] border  border-[#E5E0DE] bg-[#F9F6F4] rounded-[62px] flex  text-center items-center justify-center hover:scale-105 transition-transform duration-300">
              <a href="/">Experiments</a>
            </div>
          </div>

          <div className='px-7'><img src={bgImage} alt="" className='border border-[#D1DAD7] bg-[#fff] p-2 rounded-3xl  mask-b-from-20% mx-auto'/></div>
          <div className='  bg-gradient-to-t from-[#EBD8FA] via-[#ebd8fa66] to-[#fff0] h-[512px] md:mt-[-500px] sm:mt-[-425px] mt-[-425px]'></div>
        </section>


      </main>

    </div>
  )
}

export default replo