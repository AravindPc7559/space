import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Testimonial from '../components/Testimonial/Testimonial'
import Faq from '../components/FAQ/Faq'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Navbar />
     <Banner />
     <Testimonial />
     <Faq/>
    </>
  )
}
