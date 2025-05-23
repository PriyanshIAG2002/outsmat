import React, { useState, useEffect, useRef } from 'react';
import styles from "./HeroBanner.module.css";
import { ripple } from '../../assets';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { motion } from "framer-motion"
import Lottie from "lottie-react";
import Tilt from 'react-parallax-tilt';


const mainText = "Enabling Sales beyond the inner circle!";
const mobileMainText = {
  line1: "Sales Beyond",
  line2: "The Inner",
  line3: "Circle"
};

const subText = "Driving conversations beyond Boundaries.";

const createRevealMask = (direction = "up", delay = 3) => ({
  initial: { y: direction === "up" ? "-100%" : "100%" },
  animate: {
    y: "0%",
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1], delay },
  },
});


const HeroBanner = () => {
  const [isPreloaded, setIsPreloaded] = useState(false);
  const wordsRef = useRef([]);
  const containerRef = useRef(null);
  const unicornRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const preloaderTimer = setTimeout(() => {
      setIsPreloaded(true);
    }, 2500); // 3 seconds for preloader

    return () => clearTimeout(preloaderTimer);
  }, []);

  useEffect(() => {
    if (isPreloaded && containerRef.current) {
      // Creating GSAP timeline for the staggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", 
          end: "bottom top", 
          once: true,
        }
      });

      tl.from(wordsRef.current, {
        y: "100%",
        opacity: 0,
        stagger: 0.1, // Stagger the words
        duration: 0.6,
        ease: "power4.out",
      });
    }
  }, [isPreloaded]);

  const handleJoinUsClick = (e) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: "#contact",
        offsetY: 50 // Optional offset from the top
      },
      ease: "power3.inOut"
    });
  };

  return (
    <div className={`w-full h-screen sticky top-0 ${styles.heroBanner}`}>
      {/* Unicorn Studio */}
      {/* Unicorn Studio Ends */}
      <div className={styles.grainOverlay} />
     
        <div className={`${styles.heroTopSection}`}>
        <Tilt 
          tiltAxis={"y"}
          tiltMaxAngleX={2}
          tiltMaxAngleY={2}
          className={styles.tiltWrapper || "relative"}
        >
          {isPreloaded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={styles.mainHeading}
            >
              <span className={styles.desktopHeading}>{mainText}</span>
              <div className={styles.mobileHeading}>
                <div>{mobileMainText.line1}</div>
                <div>{mobileMainText.line2}</div>
                <div>{mobileMainText.line3}</div>
              </div>
            </motion.div>
          )}
      </Tilt>

        </div>

      <div className={`absolute ${styles.heroRipple}`}>
        <Lottie animationData={ripple} alt="Ripple effect" className={`w-[550px] ${styles.lottieMain}`} />
      </div>

      <div className={`${styles.heroBottomSections}`} ref={containerRef}>
        {isPreloaded && (
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={styles.heroSubhead}
          >
            {subText}
          </motion.h2>
        )}

        {isPreloaded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className={styles.heroBtnWrapper}
          >
            <a 
              href="#contact" 
              className={styles.heroJoinUs}
              onClick={handleJoinUsClick}
            >
              Connect with us
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
