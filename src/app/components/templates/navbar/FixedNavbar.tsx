import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Logo from "../../../../../public/logo.png"
import { FaShoppingBag } from 'react-icons/fa'

const FixedNavbar = () => {
    return (
        <>
            <nav className='flex justify-between items-center py-3 px-10 bg-white text-xl font-Madimi fixed top-0 w-full z-20'>
                <div className='flex justify-around w-1/4 items-center'>
                    <div className='w-1/6'>
                        <Link href={"#"} className=''>
                            <Image src={Logo} alt='Logo' />
                        </Link>
                    </div>
                    <div className='w-5/6 ps-4'>
                        <ul className='flex justify-between'>
                            <li>
                                <Link href={"#"}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <div className='flex flex-col text-end'>
                        Order by phone
                        <span className='text-cs-primary text-2xl'>+977 - 9862 - 789632</span>
                    </div>
                    <div className='flex flex-row group items-center text-sm bg-slate-100 p-3 rounded-full ms-5'>
                        <span className='pe-2 group-hover:text-cs-primary text-base'><FaShoppingBag /></span>
                        0
                    </div>
                    <button className="btn btn-outline btn-cs-primary text-cs-primary rounded-full text-xl hover:bg-cs-primary hover:btn-cs-primary ms-5 ">View Full Menu</button>
                </div>
            </nav>
        </>
    )
}

export default FixedNavbar
