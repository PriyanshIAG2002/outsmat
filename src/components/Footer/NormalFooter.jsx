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

  // Divide navigation links into two columns
  const navigationLinks = [...footerData[0].content];
  const additionalLinks = [
    { id: 'terms', nav: 'Terms and Conditions', href: '#terms-and-use' },
    { id: 'privacy', nav: 'Privacy Policy', href: '#privacy-policy' }
  ];
  const allNavLinks = [...navigationLinks, ...additionalLinks];
  
  const midpoint = Math.ceil(allNavLinks.length / 2);
  const firstColumn = allNavLinks.slice(0, midpoint);
  const secondColumn = allNavLinks.slice(midpoint);

  return (
    <footer className={`${styles.footer} bg-[#1E140A] relative border-t border-[#3a2c1a] pt-12 px-4 md:px-12 pb-12`}>
      {/* Orange gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff6a0071] via-[#3a220b] to-[#1d140a] opacity-40 z-0"></div>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Navigation Column - Combined on mobile, split on desktop */}
        <div className="flex flex-col items-start md:items-start">
          <h3 className="text-[#FFF4B8] font-medium text-lg uppercase mb-4">Navigation</h3>
          
          {/* Mobile: Combined list, Desktop: First column only */}
          <ul className="space-y-2 md:block">
            {firstColumn.map((item) => (
              <li key={item.id}>
                <a 
                  className="text-[#FF9F5A] hover:text-[#FFF4B8] text-sm cursor-pointer"
                  onClick={() => handleNavigationClick(item.href)}
                >
                  {item.nav}
                </a>
              </li>
            ))}
            
            {/* Show second column items only on mobile */}
            <div className="md:hidden mt-0">
              {secondColumn.map((item) => (
                <li key={item.id} className="mt-2">
                  <a 
                    className="text-[#FF9F5A] hover:text-[#FFF4B8] text-sm cursor-pointer"
                    onClick={() => handleNavigationClick(item.href)}
                  >
                    {item.nav}
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </div>

        {/* Navigation Column 2 - Hidden on mobile, shown on desktop */}
        <div className="hidden md:flex flex-col items-center md:items-start">
          <h3 className="text-[#FFF4B8] font-medium text-lg uppercase mb-4">&nbsp;</h3>
          <ul className="space-y-2">
            {secondColumn.map((item) => (
              <li key={item.id}>
                <a 
                  className="text-[#FF9F5A] hover:text-[#FFF4B8] text-sm cursor-pointer"
                  onClick={() => handleNavigationClick(item.href)}
                >
                  {item.nav}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Column */}
        <div className="flex flex-col items-start md:items-start">
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
