
import React from 'react'
import styles from "./Footer.module.css"
import { footerData } from "../../constants"
import PhotoGrid from "./PhotoGrid"
import { gsap } from "gsap"

const Footer = () => {
  const handleNavigationClick = (href) => {
    if (href.startsWith("#")) {
      gsap.to(window, { duration: 1, scrollTo: href });
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <div className={`${styles.footer} bg-[#1d140a]`}>
      <div className={`flex justify-between ${styles.boxMain}`}>
        <PhotoGrid gridNumber={16} />
        <div className={`${styles.footerBox}`}>
          {footerData.map((data, i) => (
            <div key={i}>
              <h3 className={`text-center uppercase ${styles.footerHeading}`}>{data.heading}</h3>
              <ul>
                {data.content.map((item) => (
                  <li key={item.id} className={`flex items-start ${styles.mainBox}`}>
                    <p className={`w-1/2 text-right ${styles.footerTitle}`}>{item.title}</p>
                    {item.title === "Website Navigation" ? (
                      <a
                        className={`w-1/2 ml-5 text-left uppercase ${styles.footersubHeading}`}
                        onClick={() => handleNavigationClick(item.href)}
                      >
                        {item.nav}
                      </a>
                    ) : item.title === "Social Media" ? (
                      <a
                        className={`w-1/2 ml-5 text-left uppercase ${styles.footersubHeading}`}
                        href={`https://instagram.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.nav}
                      </a>
                    ) : item.title === "Extra" ? (
                      <a
                        className={`w-1/2 ml-5 text-left uppercase ${styles.footersubHeading}`}
                        href={`https://youtube.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.nav}
                      </a>
                    ) : (
                      <span className={`w-1/2 ml-5 text-left uppercase ${styles.footersubHeading}`}>
                        {item.nav}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <PhotoGrid gridNumber={16} />
      </div>
    </div>
  );
};

export default Footer;
