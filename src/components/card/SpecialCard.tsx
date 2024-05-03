import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const SpecialCard = () => {
    return (
        <div className="card w-full bg-base-100 shadow-xl image-full h-80">
            <figure className='h-full w-full'>
                <Image src="/card images/black-burger-card.jpg" alt="Shoes" width={700} height={100} className='w-full h-full' />
            </figure>
            <div className="card-body flex justify-between">
                <div>
                    <div className='font-serif tracking-widest text-xl'>Todays Special</div>
                    <div className="card-title text-4xl font-bold font-Madimi hover:text-cs-primary hover:ease-in-out duration-300">Dark + Thick Jucy +Hot Black Bun Burger</div>
                </div>
                <div className="card-actions justify-between items-center">
                    <div className='flex flex-col text-xl font-serif tracking-widest '>
                        Price
                        <span className='text-4xl font-Madimi hover:text-cs-primary hover:ease-in-out duration-300'>Rs.{800}</span>
                    </div>
                    <button className="btn btn-circle border-2 border-cs-primary hover:border-cs-primary bg-transparent hover:bg-cs-primary text-2xl font-thin text-cs-primary hover:text-white"><FaPlus /></button>
                </div>
            </div>
        </div>
    )
}

export default SpecialCard
