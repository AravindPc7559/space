import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Testimonial from '../components/Testimonial/Testimonial'
import Faq from '../components/FAQ/Faq'
import { useEffect, useState } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [testimonial, setTestimonaial ] = useState([]);

  useEffect(() => {
            axios.get('https://naseers819.wixsite.com/website-5/_functions/webpageTestimonials').then((res) => {
              setTestimonaial(res.data)
            })
        },[])
  return (
    <>
     <Navbar />
     <Banner />
     <Testimonial  testimonial={testimonial} />
     <Faq/>
    </>
  )
}
