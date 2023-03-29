"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import SA from 'scroll-animations-js'
import  'scroll-animations-js/dist/css/index.min.css'
import Navbar from '../components/navbar'
import Skills from '@/components/skills';

export default function Home() {
  useEffect(() => SA.init(), []);
  return (
    <>
      <Navbar></Navbar>
      
    <main className={styles.main}>
    
     <div className={styles.hero}>
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
     </div>
      
    
     </div>
     <Skills/>
    </main>
    </>
  )
}
