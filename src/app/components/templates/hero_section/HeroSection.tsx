import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full font-serif font-bold relative z-0'>
            <div className='w-full flex justify-center h-full'>
                <Image src={'/burger-carousel.png'} alt='Burger Image' className='object-contain w-auto pt-36' priority width={650} height={600} />
            </div>
            <div className='md:text-[14rem] text-center absolute -z-[2] leading-snug tracking-tight text-cs-ascent top-0 drop-shadow-2xl'>
                Finger Licking Good
            </div>
        </div>
    )
}

export default HeroSection
