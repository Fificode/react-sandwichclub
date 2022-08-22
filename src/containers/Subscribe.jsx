import React from 'react'

const Subscribe = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-grey p-[20px] mb-[30px]'>
        <div className="m-[20px]">
        <h1 className="text-[40px] leading-[60px]  md:text-[48px] font-[600] tracking-[0.0015em] md:leading-[72px] text-black text-center">Subscribe To Our Newsletter</h1>
        <p className="text-[20px] leading-[30px]  md:text-[24px] font-[500] tracking-[0.0015em] md:leading-[36px] text-black text-center">Be updated about news, deals and offers, coupons and whatnot.<br/>
Who knows? You may get lucky and get free sandwiches for a month!</p>
</div>
<div className="flex flex-row m-[10px]">
<input type="text" name="Text" placeholder='Enter your email address' className='lg:w-[800px] md:w-[600px] h-[50px] w-[200px] rounded-[5px] bg-white outline-orange font-[600] text-[18px] leading-[29px] tracking-[0.0015em] text-black px-2 mx-[10px]' />
<button className='px-[12px] py-[7px] bg-orange rounded-[5px] text-white font-[500] leading-[29px] tracking-[0.0015em] outline-none'>Subscribe</button>
</div>
    </div>
  )
}

export default Subscribe