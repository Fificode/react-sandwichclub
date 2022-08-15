import React from 'react'

const Sandwich = ({image, title, price }) => {
  return (
    <div className='w-[290px] md:m-3 shadow-sm md:w-[401px]'>
        <img src={image} alt="Sandwich" className='h-[311px] w-[100%]' />
        <div className="flex flex-col justify-center items-center h-[162px]">
            <p className='text-[18px] leading-[29px] font-[600] tracking-[0.0015em] text-black text-center'>{title}</p>
            <p className="text-[18px] leading-[29px] font-[400] tracking-[0.0015em] text-black text-center">&#8358;{price}</p>
        </div>
    </div>
  )
}

export default Sandwich