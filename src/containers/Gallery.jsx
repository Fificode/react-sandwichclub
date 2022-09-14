import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Instagram from '../components/Instagram'
import SandwichGallery from '../components/SandwichGallery'
import firstimg from '../assets/firstimg.png'
import secondimg from '../assets/secondimg.png'
import thirdimg from '../assets/thirdimg.png'
import fourthimg from '../assets/fourthimg.png'
import fifthimg from '../assets/Reubenette.png'
import sixthimg from '../assets/Porko.png'
import seventhimg from '../assets/roastbeef.png'
import eightimg from '../assets/Olepastrami.png'
import firstimgPH  from '../placeholderimages/firstimgPH.jpg'
import secondimgPH  from '../placeholderimages/secondimgPH.jpg'
import thirdimgPH  from '../placeholderimages/thirdimgPH.jpg'
import fourthimgPH  from '../placeholderimages/fourthimgPH.jpg'
import fifthPH  from '../placeholderimages/ReubenettePH.jpg'
import sixthPH  from '../placeholderimages/PorkoPH.jpg'
import seventhPH  from '../placeholderimages/roastbeefPH.jpg'
import eightPH  from '../placeholderimages/OlepastramiPH.jpg'

const Gallery = () => {
    
  return (
    <div>
        <Instagram />
        <div className='my-[20px] '>
          <Swiper
          watchOverflow={true}
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        
        breakpoints={{
           768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
       1024: {
 slidesPerView: 3,
          slidesPerGroup: 3,
         
       },
       1440: {
 slidesPerView: 4,
          slidesPerGroup: 4,
       },
       
      }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        
        style={{
    "--swiper-pagination-color": "#ffa500",
    "--swiper-navigation-color": "#ffa500",
  }}
      >
        <SwiperSlide><SandwichGallery image={firstimg} placeholderimage={firstimgPH}  /></SwiperSlide>
        <SwiperSlide><SandwichGallery image={secondimg} placeholderimage={secondimgPH}  /></SwiperSlide>
        <SwiperSlide><SandwichGallery image={thirdimg} placeholderimage={thirdimgPH} /></SwiperSlide>
        <SwiperSlide><SandwichGallery image={fourthimg} placeholderimage={fourthimgPH}/></SwiperSlide>
        <SwiperSlide><SandwichGallery image={fifthimg} placeholderimage={fifthPH}/></SwiperSlide>
        <SwiperSlide><SandwichGallery image={sixthimg} placeholderimage={sixthPH}/></SwiperSlide>
        <SwiperSlide><SandwichGallery image={seventhimg} placeholderimage={seventhPH}/></SwiperSlide>
        <SwiperSlide><SandwichGallery image={eightimg} placeholderimage={eightPH}/></SwiperSlide>
        </Swiper>
       
    </div>
    </div>
  )
}

export default Gallery