import React, { useRef, useState } from 'react';
import styles from "./Contact.module.css";
import { Row, Col } from 'antd';
import emailjs from "emailjs-com";
import { Slide, toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { logo } from '../../assets';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      company: "",
    });

    // Arrays for contact information
    const phoneNumbers = ["9597062534", "9886667828"];
    const emailAddresses = ["Sathish@teamoutsmart.in", "Shreeharsha@teamoutsmart.in"];

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
    <div id="contact" className={`${styles.contactUs} w-full h-screen`}>
      <Row className={styles.row}>
        <Col xl={14} lg={14} md={24} sm={24} xs={24}>
          <div className={`${styles.col1} ${styles.cols} bg-[#2E2111] flex flex-col justify-center items-start`}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.contactContent}
            >
              <div className={`${styles.contactTitle}`}>Connect with Outsmart</div>
              <div className={`${styles.contactSubtitle}`}>Explore the unexplored, with Team Outsmart</div>
            </motion.div>

            <motion.div 
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
          <div className={`${styles.col2} ${styles.cols} bg-[#1d140a] flex justify-center items-center`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-5 w-[95%] md:max-w-[80%] text-[#f76a1e5b] bg-[#1d140a] bg-opacity-80 rounded-lg"
            >
              <div className="flex justify-center mb-6">
                <img src={logo} alt="Outsmart Logo" className="h-16" />
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-[#F76A1E] mr-2 mt-1 flex-shrink-0 text-lg" />
                  <div>
                    <p className="font-semibold text-[#F76A1E]">Excel Business Foundry Pvt Ltd</p>
                    <p className="text-[#fd7024cc]">Nextcoworks, Alankar Plaza, Bk Circle, Nayak Layout, JP Nagar 8th Phase, Bengaluru, Karnataka 560078</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="text-[#F76A1E] mr-2 mt-1 flex-shrink-0 text-lg" />
                  <div className="flex flex-wrap gap-2">
                    {phoneNumbers.map((phone, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-3 py-1 bg-[#2E2111] text-[#fd7024cc] rounded-full text-sm"
                      >
                        {phone}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEnvelope className="text-[#F76A1E] mr-2 mt-1 flex-shrink-0 text-lg" />
                  <div className="flex flex-wrap gap-2">
                    {emailAddresses.map((email, index) => (
                      <a 
                        key={index} 
                        href={`mailto:${email}`} 
                        className="inline-block px-3 py-1 bg-[#2E2111] text-[#fd7024cc] rounded-full email_text text-sm hover:bg-[#3a2a16] transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Contact