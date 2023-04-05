"use client";
import React, { useState, useEffect , forwardRef } from 'react';
import Image from 'next/image'
import styles from '../styleSheets/island.module.css'
import glass from '../styleSheets/glass.module.css'
import localFont from 'next/font/local'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { AiOutlineAppstore } from "react-icons/ai";
const aileron= localFont({ src: '../fonts/Anurati-Regular.otf' })

export default function Island() {
const [open , setOpen] = useState(false);
const handleIsland = () => {
    setOpen(!open)
}
const days = [ 
'/days/Sunday.jpg',
'/days/Monday.jpg',
'/days/Tuesday.jpg',
'/days/Wednesday.jpg',
'/days/Thursday.jpg',
'/days/Friday.jpg',
'/days/Saturday.jpg']
   

const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const day = current.getDay()
return (
    <>
    <button className={`${glass.glass_button} ${styles.island}`} hidden = {open} onClick={handleIsland}>{date} </button>
    {
        open &&
     
        
        <div className={`${styles.shell}`} >
        <div className={`${styles.backdrop}`} onClick={handleIsland}></div>
            <div className={`${styles.btn_outter}`}><button onClick={handleIsland} className={`${glass.glass_button}`}>X</button></div>
            <div className={`${styles.panel} ${glass.glass_panel}`}>
            <div className={`${styles.calendar_box}`}> 
            <Calendar className={`${styles.calendar}`} />
            <Image
               src={days[day]}
               width={150}
               height={150}
               alt='Today'
               />
               </div>
            </div>
        </div>
    
    }
    </>
)
}