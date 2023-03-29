"use client";
import React, { useState, useEffect , useRef } from 'react';
import Image from 'next/image'
import styles from '../styleSheets/languages.module.css'
import localFont from 'next/font/local'
import SA from 'scroll-animations-js'
import  'scroll-animations-js/dist/css/index.min.css'
const anurati = localFont({ src: '../fonts/Ailerons-TrialVersion.otf' })
const aileron= localFont({ src: '../fonts/Anurati-Regular.otf' })

export default function Language() {
useEffect(() => SA.init(), []);
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
const [expand , setExpand] = useState(false)
const [logos, setLogos] = useState([]);
useEffect(() => {

  const slans = expand ? lans : lans.slice(0, 4);
  const logo = slans.map((lan, index) => (
    <div key={index} className={`${styles.logobox} ${styles.border} ${styles.neon} sa-animation sa-fade-down`} sa-delay="300">
      <Image 
        src={lan.src}
        width={100}
        height={100}
        alt={`logo_${lan.name}`}
      />
      <span>{lan.name}</span>
    </div>
  ));
  setLogos(logo);
});

const handleExpand= () =>{
    setExpand(true)
}

    return(
        <>
        <p className={anurati.className}>S K I L L S</p>
        <span className={`${styles.disp} ${aileron.className} `}>Alaways learning and improving to be able to use latest  technologies</span>
        <div className={styles.flexbox}>
        {logos}
        
         <button onClick={handleExpand}>expand</button> 
        </div>
        </>
    )

}