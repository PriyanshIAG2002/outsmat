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
  { imgUrl: "https://res.cloudinary.com/dtb9kxfvj/image/upload/v1748239053/cropped-cropped-logoo_wolr2p.png", altText: "Coffea Logo", name: "Coffea" },

  { imgUrl: "https://res.cloudinary.com/dtb9kxfvj/image/upload/v1748239048/digitory_2-Photoroom_lkhgfy.png", altText: "Digitory Logo", name: "Digitory" },

  { imgUrl: "https://res.cloudinary.com/dtb9kxfvj/image/upload/v1748239050/download-Photoroom_ug4n3q.png", altText: "Medilenz Logo", name: "Medilenz" },


  { imgUrl: accio, altText: "React Bits Logo", name: "" },
  { imgUrl: intugin, altText: "React Bits Logo", name: "" },
  { imgUrl: seosaph, altText: "React Bits Logo", name: "" },
  { imgUrl: "https://res.cloudinary.com/dtb9kxfvj/image/upload/v1748239053/cropped-cropped-logoo_wolr2p.png", altText: "React Bits Logo", name: "" },
  { imgUrl: "https://res.cloudinary.com/dtb9kxfvj/image/upload/v1748239048/digitory_2-Photoroom_lkhgfy.png", altText: "React Bits Logo", name: "" },
  { imgUrl:  "https://res.cloudinary.com/dtb9kxfvj/image/upload/v1748239050/download-Photoroom_ug4n3q.png", altText: "React Bits Logo", name: "" },
]



const OurClient = () => {

  return (
    <div id="partners-in-success" className={`w-full h-screen bg-[#FBF4D7] sticky top-0 ${styles.ourClient}`}>
      <div className={styles.titleContainer}>
        <div className={styles.ourClientTitle}> 
          <div>Our Valued</div>
          <div>Clients</div>
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