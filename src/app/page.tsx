"use client";
import React, { useState, useEffect ,useRef, useCallback } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import glass from '../styleSheets/glass.module.css'
import modal from '../styleSheets/island.module.css'
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
import CodersRankSummary from '@/components/coderrank/coderrank_summary';
import CoderRankActivity from '@/components/coderrank/activity';
import CoderRankExperience from '@/components/coderrank/experience';
import localFont from 'next/font/local'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from 'axios'
import { getAbsoluteUrl } from '../../utils/vercel-utils';

const aileron= localFont({ src: '../fonts/Anurati-Regular.otf' })
export default function Home() {
const  [type , setType] = useState('')
const [email,setEmail]=useState('')
const [name,setName]=useState('')
const  [showmodal, setShowmodal] = useState(false)  
const [message,setMessage] = useState(null)
const [noti,setNoti] = useState('')
const [emailError, setEmailError] = useState('');
const { executeRecaptcha } = useGoogleReCaptcha();
  useEffect(() => SA.init(), []);
  const saveCv = () => {
    setShowmodal(!showmodal)
    setType('Resume')
    /*
    saveAs(
      "/info/ZayarMoeKaung_Resume_16-05-2023-10-29-33.pdf",
      "zayarmoekaung_resume.pdf"
    );
   */
  };
  const savePortfolio = () => {
    /*saveAs(
      "/info/zayarmoekaung_portfolio.pptx", 
      "zayarmoekaung_portfolio.pptx"
    );*/
    setShowmodal(!showmodal)
    setType('Portfolio')
  };
  const handlemodal = () =>{
    setShowmodal(!showmodal)
    
    if (showmodal) {
      setEmail('')
      setName('')
      setEmailError('')
    }
  }
  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    const { value } = e.target;
    setEmail(value);
    setEmailError(validateEmail(value));
     
  };
  const validateEmail = (email) => {
    // Email validation logic
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return 'Invalid email address';
    }
    return '';
  };
  const handleNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };
  const handleSumitForm = useCallback(
    (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        console.log(gReCaptchaToken, "response Google reCaptcha server");
        handleSubmit(e);
      });
    },
    [executeRecaptcha]
  );
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (emailError) {
    handlemodal();  
    setMessage('Your email is invalid');
    setNoti('error');
    
      return;
    }
    const absoluteUrl = getAbsoluteUrl();
    handlemodal();
    const formData = new FormData();
formData.append('name', name);
formData.append('email', email);
formData.append('type', type);

try {
  const response = await fetch(absoluteUrl + '/api/email', {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    // Handle success
    console.log('Email sent successfully');
    setMessage('You will receive an email shortly');
    setNoti('success');
  } else {
    // Handle error
    console.error('Failed to send');
    setMessage('Something went wrong. Please try again later.');
    setNoti('error');
  }
} catch (error) {
  // Handle error
  console.error('Error sending email:', error);
}

    
  };
  const handleClose = ()=>{
   setMessage(null)
  };
  return (
    <>
    
      <Navbar></Navbar>
     {
      message &&
      <div className={`${styles.notification} ${noti== 'success' ? styles.success : styles.error}`}>
      <span className={`${styles.message}`}>{message}</span>
      <button className={`${styles.close_button}`}onClick={handleClose}>
        &times;
      </button>
    </div>


     }  
    <main className={styles.main}>
    {
        showmodal &&
     
        <GoogleReCaptchaProvider
        reCaptchaKey="6Lciv0smAAAAAPsT95rlCLOBvv5S5pDuYaWzD06y"
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}>
        <div className={`${modal.shell}`} >
        <div className={`${modal.backdrop}`} onClick={handlemodal}></div>
            <div className={`${modal.btn_outter}`}><button onClick={handlemodal} className={`${glass.glass_button}`}>X</button></div>
            <div className={`${modal.panel} ${glass.glass_panel}`}>
              <p>
                Please submit your name and email address 
              </p>
            <form className={styles.formContainer}>
      <input
        type="email"
        placeholder="Enter Your Mail"
        required
        value={email}
        onChange={handleEmailChange}
        className={styles.inputField}
      />
      {emailError && <p className={styles.error_txt}>{emailError}</p>}
      <input
        type="text"
        placeholder="Enter Your Name / Business Name"
        required
        value={name}
        onChange={handleNameChange}
        className={styles.inputField}
      />
      <button onClick={handleSumitForm} className={styles.button}>
        Send
      </button>
    </form>
            </div>
        </div>
    </GoogleReCaptchaProvider>
    }
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
         <button className={glass.glass_button} onClick={savePortfolio}>Get my portfolio</button>
        </div>
     </div>
      
    
     </div>
     
    <section id='skills' className={`${styles.section}`}> 
     <Language />
     <CodersRankSummary username="zayarmoekaung" />
     </section>
     <section id='moto'  className={`${styles.section}`}>
      < Moto />
     </section>
     
     <Island/>
     <Music/>
     <section id='projects' className={`${styles.section}`}>
     <Project/>
     <CoderRankActivity username="zayarmoekaung" />
     </section>
     <Service/>
     <section id='experience' className={`${styles.exp_section}`}>
      <h3 className={`${aileron.className}`}>Work Experiences</h3>
     <CoderRankExperience username="zayarmoekaung"/>
     </section>
     <Contact/>
    </main>
  
    </>
  )
}
