"use client";
import React, { useState, useEffect ,useRef } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import glass from '../styleSheets/glass.module.css'
import Link from 'next/link'
import SA from 'scroll-animations-js'
import  'scroll-animations-js/dist/css/index.min.css'
import Navbar from '../components/navbar'
import Language from '@/components/languages';
import Moto from '@/components/moto';
import Island from '@/components/island';
import Music from '@/components/anthem/music';
import Project from '@/components/projects/project_show';
import Service from '@/components/services/service';
import Contact from '@/components/contact';
import { saveAs } from "file-saver";
export default function Home() {
  useEffect(() => SA.init(), []);
  const saveCv = () => {
    saveAs(
      "/info/zayar_resume.pdf",
      "zayarmoekaung_resume.pdf"
    );
  };
  const savePortfolio = () => {
    saveAs(
      "/info/zayarmoekaung_portfolio.pptx",
      "zayarmoekaung_portfolio.pptx"
    );
  };
  return (
    <>
      <Navbar></Navbar>
      
    <main className={styles.main}>
    
     <div className={styles.hero} id='hero'>
     <p className={`${styles.frame} sa-animation sa-fade-right`} >
      
     <Image 
     src='/img/zayar.png'
     width={300}
     height={300}
     alt='zayar'
     className={styles.hero_img}
     />
     </p>
     <div className={`${styles.hero_text} sa-animation sa-fade-left `}>
        <p>
          I am ZayarMoeKaung
        </p>
        <h1>Full Stack Developer</h1>
        <h1>DevOp</h1>
        <h1>Software Engineer</h1>
        <h1>FreeLancer</h1>
        <div className={styles.btns}>
         <button className={glass.glass_button} onClick={saveCv}>Get my resume</button>
         <button className={glass.glass_button} >Get my portfolio</button>
        </div>
     </div>
      
    
     </div>
    <section id='skills' className={`${styles.section}`}>
     <Language />
     </section>
     <section id='moto'  className={`${styles.section}`}>
      < Moto />
     </section>
     
     <Island/>
     <Music/>
     <section id='projects' className={`${styles.section}`}>
     <Project/>
     </section>
     <Service/>
     <Contact/>
    </main>
    </>
  )
}
