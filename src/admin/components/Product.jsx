import React from 'react'

const Product = ({id, image, title, price}) => {
  return (
    <div className='bg-black w-[300px] h-[300px] shadow-sm flex flex-col items-center justify-center '>
       <div className=" ">
<img src={image} alt={title} className='h-[200px] w-[100%]'/>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>

</div>
<p className='text-[18px] leading-[29px] font-[600] tracking-[0.0015em] text-black text-center'>{title}</p>
<p className='text-[18px] leading-[29px] font-[400] tracking-[0.0015em] text-black text-center'>&#8358;{price}</p>
 <small className='text-[13px] leading-[29px] font-[400] tracking-[0.0015em] text-black text-center border-solid border-[2px] rounded-[7px] px-[5px] py-[12px] '>{id}</small>
    </div>
  )
}

export default Product