/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

type Props = {}
type TestimonialProp = {
        id:number,
        avatar:string,
        designation:string,
        message:string,
        name:string
}[]

const Testimonial = (props: Props) => {

const [testimonials , setTestimonials] = useState<TestimonialProp>()
const [value, setValue] = useState(1);


    useEffect(() => {
        axios.get('https://naseers819.wixsite.com/website-5/_functions/webpageTestimonials').then((res) => {
            setTestimonials(res.data)
        })
    },[value])
   

  return (
    <div className='w-full container mx-auto md:mt-10 my-10'>
        <h1 className='text-3xl text-center md:text-start font-bold -tracking-normal'>Testimonial</h1>

        {
            testimonials?.splice(0,value).map((data) => {
                return(
                    <>
                    <div className={`w-full h-auto ${data.id === 1 && 'bg-lime-300'} ${data.id === 2 && 'bg-orange-300'} ${data.id === 3 && 'bg-rose-300'} mt-6 flex-wrap`}>

<div className=' p-10 flex flex-col'>
<div className='max-w-[900px]'>
<h1 className='text-3xl'>{data.message}</h1>
</div>
<div className='flex'>
<div className='w-[70px] mt-9'>
    <img src={data.avatar} className='rounded-full'  alt="" />
</div>
<div className='mt-12 ml-5'>
    <h6>{data.name}</h6>
<p className='text-xs'>{data.designation}</p>
</div>
</div>
</div>
</div>
<div className='flex mt-4'>
<div className=' bg-gray-100 shadow-xl rounded-full flex items-center justify-center my-auto p-3 cursor-pointer' >
<FaLessThan  className='' onClick={() => setValue(value-1)}/>
</div>
<div className='flex gap-6 px-4'>
<div className={`${data.id === 1 ? ' bg-black text-white shadow-xl rounded-full flex items-center justify-center my-auto p-3 cursor-pointer' : 'mt-3 cursor-pointer'}`} >
<p onClick={() => setValue(0)}>1</p>
</div>
<div className={`${data.id === 2 ? ' bg-black text-white shadow-xl rounded-full flex items-center justify-center my-auto p-3 cursor-pointer' : 'mt-3 cursor-pointer'}`} >
<p onClick={() => setValue(1)}>2</p>
</div>
<div className={`${data.id === 3 ? ' bg-black text-white shadow-xl rounded-full flex items-center justify-center my-auto p-3 cursor-pointer' : 'mt-3 cursor-pointer'}`} >
<p onClick={() => setValue(2)}>3</p>
</div>
</div>
<div className=' bg-gray-100 shadow-xl rounded-full flex items-center justify-center my-auto p-3 cursor-pointer'>
<FaGreaterThan  className='' onClick={() => setValue(value+1)}/>
</div>
</div>
                    </>
                )
            })
        }
        </div>
    )
    }

    export default Testimonial