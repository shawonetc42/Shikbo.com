
import Aboutus from '@/components/About/Aboutus'
import Blog from '@/components/About/Blog'
import Blood from '@/components/About/Blood'
import Coverabout from '@/components/About/Coverabout'
import DonationSponsor from '@/components/About/DonationSponsor'
import Testimonials from '@/components/About/Testimonials'
import Photo from '@/components/Home/Photo'
import React from 'react'

function about() {
  return (
    <div>
        <Coverabout/>
        <Blood/>
        <Aboutus/>
        <DonationSponsor/>
        <Testimonials/>
        <Blog/>
        <Photo/>
    </div>
  )
}

export default about