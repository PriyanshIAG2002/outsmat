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
    <div className={`${styles.footerContainer}`}>
      <div className={`flex flex-col md:flex-row justify-between ${styles.boxMain}`}>
        <div className="hidden md:block">
          <PhotoGrid gridNumber={16} />
        </div>
        <div className={`${styles.footerBox} py-4 md:py-0`}>
          {footerData.map((data, i) => (
            <div key={i} className="mb-2">
              <h3 className={`text-left uppercase ${styles.footerHeading}`}>{data.heading}</h3>
              <ul className="w-full">
                {data.content.map((item) => (
                  <li key={item.id} className={`flex flex-col md:flex-row md:items-start items-start ${styles.mainBox}`}>
                    <p className={`md:w-1/2 w-full md:text-right text-left px-2 ${styles.footerTitle}`}>{item.title}</p>
                    {item.title === "Website Navigation" ? (
                      <a
                        className={`md:w-1/2 w-full md:ml-5 md:text-left text-left px-2 uppercase ${styles.footersubHeading}`}
                        onClick={() => handleNavigationClick(item.href)}
                      >
                        {item.nav}
                      </a>
                    ) : item.title === "Social Media" ? (
                      <a
                        className={`md:w-1/2 w-full md:ml-5 md:text-left text-left px-2 uppercase ${styles.footersubHeading}`}
                        href={`https://instagram.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.nav}
                      </a>
                    ) : item.title === "Extra" ? (
                      <a
                        className={`md:w-1/2 w-full md:ml-5 md:text-left text-left px-2 uppercase ${styles.footersubHeading}`}
                        href={`https://youtube.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.nav}
                      </a>
                    ) : (
                      <span className={`md:w-1/2 w-full md:ml-5 md:text-left text-left px-2 uppercase ${styles.footersubHeading}`}>
                        {item.nav}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <PhotoGrid gridNumber={16} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
