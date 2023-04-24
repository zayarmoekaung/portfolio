
import React from 'react';
import Image from 'next/image'
import styles from '../../styleSheets/project.module.css'
import glass from '../../styleSheets/glass.module.css'
import localFont from 'next/font/local'
import { List } from "./list";
const aileron= localFont({ src: '../../fonts/Anurati-Regular.otf' })
export default function Project() {
    const Projects = List.map((pj,index)=>(
		<a  key={index}>
			<div  className={`${styles.project} ${glass.glass_panel}`}>
		  <Image 
        src={pj.image}
        width={400}
        height={400}
        alt={`logo_${pj.name}`}
      />
		<h3>{pj.name}</h3>
		<p>{pj.disp} </p>
	</div>	
		</a>
	));
    return(
        <>
            <h3 className={`${aileron.className}`}>Projects</h3>
            <p className={`${aileron.className}`}>Selected recent projects I&apos;ve done </p>
            <div className={`${styles.container}`}>
			{Projects}
            </div>       
        </>
    )
}