"use client";
import React, { useState, useEffect , forwardRef } from 'react';
import Image from 'next/image';
import styles from '../../styleSheets/music.module.css';
import glass from '../../styleSheets/glass.module.css'
import {playList} from './playlist';
import localFont from 'next/font/local';
import { BiChevronLeftCircle } from "react-icons/bi"; 
import { AiFillCloseCircle } from "react-icons/ai";
import AudioPlayer , {
  ActiveUI

} from 'react-modern-audio-player';

const aileron= localFont({ src: '../../fonts/Anurati-Regular.otf' })
export default function Music() {
  const [expand , setExpand] = useState(false) 
  const [activeUI, setActiveUI] = useState<ActiveUI>({ playButton: true })
 
  const [width,setWidth] = useState("40px")
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };
  const handelExpand = () =>{
    
    if (!expand) {
      setExpand(!expand)
      setActiveUI({
       all: true,
       trackTime: false,
       progress: false
      });
      setWidth("100%")
    }else{
      setExpand(!expand)
      setActiveUI({ playButton: true })
      setWidth("40px")
  }
}
    return (
        <>
        <div className={`${styles.box} ${expand?styles.box_max : styles.box_min }`}>
        {expand &&
        <div className={`${styles.misc_box}`}>
      
        <h4 className={`${aileron.className}`}>My Anthems</h4>
      
        <span onClick={handelExpand} className={`${styles.expand}`}>{ <AiFillCloseCircle/> }</span>  
        </div>  
          }  
        <div className={`${expand? styles.max : styles.min} ${styles.inner_box} `}>
        {!expand &&
        <span onClick={handelExpand} className={`${styles.expand}`}>{ <BiChevronLeftCircle/>}</span>  

        }
        <AudioPlayer 
        playList={playList}
        activeUI={{
          ...activeUI
        }}
        rootContainerProps={{
          width
        }}
        />
        </div>
        </div>
        </>
    )
}