import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="mySwiper">
        <h2>Take a glance at our products!</h2>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="swiper"
        >
          <SwiperSlide
            className="swiper-slide
        "
          >
            <img
              src="https://www.corebase-clothing.com/cdn/shop/products/Premium-T-shirt-Black-1080-new-230223_79bfcb44-4682-4fc5-869d-2efc4f7fe20c.jpg?v=1677167966"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://www.corebase-clothing.com/cdn/shop/products/Premium-T-shirt-Black-1080-new-230223_79bfcb44-4682-4fc5-869d-2efc4f7fe20c.jpg?v=1677167966"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://www.corebase-clothing.com/cdn/shop/products/Premium-T-shirt-Black-1080-new-230223_79bfcb44-4682-4fc5-869d-2efc4f7fe20c.jpg?v=1677167966"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
