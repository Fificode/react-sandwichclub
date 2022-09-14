import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const SandwichGallery = ({image, placeholderimage}) => {

  return (
    <div className='px-[10px]'>
        <LazyLoadImage src={image}  PlaceholderSrc={placeholderimage}  effect="blur"
        alt={"Sandwich gallery"} className="w-[230px] h-[230px] lg:w-[265px] lg:h-[265px] rounded-[5px]"/>
       
    </div>
  )
}

export default SandwichGallery