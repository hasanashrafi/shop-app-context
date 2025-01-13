import React, { useState, useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import Loader from './Loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { shortestTitle } from '../utils/helper';

function Slider() {
  const products = useProducts();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products) {
      setIsLoading(false);
    }
  }, [products]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='h-64 mx-auto w-full p-2 my-5 relative z-10'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {products && products.map((product) => (
          <SwiperSlide key={product.id} className='p-2 w-fit'>
            <img src={product.image} className='rounded-lg w-full md:w-1/2 mx-auto md:h-72 h-56' alt={product.title} />
            <p className='text-black text-center'>{shortestTitle(product.title)}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
}

export default Slider;