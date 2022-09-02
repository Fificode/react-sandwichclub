import React from 'react'

const Product = ({id, image, title, price}) => {
  return (
    <>
      <div className="w-[300px] h-[300px] shadow-md mt-[30px]">
       <div className="flex flex-row relative ">
<img src={image} alt={title} className='h-[200px] w-[100%]'/>
<div className="absolute right-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>
</div>
</div>
<p className='text-[18px] leading-[29px] font-[600] tracking-[0.0015em] text-black text-center my-[10px]'>title</p>
<p className='text-[18px] leading-[29px] font-[400] tracking-[0.0015em] text-black text-center my-[5px]'>&#8358;price</p>
 </div>
    </>
  )
}

export default Product