"use client";
import React, { useState, useEffect , forwardRef } from 'react';
import Image from 'next/image'
import styles from '../styleSheets/navbar.module.css'
import { Link, animateScroll as scroll , scroller} from 'react-scroll';
export default function Navbar () {
const [open , setOpen] = useState(false);   

const handelHumber = () =>{
setOpen(current => !current);
};    
   const handleScroll = (name : string) =>{
    setOpen(current => !current);
    scroller.scrollTo(name, {
        duration: 1500,
        delay: 100,
        smooth: true,
       
        offset: 0 // Scrolls to element + 50 pixels down the page
     
      });
     
   }  
           
    return (
        <nav className={styles.nav}>
        <div className={styles.logo}>
            <Image 
             src='/icon.png'
             width={20}
             height={20}
             alt='logo'
             
             />
             
        
           
        </div>
        <div className={styles.hamburger} onClick={handelHumber}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
            <div className={styles.line4}></div>
            
        </div>
        <ul className={`${styles.nav_links} ${open? styles.open : ''}`}>
            <li className={open? styles.fade : ''}  onClick={() => handleScroll('hero')}><a >Top</a></li>
            <li className={open? styles.fade : ''}><a  onClick={() => handleScroll('skills')}>Skills</a></li>
            <li className={open? styles.fade : ''}><a onClick={() => handleScroll('projects')}>Projects</a></li>
            <li className={open? styles.fade : ''}><a onClick={() => handleScroll('services')}>Services</a></li>
            <li className={open? styles.fade : ''}><a onClick={() => handleScroll('contact')}>Contact Me</a></li>
            
        </ul>
    </nav>
    )
}
