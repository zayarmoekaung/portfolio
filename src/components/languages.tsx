"use client";
import React, { useState, useEffect , useRef } from 'react';
import Image from 'next/image'
import styles from '../styleSheets/languages.module.css'
import glass from '../styleSheets/glass.module.css'
import localFont from 'next/font/local'
import SA from 'scroll-animations-js'
import  'scroll-animations-js/dist/css/index.min.css'
import { Link, animateScroll as scroll , scroller} from 'react-scroll';
const anurati = localFont({ src: '../fonts/Ailerons-TrialVersion.otf' })
const aileron= localFont({ src: '../fonts/Anurati-Regular.otf' })
const lans = [
  {src:"/svg/amazonwebservices/amazonwebservices-original-wordmark.svg", name:"AWS" },
  {src:"/svg/apache/apache-original-wordmark.svg",name:"Apache Server"},
  {src:"/svg/bitbucket/bitbucket-original-wordmark.svg",name:"BitBucket"},
  {src: "/svg/bootstrap/bootstrap-plain.svg" ,name:"Bootstrap"},
  {src: "/svg/css3/css3-plain.svg" , name:"CSS"},
  {src: "/svg/docker/docker-plain-wordmark.svg", name:"Docker"},
  {src: "/svg/flask-original.svg" , name:"Flask"},
  {src: "/svg/git/git-plain.svg" , name:"Git"},
  {src: "/svg/html5/html5-plain-wordmark.svg", name:"Html 5"},
  {src: "/svg/hugo/hugo-plain.svg", name: "Hugo"},
  {src: "/svg/java/java-plain.svg" , name: "Java"},
  {src: "/svg/javascript/javascript-plain.svg", name: "JavaScript"},
  {src: "/svg/jquery/jquery-plain-wordmark.svg", name: "Jquery"},
  {src: "/svg/laravel/laravel-plain.svg", name: "Laravel"},
  {src: "/svg/mongodb/mongodb-plain.svg", name: "MongoDB"},
  {src: "/svg/mysql/mysql-plain.svg", name: "MySql"},
  {src: "/svg/Nuxt_logo.svg", name: "Nuxt.js"},
  {src: "/svg/nextjs-original.svg", name: "Next.js"},
  {src: "/svg/nginx/nginx-original.svg", name: "Nginx"},
  {src: "/svg/nodejs/nodejs-plain.svg", name: "Node.js"},
  {src: "/svg/php/php-plain.svg", name: "PHP"},
  {src: "/svg/python/python-plain.svg" , name: "Python"},
  {src: "/svg/rails/rails-plain.svg", name: "Rails"},
  {src: "/svg/react/react-original-wordmark.svg", name: "React"},
  {src: "/svg/ruby/ruby-plain.svg" , name: "Ruby"},
  {src: "/svg/vuejs/vuejs-original.svg", name:"Vue.js"},
  {src: "/svg/wordpress/wordpress-plain.svg" ,  name: "Wordpress"},
];

const getLogos = (expand: boolean): React.ReactElement[] => {
  const slans = expand ? lans : lans.slice(0, 4);
  return slans.map((lan, index) => (
    <div key={index} className={`${styles.logobox} ${styles.border} ${styles.neon} `} >
      <Image 
        src={lan.src}
        width={100}
        height={100}
        alt={`logo_${lan.name}`}
      />
      <span>{lan.name}</span>
    </div>
  ));
};
export default function Language() {
useEffect(() => SA.init(), []);

const [expand , setExpand] = useState(false)
const [logos, setLogos]  = useState([] as React.ReactElement[])
const logoContainerClasses = expand ? styles.show : styles.hide;

useEffect(() => {
  const slans = expand ? lans : lans.slice(0, 4);
  const newLogos = slans.map((lan, index) => (
    <div key={index} className={`${styles.logobox} ${styles.border} ${styles.neon} `} >
      <Image 
        src={lan.src}
        width={100}
        height={100}
        alt={`logo_${lan.name}`}
      />
      <span>{lan.name}</span>
    </div>
  ));
  setLogos(prevLogos => {
    if (prevLogos.length === newLogos.length) {
      // Only update logos if there's a change in the source or name of the language logos.
      const hasChange = prevLogos.some((prevLogo, index) => {
        const newLogo = newLogos[index];
        const prevSrc = prevLogo.props.src;
        const newSrc = newLogo.props.src;
        const prevName = prevLogo.props.children[1].props.children;
        const newName = newLogo.props.children[1].props.children;
        return prevSrc !== newSrc || prevName !== newName;
      });
      if (hasChange) {
        return newLogos;
      } else {
        return prevLogos;
      }
    } else {
      return newLogos;
    }
  });
}, [expand, lans]);

const handleExpand= () =>{
    setExpand(!expand)
    scroller.scrollTo('expandbtn', {
        duration: 1500,
        delay: 100,
        smooth: true,
       
        offset: 0 // Scrolls to element + 50 pixels down the page
     
      });
}

    return(
        <>
        <span className={`${anurati.className} ${styles.title}`}>S K I L L S</span>
        <br/> 
        <span className={`${styles.disp} ${aileron.className} `}>Alaways learning and improving to be able to use latest  technologies</span>
        <br />
       
        <div className={`${styles.flexbox} ${logoContainerClasses} ${glass.glass_panel}`}>
        {logos}
        <div className={`${styles.button_box}`}>
         <button id='expandbtn' name='expandbtn' onClick={handleExpand} className={`${glass.glass_button}`}>{expand? 'show less' : 'show all'}</button> 
         </div>
        </div>
        </>
    )

}