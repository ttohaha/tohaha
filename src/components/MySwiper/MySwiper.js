import React from 'react'
import './MySwiper.css'

import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs'
import 'swiper/css/pagination';

import slide1 from '../../img/slide1.jpg'
import slide2 from '../../img/slide2.jpg'
import slide3 from '../../img/slide3.jpg'
import slide4 from '../../img/slide4.jpg'
import slide5 from '../../img/slide5.jpg'
import slide6 from '../../img/slide6.jpg'
import slide7 from '../../img/slide7.jpg'
import slide8 from '../../img/slide8.jpg'
import slide9 from '../../img/slide9.jpg'
import slide10 from '../../img/slide10.jpg'
import slide11 from '../../img/slide11.jpg'

SwiperCore.use([Navigation,Pagination])


function MySwiper() {
    const slids = [slide1,slide2,slide3,slide4,slide5,slide6,slide7,slide8,slide9,slide10,slide11]

    const slider = slids.map((item, index)=>{
        return <SwiperSlide  className='slide_block' key={index} tag='li'><div className='img_slide_block'><img src={item} alt={`Slide ${index}`} className='img_slide'/></div></SwiperSlide>
    })

    return (
        <>
        <div className='swiper_main_el'>
            <Swiper className='swiper_block' tag='section' wrapperTag='ul' className='slider' spaceBetween={25} navigation pagination>
                {slider}
            </Swiper>
        </div>
        <div className='no_swiper_block'><img className='no_swiper_block_img' src={slide1} alt='no slide'/></div>
        </>
    )
  }
  
  export default MySwiper

// function Swiper() {
//   return (
//     <HeroSlider
//         slidingAnimation='left_to_right'
//         orientation='horizontal'
//         height={"600px"}
//         autoplay
//         controller={{
//             initialSlide: 1,
//             slidingDuration: 500,
//             slidingDelay: 0,
//         }}
//     >
//         <Slide
//             style={{width:'100%', height:'600px', backgroundColor:'rgb(1, 96, 100)'}}
//         />
//         <Slide
//             style={{width:'100%', height:'600px', backgroundColor:'rgb(2, 121, 125)'}}
//         />
//         <Slide
//             style={{width:'100%', height:'600px', backgroundColor:'rgb(1, 96, 100)'}}
//         />
//         <Slide
//             style={{width:'100%', height:'600px', backgroundColor:'rgb(2, 121, 125)'}}
//         />

//     </HeroSlider>
//   )
// }

// export default Swiper