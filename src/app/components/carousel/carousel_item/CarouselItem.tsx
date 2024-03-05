import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CarouselItemProps {
    image: string,
    text: string,
    nextid: string,
    previd: string,
    currid: string,
    width?: number,
    height?: number,
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image, text, nextid, previd, currid, width, height }) => {
    return (
        <div className='carousel-item w-full font-serif font-bold relative z-0' id={`${currid}`}>
            <div className='w-full flex justify-center'>
                <Image src={image} alt='image' className='' width={width} height={height} />
            </div>
            <div className='text-[18rem] text-center absolute -z-[2] leading-snug text-cs-ascent'>
                {text}
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`${previd}`} className="custom-carousel-btn">❮</a>
                <a href={`${nextid}`} className="custom-carousel-btn">❯</a>
            </div>
        </div>
    )
}

export default CarouselItem
