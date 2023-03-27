"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from '../styleSheets/navbar.module.css'

export default function Navbar() {
const [open , setOpen] = useState(false);   
const handelHumber = () =>{
setOpen(current => !current);
};    
     
           
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
            <li className={open? styles.fade : ''}><a href="#">Home</a></li>
            <li className={open? styles.fade : ''}><a href="#">Skills</a></li>
            <li className={open? styles.fade : ''}><a href="#">Prjects</a></li>
            <li className={open? styles.fade : ''}><a href="#">Services</a></li>
            <li className={open? styles.fade : ''}><a href="#">Contact Me</a></li>
            
        </ul>
    </nav>
    )
}