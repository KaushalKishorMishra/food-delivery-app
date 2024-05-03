import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { TiThMenu } from 'react-icons/ti'

const HoverNavbar = () => {
  return (
    <>
      <nav className='flex justify-between items-center py-3 px-10 rounded-full mx-5 bg-white text-xl font-Madimi'>
        {/* navigation and  logo */}
        <div className='flex items-center w-full md:w-1/2'>
          {/* logo */}
          <Link href='/' className='flex justify-start'>
            <Image src={"/GrubHub.png"} alt='Logo' width={200} height={100} />
          </Link>
          {/* navigation */}
          <div className='w-1/2 justify-start flex'>
            <ul className='hidden md:flex justify-between w-full text-xl'>
              <li>
                <Link href='/' className='text-xl'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/' className='text-xl'>
                  Menu
                </Link>
              </li>
              <li>
                <Link href='/' className='text-xl'>
                  About
                </Link>
              </li>
              <li>
                <Link href='/' className='text-xl'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* drawer for small screen */}

          <div className="drawer w-1/2 flex justify-end md:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="flex justify-end">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn btn-outline text-cs-primary hover:bg-cs-primary w-full font-extrabold">
                <TiThMenu />
              </label>
            </div>
            <div className="drawer-side z-10">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <Link href='/' className='btn text-xl'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/' className='btn text-xl'>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href='/' className='btn text-xl'>
                    About
                  </Link>
                </li>
                <li>
                  <Link href='/' className='btn text-xl'>
                    Contact
                  </Link>
                </li>
                <li>
                  <div className='flex flex-col text-center bg-cs-ascent active:bg-cs-ascent hover:bg-cs-ascent btn-disabled'>
                    Order by phone
                    <span className='text-cs-primary text-2xl'>+977 - 9862 - 789632</span>
                  </div>
                </li>
                <li>
                  <div className='flex flex-row rounded-full border text-xl justify-center py-4 btn-disabled'>
                    Cart:
                    <span className='px-2'><FaShoppingBag /></span>
                    0
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* actions */}
        <div className='hidden ms-2 md:flex'>
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

        </div>
      </nav>
    </>
  )
}

export default HoverNavbar
