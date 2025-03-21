import React, { useRef } from 'react';
import styles from "./OurGoal.module.css";
import { Row, Col } from "antd";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ourVisionImg } from '../../assets';

gsap.registerPlugin(ScrollTrigger);

const OurGoal = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Entry animation timeline
    const entryTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 10%",
        scrub: true,
      }
    });

    // Entry animations
    entryTl.fromTo(
      [headingRef.current, subheadingRef.current], 
      { opacity: 0, y: -250 }, 
      { opacity: 1, y: 0, duration: 1.5 },
    );

    entryTl.fromTo(
      imageRef.current, 
      { opacity: 0, y: -150, filter: "blur(10px)" }, 
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5 },
      "-=1"
    );

    // Exit animation timeline
    const exitTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top -40%", // Start later when next section is more visible
        end: "top -100%", // End when completely scrolled past
        scrub: true,
      }
    });

    // Exit animations - simplified to just downward movement
    exitTl.to(
      [headingRef.current, subheadingRef.current],
      { opacity: 0, y: 250, duration: 1.5 }
    );

    exitTl.to(
      imageRef.current,
      { opacity: 0, y: 150, duration: 1.5 },
      "-=1.5"
    );

  }, []);

  return (
    <div id="vision" ref={sectionRef} className={`w-full h-screen sticky top-0 ${styles.ourGoal}`}>
      <Row className={`${styles.ourVisionRow}`}>
        <Col xl={14} lg={14} md={24} sm={24} xs={24}>
          <div className={styles.ourVisionBox}>
            <h1 ref={headingRef} className={styles.ourVisionHead}>Our Vision</h1>
            <p ref={subheadingRef} className={styles.ourVisionSubhead}>
              To revolutionize the way early-stage startups approach sales, 
              providing innovative strategies and tools that drive sustainable growth.
            </p>
          </div>
        </Col>
        <Col xl={10} lg={10} md={24} sm={24} xs={24}>
          <div className={styles.ourGoalImgBox}>
            <img ref={imageRef} src={ourVisionImg} alt="our vision image" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurGoal;
