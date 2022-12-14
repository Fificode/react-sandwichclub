import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Sandwich = ({image, name, price}) => {
  return (
    <div className='w-[290px] my-3 md:mx-3 shadow-sm md:w-[401px]'>
      <LazyLoadImage src={image} effect="blur"
       className='h-[311px] w-[100%]'
        alt={name}/>
       
        <div className="flex flex-col justify-center items-center h-[162px]">
            <p className='text-[18px] leading-[29px] font-[600] tracking-[0.0015em] text-black text-center'>{name}</p>
            <p className="text-[18px] leading-[29px] font-[400] tracking-[0.0015em] text-black text-center">&#8358;{price}</p>
        </div>
    </div>
  )
}

export default Sandwich