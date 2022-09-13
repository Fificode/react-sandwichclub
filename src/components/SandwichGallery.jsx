import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

const SandwichGallery = ({image}) => {

  return (
    <div className='px-[10px]'>
        <LazyLoadImage src={image}
        alt={"Sandwich gallery"} className="w-[230px] h-[230px] lg:w-[265px] lg:h-[265px] rounded-[5px]"/>
       
    </div>
  )
}

export default SandwichGallery