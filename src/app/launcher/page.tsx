"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { useState , useEffect } from 'react'
import axios from 'axios';
import Iframe from 'react-iframe'
const inter = Inter({ subsets: ['latin'] })

export default function Post() {
const [nuclearCode, setNuclearCode] = useState('')
const [ready,setReady] = useState(false)
  useEffect(() => {
   const openNewTab = () => {
     const newTab = window.open('https://zayar.otamyanmar.com', '_blank');

     const handleNewTabLoad = () => {
       // Get the contents of the new tab
       const contents = newTab.document.documentElement.innerHTML;
       console.log(contents);

       // Close the new tab
       newTab.close();

       // Remove the event listener
       newTab.removeEventListener('load', handleNewTabLoad);
     };

     // Add a load event listener to the new tab
     newTab.addEventListener('load', handleNewTabLoad);
   };

   openNewTab();
 }, []);
  return (
     <h1>
    
       
     </h1>
     
  )
}