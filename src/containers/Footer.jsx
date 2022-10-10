import React from 'react'
import twitter from '../assets/tw.png'
import facebook from '../assets/fb.png'
import instagram from '../assets/ig.png'

const Footer = () => {
  return (
    <div id="contact" className="bg-orange h-[420px]  md:h-[320px]  flex flex-col justify-center items-center">
<div className="flex flex-col md:flex-row justify-between py-[10px] ">
    <button className="text-white md:text-[18px]font-[500] md:font-[600] tracking-[0.002em] md:tracking-[0.02em] leading-[29px] px-[5px] md:px-[10px]">Home</button>
    <button className="text-white md:text-[18px]font-[500] md:font-[600] tracking-[0.002em] md:tracking-[0.02em] leading-[29px] px-[5px] md:px-[10px]">About Us</button>
    <button className="text-white md:text-[18px]font-[500] md:font-[600] tracking-[0.002em] md:tracking-[0.02em] leading-[29px] px-[5px] md:px-[10px]">Menu</button>
    <button className="text-white md:text-[18px]font-[500] md:font-[600] tracking-[0.002em] md:tracking-[0.02em] leading-[29px] px-[5px] md:px-[10px]">Catering Services</button>
    <button className="text-white md:text-[18px]font-[500] md:font-[600] tracking-[0.002em] md:tracking-[0.02em] leading-[29px] px-[5px] md:px-[10px]">Contact</button>
    <button className="text-white md:text-[18px]font-[500] md:font-[600] tracking-[0.002em] md:tracking-[0.02em] leading-[29px] px-[5px] md:px-[10px]">Locations</button>
</div>
<div className="flex flex-row py-[10px]">
    <img src={twitter} alt="twitter logo" className='w-[34px] h-[34px] mx-[5px] cursor-pointer'/>
    <img src={facebook} alt="facebook logo" className='w-[34px] h-[34px] mx-[5px] cursor-pointer'/>
    <img src={instagram} alt="instagram logo" className='w-[34px] h-[34px] mx-[5px] cursor-pointer'/>
</div>
<p className='text-[15px] md:text-[18px] font-[500] tracking-[0.0015em] leading-[29px] text-center py-[10px] text-white'>+(234) 012 345 6789 • hello@thesandwichclub.ng</p>
<p className="py-[10px] text-[15px] md:text-[18px] font-[500] leading-[29px] text-center tracking-[0.0015em] text-white">
    ©2019 The Sandwich Club NG - Atarah <br/>
Satisfying tastebuds one sandwich at a time. <br/>
Developed by Firdaws Lamidi.
</p>
    </div>
  )
}

export default Footer