import Aboutus from '@/components/Aboutus'
import After from '@/components/After'
import Blog from '@/components/Blog'
import Businesses from '@/components/Businesses'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Hero from '@/components/Hero'
import Service from '@/components/Service'
import ServiceSlider from '@/components/Serviceslider'
import Transformations from '@/components/Transformations'
import TrustedExperts from '@/components/TrustedExperts'
import Works from '@/components/Works'
import React from 'react'


const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Service/>
      <Businesses/>
      <After/>
      <Transformations/>
      <Aboutus/>
      <Works/>
      <Blog/>
      <TrustedExperts/>
      <Footer/>
    </div>
  )
}

export default page
