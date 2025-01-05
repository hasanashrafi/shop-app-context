import React, { useState, useEffect } from 'react'

import { useProducts } from '../context/ProductContext';
import Loader from './Loader';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

function Slider() {
    const products = useProducts()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (products) {
            setIsLoading(false)
        }
    }, [products])

    if (isLoading) {
        return <Loader />
    }

    return (

        <div className='h-64 mx-auto w-full  p-2 my-5'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                modules={[EffectCoverflow, Pagination]}
                className="mySwiper">
                {
                    products && products.map((product) =>

                        <SwiperSlide 
                        key={product.id} 
                        className=' shadow-md  ' >
                            <img src={product.images[1]} className='rounded-lg w-full md:h-96 h-56 ' />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>

    )
}

export default Slider