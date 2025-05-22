import React, { useEffect, useRef } from 'react'
import styles from './Footer.module.css'

const FooterHeading = () => {
  const unicornRef = useRef(null);

  useEffect(() => {
    // Initialize Unicorn Studio
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.19/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    } else if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }

    // Clean up on component unmount
    return () => {
      if (window.UnicornStudio && window.UnicornStudio.isInitialized) {
        window.UnicornStudio.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.footerContainer} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Unicorn Studio */}
      <div 
        data-us-project="xjI8u5afB9Bk7zpWOUlG" 
        ref={unicornRef}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 1 
        }}
      />
      {/* Content above the effect */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 className={`${styles.footerHeading2} text-[#FFF4B8]`}>outsmart</h1>
        <div className={styles.footerSubheading2}>
          <div className={`text-[#FFF4B8]`}>Innovate</div>
          <div className={`text-[#FFF4B8]`}>Collaborate</div>
          <div className={`text-[#FFF4B8]`}>Accelerate</div>
        </div>
      </div>
    </div>
  )
}

export default FooterHeading
