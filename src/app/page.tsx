'use client'

import HoverNavbar from "./components/templates/navbar/HoverNavbar";
import HeroSection from "./components/templates/hero_section/HeroSection";
import Card from "./components/card/Card";
import SpecialCard from "./components/card/SpecialCard";
import Footer from "./components/templates/footer/Footer";
import Testimonial from "./components/testimonial/Testimonial";
import { useEffect, useState } from "react";
import FixedNavbar from "./components/templates/navbar/FixedNavbar";
import Carousel from "./components/carousel/Carousel";

export default function Home() {

  const [navbar, setNavbar] = useState(<div className="pt-5"><HoverNavbar /></div>)

  const handleScroll = () => {
    window.scrollY > 100 ? setNavbar(<FixedNavbar />) : setNavbar(<div className="pt-5"><HoverNavbar /></div>)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return (
    <div className="bg-cs-primary w-screen">
      {/* Navbar */}
      {navbar}

      {/* hero section */}
      <HeroSection />
      
      {/* best selling section */}
      <div className="container lg:mx-auto w-full">
        <div className="text-center text-6xl font-serif font-bold tracking-wide text-cs-ascent">
          The Best We Offer
        </div>
        <div className="flex flex-wrap mt-8 gap-y-10 gap-x-10 justify-center w-full">
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="w-1/2 flex flex-col gap-2">
            <SpecialCard />
            <SpecialCard />
          </div>
        </div>
      </div>

      {/* delivery options */}
      <div className=" bg-cs-ascent mt-5">
        <div className="text-center text-6xl font-serif font-bold tracking-wide text-cs-primary py-10">
          Delivery Paths Available
        </div>
        <div className="card lg:card-side shadow-xl pt-10 rounded-none items-center">
          <figure><img src="/chicken-leg-and-hand.png" alt="Album" className="transform -scale-x-100" /></figure>
          <div className="card-body">
            <h2 className="card-title text-9xl font-Madimi text-cs-primary">Home Delivery</h2>
            <p className="text-2xl font-serif tracking-widest">Get your food delivered to your doorsteps</p>
            <h2 className="card-title text-9xl font-Madimi text-cs-primary">Take Away</h2>
            <p className="text-2xl font-serif tracking-widest">Come and receive your food at the restaurant</p>
            <h2 className="card-title text-9xl font-Madimi text-cs-primary">Drive Through</h2>
            <p className="text-2xl font-serif tracking-widest">Come and eat your food in the drive through/</p>

          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className='py-5 lg:mx-auto w-full'>
        <div className='text-center text-6xl font-serif font-bold tracking-wide text-cs-ascent py-10'>Testimonial</div>
        <div className="flex flex-wrap mt-8 gap-y-10 gap-x-10 justify-center w-full">
          <Testimonial image={"/users images/middleagedman-glasses.jpg"} testimonial={"The food delivery was awesomely fast."} name={"User name"} />
          <Testimonial image={"/users images/pink-hair.jpg"} testimonial={"The food delivery was awesomely fast."} name={"User name"} />
          <Testimonial image={"/users images/youngman-glasses.jpg"} testimonial={"The food delivery was awesomely fast."} name={"User name"} />
          <Testimonial image={"/users images/colourful-girl.jpg"} testimonial={"The food delivery was awesomely fast."} name={"User name"} />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
