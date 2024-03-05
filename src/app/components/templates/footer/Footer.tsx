import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-96 w-screen relative card image-full rounded-none'>
      <figure >
        <Image src={"/footer-bg-img.jpg"} alt='' width={1000} height={100} className='w-full' />
      </figure>
      <div className='card-body container mx-auto pt-80'>
        <div className='flex justify-center gap-10 h-full items-center '>
          <div className="w-1/4">
            <div className='footer-title'>
              Location
            </div>
            <ul className='footer-li'>
              <li>New Baneshowr, Kathmandu</li>
              <li>Mon-Fri: 11AM - 11PM</li>
              <li>Sat-Sun: 11AM - 8PM</li>
              <li>+977-9863-987456</li>
            </ul>
          </div>
          <div className="w-1/4">
            <div className='footer-title'>
            About Us
            </div>
            <ul className='footer-li'>
              <li>Our Team</li>
              <li>Our Menu</li>
              <li>Our Specials</li>
              <li>Our Events</li>
              <li>Job Opportunities</li>
            </ul>
          </div>
          <div className="w-1/4">
            <div className='footer-title'>
            Quick Menu
            </div>
            <ul className='footer-li'>
              <li>Burgers</li>
              <li>Pizza</li>
              <li>Chicken Nugget</li>
              <li>Drinks</li>
              <li>Specials</li>
            </ul>
          </div>
          <div className="w-1/4">
            <div className='footer-title'>
            Social Medias
            </div>
            <ul className='footer-li'>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>X</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
