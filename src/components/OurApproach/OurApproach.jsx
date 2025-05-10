import React, { useRef, useEffect, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from "./OurApproach.module.css"
import { ripple } from '../../assets';
import {  approachData } from "../../constants"
import Lottie from "lottie-react";

const OurApproach = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add listener for resize
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const calculateScrollLength = () => {
      // Calculate total width based on CSS values
      const introWidth = isMobile ? 250 : 200;
      const sectionWidth = isMobile ? 200 : 150;
      const totalWidth = introWidth + (sectionWidth * approachData.length);
      
      return `-${totalWidth}vw`;
    };

    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: calculateScrollLength(),
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          // Adjust end position based on content length
          end: () => `+=${window.innerHeight * (isMobile ? (approachData.length + 1.5) : (approachData.length + 2))}`,
          scrub: isMobile ? 0.8 : 0.6,
          pin: true,
        },
      }
    );

    // Update on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
      pin.vars.translateX = calculateScrollLength();
      pin.invalidate().restart();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      pin.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
  
  return (
    <section id="our-approach" className={`${styles.scrollSectionOuter}`}>
      <div ref={triggerRef} className="bg-[#F76A1E]">
        <div ref={sectionRef} className={`${styles.scrollSectionInner}`}>

          <div className={`${styles.scrollSection} ${styles.scrollSectionIntro}`}>
            <div className={`${styles.rippleMain}`}>
              <Lottie animationData={ripple} alt="Ripple effect" className={`${styles.lottieRipple}`} />
            </div>
            <div className={`${styles.approachIntroBox}`}>
              <h3 className={`${styles.rippleMainTitle}`}>Navigating client acquisition</h3>
              <h1 className={`${styles.rippleMainSubtitle}`}>The Outsmart Way</h1>
            </div>
          </div>

          {approachData.map((item, index) => (
            <div key={item.id} className={`${styles.scrollSection} scroll-section`}>
              <div className={styles.contentBox}>
                <div className={styles.cardBackground}>
                  <div 
                    className={styles.imageWrapper}
                    style={{
                      background: index % 2 === 0 ? "#FF8534" : "#49E0DD"
                    }}
                  >
                    <img src={item.lottieImg} alt={item.title} />
                    <div className={styles.polaroidCaption}>
                      {item.id < 10 ? `0${item.id}` : item.id}
                    </div>
                  </div>
                </div>
                <div className={styles.textWrapper}>
                  <h3 
                  style={{background : index%2==0 ? "#2E2111" : "#F76A1E"}}
                   className={`${styles.wrapperTitle}`}>{item.title}</h3>
                  <p
                  style={{background : index%2==0 ? "#2E2111" : "#F76A1E"}}
                   className={`${styles.subTitle}`}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurApproach