import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Card = () => {
    return (
        <div className="card min-w-96 w-1/4 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='font-serif tracking-widest text-xl'>{"CHICKEN"}</div>
                <div className="card-title text-4xl font-bold font-Madimi hover:text-cs-primary hover:ease-in-out duration-300">{"Double Pattee + Juicy + Thick Burger"}</div>
            </div>
            <figure>
                <Image src={"/card images/burger-card.png"} alt="Burger" width={600} height={500} className='h-72' />
            </figure>
            <div className="card-body flex flex-row w-full justify-between items-center">
                <div className='flex flex-col text-xl font-serif tracking-widest '>
                    Price
                    <span className='text-4xl font-Madimi hover:text-cs-primary hover:ease-in-out duration-300'>Rs.{800}</span>
                </div>
                <div className="card-actions">
                    <button className="btn btn-circle border-2 border-cs-primary bg-white hover:bg-cs-primary text-2xl font-thin text-cs-primary hover:text-white"><FaPlus /></button>
                </div>
            </div>
        </div>
    )
}

export default Card
