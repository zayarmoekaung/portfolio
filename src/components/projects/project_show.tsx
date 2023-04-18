"use client";
import React, { useState, useEffect , useRef } from 'react';
import Image from 'next/image'
import styles from '../../styleSheets/project.module.css'
import localFont from 'next/font/local'
const aileron= localFont({ src: '../../fonts/Anurati-Regular.otf' })
export default function Project() {
    
    return(
        <>
            <h3 className={`${aileron.className}`}>Projects</h3>
            <p className={`${aileron.className}`}>Selected recent projects I&apos;ve done for amazing individuals and companies</p>
            <div className={`${styles.container}`}>

            </div>
        </>
    )
}