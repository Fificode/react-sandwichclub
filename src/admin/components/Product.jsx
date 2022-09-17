import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Product = ({ image, name, price}) => {
  return (
    <>
      <div className="w-[300px] h-[300px] shadow-md mt-[30px]">
       <div className="flex flex-row relative ">
<img src={image} alt={name} className='h-[200px] w-[100%]'/>
<Popup trigger={<div className="absolute right-0 mt-[5px]"><button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg></button></div>} 
     position="right center" >
    <div className="flex flex-col items-center">  
    <div className=""><button className='text-[18px] leading-[29px] font-[600] tracking-[0.0015em] text-black text-center p-1'>Edit</button></div>
      <div><button className='text-[18px] leading-[29px] font-[600] tracking-[0.0015em] text-black text-center p-1'>Delete</button>
      </div>
      </div>
    </Popup>


</div>
<p className='text-[18px] leading-[29px] font-[600] tracking-[0.0015em] text-black text-center my-[10px]'>{name}</p>
<p className='text-[18px] leading-[29px] font-[400] tracking-[0.0015em] text-black text-center my-[5px]'>&#8358;{price}</p>
 </div>
    </>
  )
}

export default Product