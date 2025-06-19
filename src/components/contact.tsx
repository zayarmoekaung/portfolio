import React from 'react';
import Image from 'next/image'
import styles from '../styleSheets/contact.module.css'
import glass from '../styleSheets/glass.module.css'
import localFont from 'next/font/local'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const aileron= localFont({ src: '../fonts/Anurati-Regular.otf' })
export default function Contact() {
return(
    <>
     <section className={styles.contact} id='contact'>
      <div className={styles.container}>
        <h2 className={aileron.className}>Contact Me</h2>
        <div className={styles.contact_wrapper}>
          <div className={styles.contact_info}>
            <div className={styles.contact_icon}><FaMapMarkerAlt /></div>
            <p>Ramkhamhaeng Soi 50</p>
            <p>BangKapi , BangKok , Thailand</p>
          </div>
          <div className={styles.contact_info}>
            <div className={styles.contact_icon}><FaPhoneAlt /></div>
            <p>+66 944-128-234 , +95 997-542-777-3</p>
          </div>
          <div className={styles.contact_info}>
            <div className={styles.contact_icon}><FaEnvelope /></div>
            <a href="mailto:zayarmoekaung0@gmail.com"><p>zayarmoekaung0@gmail.com</p></a>
            <a href="mailto:zayar@blackmail.monster"><p>zayar@blackmail.monster</p></a>
          </div>
        </div>
      </div>
    </section>
    </>
);

}