import ClientsReviews from '@/components/Testimonials'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Service from '@/components/Service'
import VideoSection from '@/components/VideoSection'
import React from 'react'
import OurTeam from '@/components/TeamSection'
import NewsletterSection from '@/components/NewsletterSection'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='bg-gray-50'>
      <Navbar />
      <HeroSection />
      <Service />
      <VideoSection />
      <ClientsReviews />
      <OurTeam />
      <NewsletterSection />
      <Footer />
    </div>
  )
}

export default page
