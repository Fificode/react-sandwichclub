import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper";
import Instagram from '../components/Instagram'
// import SandwichGallery from '../components/SandwichGallery'
// import leftarrow from '../assets/leftarrow.png'
// import rightarrow from '../assets/rightarrow.png'
// import firstimg from '../assets/firstimg.png'
// import secondimg from '../assets/secondimg.png'
// import thirdimg from '../assets/thirdimg.png'
// import fourthimg from '../assets/fourthimg.png'
// import fifthimg from '../assets/Reubenette.png'
// import sixthimg from '../assets/Porko.png'
// import seventhimg from '../assets/roastbeef.png'
// import eightimg from '../assets/Olepastrami.png'

const Gallery = () => {
    
  return (
    <div>
        <Instagram />
        {/* <div className='relative my-[20px]'>
            <div className="flex flex-row">
                <img src={leftarrow} alt="left arrow" className='absolute top-[20%] left-[3%] cursor-pointer' />
                <img src={rightarrow} alt="right arrow" className='absolute top-[20%] right-[3%] cursor-pointer' />
            </div>
       
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        
      >
        <SwiperSlide><SandwichGallery image={firstimg} /></SwiperSlide>
        <SwiperSlide><SandwichGallery image={secondimg} /></SwiperSlide>
        <SwiperSlide><SandwichGallery image={thirdimg} /></SwiperSlide>
        <SwiperSlide><SandwichGallery image={fourthimg}/></SwiperSlide>
        <SwiperSlide><SandwichGallery image={fifthimg}/></SwiperSlide>
        <SwiperSlide><SandwichGallery image={sixthimg}/></SwiperSlide>
        <SwiperSlide><SandwichGallery image={seventhimg}/></SwiperSlide>
        <SwiperSlide><SandwichGallery image={eightimg}/></SwiperSlide>
        </Swiper>
       
    </div> */}
    </div>
  )
}

export default Gallery