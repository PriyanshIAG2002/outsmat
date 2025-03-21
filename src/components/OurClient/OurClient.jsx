import React from 'react'
import styles from "./OurClient.module.css"
import { logo } from "../../assets"
import LogoWall from '../LogoWall'
import {  accio,
  intugin,
  seosaph } from "../../assets"

const logoImgs = [
  { imgUrl: accio, altText: "React Bits Logo", name: "Accio Robotics" },
  { imgUrl: intugin, altText: "React Bits Logo", name: "Intugine" },
  { imgUrl: seosaph, altText: "React Bits Logo", name: "Seosaph" },
  { imgUrl: accio, altText: "React Bits Logo", name: "" },
  { imgUrl: intugin, altText: "React Bits Logo", name: "" },
  { imgUrl: seosaph, altText: "React Bits Logo", name: "" }
]

const OurClient = () => {

  return (
    <div id="partners-in-success" className={`w-full h-screen bg-[#FBF4D7] sticky top-0 ${styles.ourClient}`}>
      <div className={styles.titleContainer}>
        <div className={styles.ourClientTitle}> 
          <div>Our Valued</div>
          <div>Clients</div>
        </div>
        <div className={styles.clientNames}>
          {"Accio Robotics, Intugine, Seosaph"}
        </div>
      </div>
      <div className={styles.ourClientWall}>
        <LogoWall
          items={logoImgs}
          direction='horizontal'
          pauseOnHover={true}
          size='clamp(8rem, 1rem + 20vmin, 25rem)'
          duration='60s'
          bgColor='transparent' 
          bgAccentColor='transparent'  
        />
      </div>
    </div>
  )
}

export default OurClient