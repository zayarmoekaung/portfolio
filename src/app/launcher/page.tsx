"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { useState , useEffect } from 'react'
import { API, TagTypes, } from 'nhentai-api';
const inter = Inter({ subsets: ['latin'] })

export default function Post() {
const api = new API(); 
const [cover , setCover] = useState('')
api.getBook(177013).then(book => {
	setCover(api.getImageURL(book.cover))    // https://t.nhentai.net/galleries/987560/cover.jpg
	api.getImageURL(book.pages[1]) // https://i.nhentai.net/galleries/987560/2.jpg
});
  return (
     <h1>
        Hello next page
        <Image 
        src={cover}
        width={300}
        height={800}
        alt={`logo_${cover}`}
        />
        <Link href={'/'}>Home</Link>
     </h1>
     
  )
}