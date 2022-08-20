import React from 'react'

const Header = () => {
  return (
    <div id='home' className='landingimgbgmb xl:landingimgbgdt mt-[30px]  md:mt-[60px] h-[681px] flex items-start'>
       <div className='mt-[100px] mb-[20px] mx-[20px] p-[5px] md:p-[10px]'> 
        <h1 className='md:text-[56px] md:leading-[60px] text-[46px] text-black font-[700] leading-[50px] tracking-[0.0015em]'>The <span className='text-orange'>best</span> sandwiches <br/> on the block.</h1>
        <p className='md:text-[24px] md:my-[20px] md:leading-[36px] text-[20px] text-black font-[500] leading-[32px] my-[15px] tracking-[0.0015em] '>Don’t take our word for it. <br />
Try it for yourself and thank us later.</p>
        <button className='md:px-[15px] md:py-[10px] md:text-[18px] py-[7px] px-[15px] bg-orange rounded-[5px] text-[16px] text-white font-[400]  leading-[29px] tracking-[0.002em] outline-none'>Order A Sandwich</button>
        </div>
    </div>
  )
}

export default Header