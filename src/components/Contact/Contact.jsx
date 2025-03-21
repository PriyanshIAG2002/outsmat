import React, { useRef, useState } from 'react';
import styles from "./Contact.module.css";
import { Row, Col } from 'antd';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { ripple } from '../../assets';
import emailjs from "emailjs-com";
import { Slide, toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const formRef = useRef(null);
    const lottieRef = useRef(null);
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      company: "",
    });

    useGSAP(() => {
      // Exit animation timeline
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top -10%",
          end: "top -100%",
          scrub: true,
        }
      });

      // Exit animations for content
      exitTl.to(contentRef.current, {
        y: 100,
        opacity: 0,
        duration: 1
      });

      // Exit animations for form
      exitTl.to(formRef.current, {
        y: 50,
        opacity: 0,
        duration: 1
      }, "-=0.5");

      // Exit animations for lottie
      exitTl.to(lottieRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1
      }, "-=0.8");
    }, []);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const resetForm = () => {
      setFormData({
        name: "",
        email: "",
        company: "",
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      emailjs
        .sendForm(
          "service_wbrdcli",
          "template_ghdja7d",
          form.current,
          "gbPZu0yZl9NphdAfF"
        )
        .then(
          () => {
            toast.success("Details Submitted.", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Slide,
            });
            resetForm();
            setLoading(false);
          },
          () => {
            toast.error("Oops! Something went wrong.", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Slide,
            });
            resetForm();
            setLoading(false);
          }
        );
    };

  return (
    <div id="contact" ref={sectionRef} className={`${styles.contactUs} w-full h-screen sticky top-0`}>
      <Row className={styles.row}>
        <Col xl={14} lg={14} md={24} sm={24} xs={24}>
          <div className={`${styles.col1} ${styles.cols} bg-[#2E2111]`}>
            <motion.div 
              ref={contentRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.contactContent}
            >
              <div className={`${styles.contactTitle}`}>Connect with Outsmart</div>
              <div className={`${styles.contactSubtitle}`}>Explore the unexplored, with Team Outsmart</div>
            </motion.div>

            <motion.div 
              ref={formRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${styles.contactEmail}`}
            >
              <form onSubmit={handleSubmit} ref={form}>
                <div className={styles.formContainer}>
                  <div className={styles.inputFields}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="w-full border-none cta-input focus:outline-none bg-transparent text-lg"
                      onChange={handleChange}
                      value={formData.name}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full border-none cta-input focus:outline-none bg-transparent text-lg"
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      className="w-full border-none cta-input focus:outline-none bg-transparent text-lg"
                      onChange={handleChange}
                      value={formData.company}
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className={`${styles.submitButton} ${loading ? styles.loading : ''}`}
                  >
                    <FaArrowRight className={styles.arrowIcon} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </Col>
        <Col xl={10} lg={10} md={24} sm={24} xs={24}>
          <div className={`${styles.col2} ${styles.cols} bg-[#1d140a]`}>
            <motion.div 
              ref={lottieRef}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className={`flex justify-center items-center w-full h-full`}
            >
              <Lottie animationData={ripple} loop={true} className={`w-[400px]`} />
            </motion.div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Contact