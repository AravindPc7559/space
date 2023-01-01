/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
   <>
    <div className='mt-10 container mx-auto px-5 md:px-24 w-full'>
        <div className='md:flex justify-between'>
            <div className='max-w-[400px] max-h-auto'>
                <img src="/assets/images/bannerImg1.jpg" className='object-cover rounded-lg'  alt="" />
            </div>
            <div className='flex flex-col justify-center items-center md:p-20 '>
                <h1 className='mt-5 font-extrabold text-5xl leading-tight text-center md:text-start'>Requirments Gathering and  Analysis For reference</h1>
                <p className='mt-10 text-center md:text-start font-normal leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore natus delectus atque! Magnam consequuntur error ipsam dolor soluta exercitationem adipisci cupiditate. Sunt fuga cumque magnam voluptate illum! Vel eligendi, neque doloribus maiores sapiente velit minima delectus, cum iste porro, blanditiis id accusamus dolorem recusandae unde vitae amet distinctio libero perspiciatis.</p>
            </div>
        </div>
    </div>
    {/* banner2 */}
    <div className='mt-16 w-full min-h-[400px] bg-gradient-to-b from-blue-200 to-white'>
    <div className='container mx-auto md:pl-[600px]'>
    <div className='max-w-[700px] absolute md:-mt-[100px] p-5 -mt-[50px]'>
                <img src="/assets/images/bannerImg2.jpg" className='object-cover rounded-lg '  alt="" />
            </div>
    </div>
    </div>
   </>
  )
}

export default Banner