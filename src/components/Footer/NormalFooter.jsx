import React from 'react'
import styles from './Footer.module.css'
import { logo } from '../../assets'
import { footerData } from '../../constants'
import { gsap } from 'gsap'

const NormalFooter = () => {
  const handleNavigationClick = (href) => {
    if (href.startsWith("#")) {
      gsap.to(window, { duration: 1, scrollTo: href });
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <footer className={`${styles.footer} bg-[#1d140a] py-12 px-4 md:px-12`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Column */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Outsmart Logo" className="h-16 mb-4" />
          <h3 className={`${styles.footerHeading} text-[#FFF4B8] uppercase mb-2`}>outsmart</h3>
          <div className="text-[#7d7152]">
            <p>Innovate. Collaborate. Accelerate.</p>
          </div>
          
          {/* Address Information */}
          <div className="text-[#7d7152] mt-6 text-sm">
            <p className="font-semibold mb-2">Excel Business Foundry Pvt Ltd</p>
            <p>Nextcoworks, Alankar Plaza,</p>
            <p>Bk Circle, Nayak Layout,</p>
            <p>JP Nagar 8th Phase,</p>
            <p className="mb-3">Bengaluru, Karnataka 560078</p>
            
            <p className="font-semibold mt-3 mb-1">Phone:</p>
            <p>9597062534, 98866 67828</p>
            
            <p className="font-semibold mt-3 mb-1">Email:</p>
            <p>Sathish@teamoutsmart.in</p>
            <p>Shreeharsha@teamoutsmart.in</p>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className={`${styles.footerHeading} uppercase mb-6`}>Navigation</h3>
          <ul className="space-y-2">
            {footerData[0].content.map((item) => (
              <li key={item.id} className={`${styles.mainBox}`}>
                <a 
                  className={`${styles.footersubHeading} uppercase cursor-pointer`}
                  onClick={() => handleNavigationClick(item.href)}
                >
                  {item.nav}
                </a>
              </li>
            ))}
            <li className={`${styles.mainBox} mt-4`}>
              <a 
                className={`${styles.footersubHeading} uppercase cursor-pointer`}
                onClick={() => handleNavigationClick('#terms-and-use')}
              >
                Terms and Conditions
              </a>
            </li>
            <li className={`${styles.mainBox}`}>
              <a 
                className={`${styles.footersubHeading} uppercase cursor-pointer`}
                onClick={() => handleNavigationClick('#privacy-policy')}
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className={`${styles.footerHeading} uppercase mb-6`}>Connect With Us</h3>
          <ul className="space-y-2">
            {footerData[2].content.map((item) => (
              <li key={item.id} className={`${styles.mainBox}`}>
                <a 
                  className={`${styles.footersubHeading} uppercase cursor-pointer`}
                  href={`https://${item.nav.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.nav}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-12 pt-6 border-t border-[#2a1d0f] text-center text-[#7d7152]">
        <p>&copy; {new Date().getFullYear()} Outsmart. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default NormalFooter
