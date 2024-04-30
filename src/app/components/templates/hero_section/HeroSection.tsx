"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

// importing gsap
import gsap from 'gsap';

// importing gsap ScrollTrigger
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// activating the plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        gsap.fromTo(el, { scale: 0 },
            {
                scrollTrigger: {
                    trigger: el,
                    scrub: 3,
                },
                scale: 1.2,
                duration: 3,
            })
    }, [])
    return (
        <div className='w-full font-serif font-bold relative z-0'>
            <div className='w-full flex justify-center h-full' ref={ref}>
                <Image src={'/burger-carousel.png'} alt='Burger Image' className='object-contain w-auto pt-36' priority width={650} height={600} />
            </div>
            <div className='md:text-[14rem] text-center absolute -z-[2] leading-snug tracking-tight text-cs-ascent top-0 drop-shadow-2xl'>
                Finger Licking Good
            </div>
        </div>
    )
}

export default HeroSection
