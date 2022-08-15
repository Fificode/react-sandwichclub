import React from 'react'

const Instagram = () => {
  return (
    <div>
        <div className='flex md:flex-row md:justify-between flex-col'>
        <div className="flex flex-col p-5 mt-[10px]">
          <h1 className='text-[40px] md:text-[48px] font-[600] leading-[72px] tracking-[0.0015em] text-black'>Stalk Our Instagram</h1>
          <p className="text-[20px] md:text-[24px] font-[500] leading-[36px] tracking-[0.0015em] text-black pl-1 pt-1">Give us a follow too.</p>
        </div>
        <div className='px-5 md:px-5 md:py-3 md:mt-[50px]'>
          <button className='px-[11px] py-[8px] bg-orange rounded-[5px] text-white font-[500] leading-[29px] tracking-[0.0015em] outline-none'>Open In Instagram</button>
        
        </div>
      </div>
    </div>
  )
}

export default Instagram