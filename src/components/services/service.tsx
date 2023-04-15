import React from 'react';
import Image from 'next/image'
import styles from '../../styleSheets/service.module.css'
import glass from '../../styleSheets/glass.module.css'
import localFont from 'next/font/local'
import { FaLaptopCode, FaCode, FaServer } from 'react-icons/fa';
const aileron= localFont({ src: '../../fonts/Anurati-Regular.otf' })
export default function Service() {

return(
    <>
    <section className={`${glass.glass_panel}`} id='services'>
  <div className={`${styles.container}`}>
    <h2 className={`${aileron.className}`}>Services</h2>
    <div className={`${styles.services_wrapper}`} >
      <div className={`${styles.service}`}>
      <div className={`${styles.service_icon}`}><FaLaptopCode /></div>
            <h3>Web Development</h3>
            <p>Designing, developing, and maintaining custom web applications. This service can include database design and implementation, e-commerce development, and API integrations.</p>
      </div>
      <div className={`${styles.service}`}>
      <div className={`${styles.service_icon}`}><FaCode /></div>
            <h3>Front-end Development</h3>
            <p>Creating the user interface and user experience for websites and web applications. This service can include designing and developing responsive web pages, optimizing web content for search engines, and creating interactive user interfaces.</p>
      </div>
      <div className={`${styles.service}`}>
      <div className={`${styles.service_icon}`}><FaServer /></div>
            <h3>Back-end Development</h3>
            <p>Developing the server-side of web applications. This service can include developing custom APIs, creating database schemas and models, building authentication and authorization systems, and implementing scalable back-end architectures.</p>
      </div>
    </div>
  </div>
</section>

    </>
);

}