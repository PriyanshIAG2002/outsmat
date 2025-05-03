import React from 'react'
import styles from './Footer.module.css'

const FooterHeading = () => {
  return (
    <div className={styles.footerContainer}>
      <h1 className={`${styles.footerHeading2} text-[#FFF4B8]`}>outsmart</h1>
      <div className={styles.footerSubheading2}>
        <div className={`text-[#FFF4B8]`}>Innovate</div>
        <div className={`text-[#FFF4B8]`}>Collaborate</div>
        <div className={`text-[#FFF4B8]`}>Accelerate</div>
      </div>
    </div>
  )
}

export default FooterHeading
