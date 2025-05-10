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
    <footer className={`${styles.footer} bg-[#1E140A] relative border-t border-[#3a2c1a] pt-12 px-4 md:px-12 pb-12`}>
      {/* Orange gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff6a0071] via-[#3a220b] to-[#1d140a] opacity-40 z-0"></div>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Logo Column */}
        <div className="flex mbflex flex-col items-center md:items-start">
          <img src={logo} alt="Outsmart Logo" className="h-16 mb-4" />
          <div className="text-[#FF9F5A] text-sm">
            <p>Innovate. Collaborate. Accelerate.</p>
          </div>
          
          {/* Address Information */}
          <div className="text-[#FF9F5A] mt-6 text-sm">
            <p className="font-medium mb-2">Excel Business Foundry Pvt Ltd</p>
            <p>Nextcoworks, Alankar Plaza,</p>
            <p>Bk Circle, Nayak Layout,</p>
            <p>JP Nagar 8th Phase,</p>
            <p className="mb-3">Bengaluru, Karnataka 560078</p>
            
            <p className="font-medium mt-3 mb-1">Phone:</p>
            <p>9597062534, 98866 67828</p>
            
            <p className="font-medium mt-3 mb-1">Email:</p>
            <p>Sathish@teamoutsmart.in</p>
            <p>Shreeharsha@teamoutsmart.in</p>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="flex mbflex flex-col items-center md:items-start">
          <h3 className="text-[#FFF4B8] font-medium text-lg uppercase mb-4">Navigation</h3>
          <ul className="space-y-2">
            {footerData[0].content.map((item) => (
              <li key={item.id}>
                <a 
                  className="text-[#FF9F5A] hover:text-[#FFF4B8] text-sm cursor-pointer"
                  onClick={() => handleNavigationClick(item.href)}
                >
                  {item.nav}
                </a>
              </li>
            ))}
            <li className="">
              <a 
                className="text-[#FF9F5A] hover:text-[#FFF4B8] text-sm cursor-pointer"
                onClick={() => handleNavigationClick('#terms-and-use')}
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a 
                className="text-[#FF9F5A] hover:text-[#FFF4B8] text-sm cursor-pointer"
                onClick={() => handleNavigationClick('#privacy-policy')}
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div className="flex mbflex flex-col items-center md:items-start">
          <h3 className="text-[#FFF4B8] font-medium text-lg uppercase mb-4">Connect With Us</h3>
          <ul className="space-y-2">
            {footerData[2].content.map((item) => (
              <li key={item.id}>
                <a 
                  className="text-[#FF9F5A] hover:text-[#FFF4B8] text-sm cursor-pointer"
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
    </footer>
  )
}

export default NormalFooter
