'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'

// import Burger from '../../../../public/burger-carosule.png'

const CarouselItem = dynamic(() => import('./carousel_item/CarouselItem'))

const Carousel = () => {
    return (
        <div className="">
            <CarouselItem image={'/burger-carosule.png'} text="Delicious Burger" nextid="#slide2" previd="#slide3" currid="slide1" width={1000} height={500} />
            {/* <CarouselItem image={'/chicken-leg.png'} text="Awesome Chickens" nextid="#slide3" previd="#slide1" currid="slide2" width={640} height={491} />
            <CarouselItem image={'/burger-carosule.png'} text="Cool Cakes and Bakes" nextid="#slide1" previd="#slide2" currid="slide3" width={500} height={500} /> */}
        </div>
    )
}

export default Carousel
