/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

type Props = {
    testimonial:{
                 id:number,
                avatar:string,
                 designation:string,
                 message:string,
                 name:string
        }[]
}

const Testimonial = ({testimonial}: Props) => {
    const [value, setValue] = useState(0)
    const[secondtesti, setSecondTesti] = useState(1)
  return (
    <div>

        <div className='md:ml-10 mx-2'>
        <h1 className='text-3xl text-center md:text-start font-bold -tracking-normal my-8'>Testimonial</h1>
            <div className='w-full h-auto flex gap-10'>
                <div className={`w-full md:w-[70%] h-auto ${value === 0 && 'bg-red-300`'} ${value === 1 && 'bg-orange-300'} ${value === 2 && 'bg-rose-300'}`}>
                <div className=' p-10 flex flex-col'>
 <div className='max-w-[900px]'>
 <h1 className='text-3xl'>{testimonial && testimonial[value]?.message}</h1>
 </div>
 <div className='flex'>
 <div className='w-[70px] mt-9'>
     <img src={testimonial && testimonial[value]?.avatar} className='rounded-full'  alt="" />
 </div>
 <div className='mt-12 ml-5'>
     <h6>{testimonial && testimonial[value]?.name}</h6>
<p className='text-xs'>{testimonial && testimonial[value]?.designation}</p>
</div>
</div>
 </div>
                </div>
                <div className={`max-w-[30%] hidden md:flex h-auto ${secondtesti === 0 && 'bg-red-300'} ${secondtesti === 1 && 'bg-orange-300'} ${secondtesti === 2 && 'bg-rose-300'}`}>
                <div className=' p-10 flex flex-col '>
 <div className='max-w-[900px]'>
 <h1 className='text-3xl'>{testimonial && testimonial[secondtesti]?.message}</h1>
 </div>
 <div className='flex'>
 <div className='w-[70px] mt-9'>
     <img src={testimonial && testimonial[secondtesti]?.avatar} className='rounded-full'  alt="" />
 </div>
 <div className='mt-12 ml-5'>
     <h6>{testimonial && testimonial[secondtesti]?.name}</h6>
<p className='text-xs'>{testimonial && testimonial[secondtesti]?.designation}</p>
</div>
</div>
 </div>
                </div>
            </div>
        </div>


        {/* pagination */}
        <div className='flex mt-4 ml-10 my-10'>
<div className=' bg-gray-100 shadow-xl rounded-full flex items-center justify-center my-auto p-3 cursor-pointer' >
 <FaLessThan  className='' onClick={() => {
    if(value === 0 || secondtesti === 0){
        setValue(0)
        setSecondTesti(1)
    }else{
        setValue(value-1)
        setSecondTesti(secondtesti-1)
    }
}
}
/>
</div>
<div className='flex gap-6 px-4'>
 <div className={`${value === 0 ? ' bg-black text-white shadow-xl rounded-full flex items-center justify-center my-auto p-3 cursor-pointer' : 'mt-3 cursor-pointer'}`} >
 <p onClick={() => {
    setValue(0)
    setSecondTesti(1)
 }}>1</p>
 </div>
 <div className={`${value === 1 ? ' bg-black text-white shadow-xl rounded-full flex items-center justify-center my-auto p-3 cursor-pointer' : 'mt-3 cursor-pointer'}`} >
 <p onClick={() => {setValue(1)
setSecondTesti(2)
}}>2</p>
 </div>
 <div className={`${value === 2 ? ' bg-black text-white shadow-xl rounded-full flex items-center justify-center my-auto p-3 cursor-pointer' : 'mt-3 cursor-pointer'}`} >
 <p onClick={() => {setValue(2)
setSecondTesti(0)
}}>3</p>
 </div>

 </div>
 <div className=' bg-gray-100 shadow-xl rounded-full flex items-center justify-center my-auto p-3 cursor-pointer'>
 <FaGreaterThan  className='' onClick={() => {
    if(value === 2 || secondtesti === 2){
        setValue(2)
        setSecondTesti(0)
    }else{
        setValue(value+1)
        setSecondTesti(secondtesti+1)
    }
}}/>
 </div>
 </div>
    </div>
  )
}

export default Testimonial