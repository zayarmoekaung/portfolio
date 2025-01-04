"use client";
import React, { useState, useEffect , forwardRef } from 'react';
import Image from 'next/image'
import styles from '../styleSheets/moto.module.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import localFont from 'next/font/local'
const aileron= localFont({ src: '../fonts/Anurati-Regular.otf' })
export default function Moto() {
 
      const slideImages = [
        {
            url : '/motos/stj_1.webp'
        },
        {
            url : '/motos/moto_no_error.jpg'
        },
        {
            url : '/motos/bill-gates.webp'
        }
      ];
return (
    <>
    <h4 className={`${aileron.className}`}>Motivations</h4>
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index} className={`${styles.slidebox}`}>
              <div  className={`${styles.slide}`}>
              <Image 
     src={slideImage.url}
     width={800}
     height={800}
     alt='moto'
     className={styles.slide_img}
     />
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </>
)

}
