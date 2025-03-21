import React, { useRef } from 'react';
import styles from "./Who.module.css";
import { Row, Col } from 'antd';
import { whoAreWeData } from '../../constants';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import { ripple } from '../../assets';

gsap.registerPlugin();

const WhoAreWe = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const lottieRef = useRef(null);

  useGSAP(() => {
    // Entry animation timeline
    const entryTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      }
    });

    entryTl.fromTo(
      textRefs.current,
      { opacity: 0, y: -150 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );

    entryTl.fromTo(
      lottieRef.current,
      { opacity: 0, y: -150, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5 },
      "-=0.5"
    );

    // Exit animation timeline
    const exitTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top -40%",
        end: "top -100%",
        scrub: true,
      }
    });

    // Exit animations
    exitTl.to(
      textRefs.current,
      { opacity: 0, y: 150, duration: 1, stagger: 0.2 }
    );

    exitTl.to(
      lottieRef.current,
      { opacity: 0, y: 150, duration: 1.5 },
      "-=1"
    );

  }, []);

  return (
    <div id="who-are-we" ref={sectionRef} className={`w-full h-screen sticky top-0 ${styles.whoarewe}`}>
      <Row className={styles.wrvRow}>
        <Col xl={16} lg={16} md={24} sm={24} xs={24} className={`h-screen ${styles.wrvCol}`}>
          <div className={`flex h-full justify-center text-white ${styles.wvrLeft}`}>
            {whoAreWeData.map((item, index) => (
              <div key={item.ourVisionHeading} className={`border-r border-[#ffffff78] pr-10 flex flex-col justify-between ${index === 1 ? "wrvNoMobBorder" : ""}`} ref={el => textRefs.current[index] = el}>
                <div className={styles.wrvCover}>
                  {/* <h1 className={`${styles.wrvNum} overflow-hidden`}>{item.id}.</h1> */}
                  <h2 className={`${styles.wrvTitle} overflow-hidden`}>{item.title}</h2>
                </div>
                <p className={`${styles.wrvSubTitle} overflow-hidden`}>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24} className={`h-screen ${styles.wrvCol} ${styles.wrvCol2}`}>
          <div ref={lottieRef} className={`flex justify-center items-center w-full h-full`}>
            <Lottie animationData={ripple} loop={true} className={`w-[400px]`} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhoAreWe;
