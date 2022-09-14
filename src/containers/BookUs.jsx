import React from 'react';
import secondimg from '../assets/landingimgtwo.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import secondimgPH from '../placeholderimages/secondimgPH.jpg';

const BookUs = () => {
  return (
    <div id='cateringservices' className='flex flex-col items-center md:flex-row md:justify-center md:my-[30px]'>
        <div className='my-[30px] w-[280px] md:w-[500px] md:mx-[20px]'>
        <h1 className="text-[40px] leading-[60px]  md:text-[48px] font-[600] tracking-[0.0015em] md:leading-[72px] text-black">Let Us <span className='text-orange'>Cater</span> To Your Needs</h1>
        <h2 className="text-[20px] md:text-[24px] font-[500] tracking-[0.0015em] leading-[36px] text-black my-[20px]">Really.</h2>
        <p className="text-[15px] md:text-[18px] font-[400] leading-[29px] text-black tracking-[0.0015em] my-[15px]">Let us guess: </p>
<p className='text-[15px] md:text-[18px] font-[400] leading-[29px] text-black tracking-[0.0015em] my-[15px]'>You’re planning an event and would like our fantabulous sandwiches to make a special appearance? We would be absolutely delighted!</p>
<p className='text-[15px] md:text-[18px] font-[400] leading-[29px] text-black tracking-[0.0015em] my-[15px]'>All you need to do is fill a simple form giving us the deets and we’ll get back to you. Sound good? Great! Click the button below and let’s get this party started. Whoop whoop (yes, we just did that).</p>
<button className='px-[12px] py-[7px] bg-orange rounded-[5px] text-white font-[500] leading-[29px] tracking-[0.0015em] outline-none my-[10px]'>Book Us</button>
</div>
<div className='w-[280px] h-[300px] mx-[20px] my-[20px] md:w-[700px] md:h-[570px] md:mx-[30px]'>
   <LazyLoadImage src={secondimg}  PlaceholderSrc={secondimgPH}  effect="blur"
        alt="Sandwich on a plate"
        className='w-[100%] h-[100%]'
      />
   
</div>
    </div>
  )
}

export default BookUs