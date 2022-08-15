import React from 'react'

const SandwichGallery = ({image}) => {

  return (
    <div className='mx-[10px]'>
        <img src={image} alt="Sandwich gallery" className='w-[265px] h-[265px] rounded-[5px]' />
    </div>
  )
}

export default SandwichGallery