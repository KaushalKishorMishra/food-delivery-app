import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <div className='w-full font-serif font-bold relative z-0'>
                <div className='w-full flex justify-center'>
                    <Image src={'/burger-carosule.png'} alt='image' className='object-contain w-auto pt-36' width={1000} height={800} />
                </div>
                <div className='text-[18rem] text-center absolute -z-[2] leading-snug tracking-tight text-cs-ascent top-0 drop-shadow-2xl'>
                    Finger Licking Good
                </div>
            </div>
        </div>
    )
}

export default HeroSection
