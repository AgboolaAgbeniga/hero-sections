import React, { useState } from 'react'
import logo from '../socialabiz/assets/vector.svg'
import arrow from '../socialabiz/assets/arrow.svg'
import analytics from '../socialabiz/assets/analytics.svg'
import { Menu, X } from 'lucide-react'

const Socialabiz = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full bg-white font-roboto">
      <main className="pt-11">
        {/* Navbar */}
        <div className="container mx-auto px-4">
          <nav
            className="
              backdrop-blur-md bg-[#eeeeee85] border border-[#CBC9C3] 
              shadow-[0_6px_20px_0_rgba(0,0,0,0.1)]
              h-14 flex items-center justify-between rounded-3xl
              w-full xl:w-[1000px] mx-auto md:pr-2 pl-4 pr-4
            "
          >
            {/* Logo */}
            <div>
              <a href="/" className="flex items-center gap-2">
                <img src={logo} alt="logo" />
                <p className="font-bold text-3xl tracking-[-0.01em]">socilabiz</p>
              </a>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 text-xl text-[#54555D]">
              <a href="/">About us</a>
              <a href="/">Testimonials</a>
              <a href="/">Contacts</a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex bg-[#0076FF] h-[39px] px-5 rounded-2xl text-center items-center justify-center font-bold text-xl text-white">
              <a href="/">Pricing</a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#54555D]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden container mx-auto px-4 flex flex-col items-center gap-4 mt-4 text-lg text-[#54555D]">
            <a href="/">About us</a>
            <a href="/">Testimonials</a>
            <a href="/">Contacts</a>
            <div className="bg-[#0076FF] h-[39px] px-5 rounded-2xl flex text-center items-center justify-center font-bold text-xl text-white">
              <a href="/">Pricing</a>
            </div>
          </div>
        )}

        {/* Hero Section (unchanged) */}
        <section className="pt-17">
          <div className="flex gap-2 mx-auto justify-center items-center h-[39px] w-[247px] rounded-3xl border border-[#CBC9C3]">
            <div className="flex items-center justify-center rounded-full w-[25px] h-[25px] border border-[#1ACC6D]">
              <div className="bg-[#1ACC6D] rounded-full w-[13px] h-[13px]" />
            </div>
            <p className="text-xl">Only X spots left</p>
            <div><img src={arrow} alt="" /></div>
          </div>

          <div className="leading-16 mt-8 px-4 md:px-0">
            <p className="font-bold text-[64px] text-center">
              Time-saving <span className="handwritten-underline">copywriting</span>
            </p>
            <p className="inline-block text-center w-full font-bold text-[64px] text-transparent bg-clip-text bg-gradient-to-t from-[#54555D] to-[#000000]">
              for business owners
            </p>
          </div>

          <p className="text-2xl text-[#54555D] text-center mt-6 px-6">
            Save yourself precious hours, while we write <br class="hidden sm:block" />content for your emails & social media
          </p>

          <div className="bg-[#0076FF] h-[39px] w-36 rounded-2xl flex text-center mx-auto mt-16 items-center justify-center font-bold text-xl text-white">
            <a href="/">Get Stared</a>
          </div>

          <div className="bg-gradient-to-t from-[#0076FF] to-[#fff] mt-12">
            <img className="mx-auto max-w-full" src={analytics} alt="analytics" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Socialabiz
