import React, { useRef } from 'react';
import styles from "./Test.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Row, Col } from "antd";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { testimonials } from '../../constants';

const Test = () => {
  const swiperRef = useRef(null);

  return (
    <div id="testimonials" className={`${styles.testimonial} w-full`}>
      <div className="flex justify-center items-center">
        <div className={styles.whattheysay}>
          WHAT THEY SAY
        </div>
      </div>
     
      <div className={`flex justify-center items-center ${styles.testheading}`}>
        Our testimonials
      </div>

      <div className={styles.testimonialWrapper}>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Row className={`w-full h-full ${styles.testimonialRow}`}>
                <Col className={`w-full h-full ${styles.imageCol}`} xl={10} lg={10} md={24} sm={24} xs={24} order={2}>
                  <div className={styles.testimonialImage}>
                    <img 
                      src={testimonial.src} 
                      alt={testimonial.company} 
                      className={styles.image}
                    />
                  </div>
                </Col>
                <Col className={`w-full h-full ${styles.contentCol}`} xl={14} lg={14} md={24} sm={24} xs={24} order={1}>
                  <div className={styles.testimonialContent}>
                    <p className={styles.testimonialText}>
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className={styles.userInfo}>
                      <div className={styles.userAvatar}>
                        <img src={testimonial.src} alt={testimonial.company} />
                      </div>
                      <div className={styles.userDetails}>
                        <h4 className={styles.userName}>{testimonial.company}</h4>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Buttons */}
      <div className={styles.navButtons}>
        <button 
          className={styles.navButton} 
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaArrowLeft />
        </button>
        <button 
          className={styles.navButton} 
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Test;
