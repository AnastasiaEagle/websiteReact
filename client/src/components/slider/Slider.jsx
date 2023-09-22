import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './sliderStyle.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import React, { useRef, useState } from 'react';


export const Slider = () =>{
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='slider'>
              <Swiper
              style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={4}
                navigation={true}
              //   thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                  <SwiperSlide>
                  <img src='img/voin.png' alt="Фото" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src='img/voin.png' alt="Фото" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src='img/voin.png' alt="Фото" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src='img/voin.png' alt="Фото" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src='img/voin.png' alt="Фото" />
                  </SwiperSlide>
              </Swiper>
              <Swiper
              // onSwiper={setThumbsSwiper}
              spaceBetween={4}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
          >
              <SwiperSlide>
                  <img src='img/voin.png' alt="Фото" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src='img/voin.png' alt="Фото" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src='img/voin.png' alt="Фото" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src='img/voin.png' alt="Фото" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src='img/voin.png' alt="Фото" />
                  </SwiperSlide>
          </Swiper>
        </div>
      )
}