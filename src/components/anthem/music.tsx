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
 
  type ActiveUI = {
    all: boolean;
    playButton: boolean;
   
    trackTime: boolean;
   
    progress: ProgressUI;
  };
  type ProgressUI = "waveform" | "bar" | false;
type PlayListUI = "sortable" | "unSortable" | false;
  const [expand , setExpand] = useState(false) 
  
  const [activeUI, setActiveUI] = useState<ActiveUI>({ all: false,
    trackTime: false,
    progress: false,
     playButton: true })
 
  const [width,setWidth] = useState("40px")
 
  const handelExpand = () =>{
    
    if (!expand) {
      setExpand(!expand)
      setActiveUI({
       all: true,
       trackTime: false,
       progress: false,
       playButton: true
      });
      setWidth("100%")
    }else{
      setExpand(!expand)
      setActiveUI({ all: false,
        trackTime: false,
        progress: false,
         playButton: true })
      setWidth("40px")
  }
}

useEffect(() => {
  import('react-modern-audio-player')
    .then(({ default: AudioPlayer }) => {
      setAudioPlayer(
        <AudioPlayer 
        playList={playList}
        activeUI={{
          ...activeUI
        }}
        rootContainerProps={{
          width
        }}
        /> 
      )
    })
    .catch((error) => {
      console.error(error);
    });
}, []);
const [audioPlayer, setAudioPlayer] = useState<React.ReactNode>(null);
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
       {audioPlayer && audioPlayer}
        </div>
        </div>
        </>
    )
}