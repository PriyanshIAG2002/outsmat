import React from 'react'
import styles from "./style.module.css"

import {  
    HeroBanner,
    OurGoal,
    WhoAreWe,
    OurServices,
    OurApproach,
    OurClient,
    Contact,
    Testimonials,
    Footer,
    FooterHeading
 } from '../components'

const Home = () => {
  return (
    <div>
        <HeroBanner />
        <div className={`${styles.infoStripe} w-full h-[50px] bg-[#FCB683]`}>
          Our Vision
        </div>
        <OurGoal />
        <div className={`${styles.infoStripe} w-full h-[50px] bg-[#FCB683]`}>
          Who are we ?
        </div>
        <WhoAreWe /> 
        <div className={`${styles.infoStripe} w-full h-[50px] bg-[#FCB683]`}>
          What we offer ?
        </div>
        <OurServices />
        <div className={`${styles.infoStripe} w-full h-[50px] bg-[#FCB683]`}>
          Our Approch
        </div>
        <OurApproach />
        <div className={`${styles.infoStripe} w-full h-[50px] bg-[#FCB683]`}>
          Partners in Success
        </div>
        <OurClient /> 
        <div className={`${styles.infoStripe} w-full h-[50px] bg-[#FCB683]`}>
          Testimonials
        </div>
        <Testimonials /> 
        <div className={`${styles.infoStripe} w-full h-[50px] bg-[#FCB683]`}>
          Contact Us
        </div>
        

        <Contact />
        <div className="sticky top-0">
          <FooterHeading />
          <Footer />
        </div>
    </div>
  )
}

export default Home