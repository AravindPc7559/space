import React, { useState } from 'react'
import {BsArrowDownCircleFill , BsArrowUpCircleFill } from 'react-icons/bs'
type Props = {}

const Faq = (props: Props) => {
  const [id, setId] = useState(1);
  const faqs = [
    {
      id:1,
      title:'Faq Question 1',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quaerat veniam architecto, aspernatur sit totam incidunt illo sint alias similique.'
    },
    {
      id:2,
      title:'Faq Question 2',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quaerat veniam architecto, aspernatur sit totam incidunt illo sint alias similique.'
    },
    {
      id:3,
      title:'Faq Question 3',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quaerat veniam architecto, aspernatur sit totam incidunt illo sint alias similique.'
    },
    {
      id:4,
      title:'Faq Question 4',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quaerat veniam architecto, aspernatur sit totam incidunt illo sint alias similique.'
    },
    {
      id:5,
      title:'Faq Question 5',
      description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quaerat veniam architecto, aspernatur sit totam incidunt illo sint alias similique.'
    }
  ]
  return (
    <div className='w-full h-auto bg-sky-100 p-10'>
<div className='md:flex items-center justify-evenly pt-10 gap-6 container mx-auto'>
 <div>
  <h1 className='text-center font-extrabold py-2 text-2xl'>FAQ Heading</h1>
 <div className='w-[300px] flex flex-col justify-center gap-5 pl-2 p-2 h-[300px] bg-green-900 rounded-xl'>
    <h1 className=' font-extrabold text-white  rounded-xl cursor-pointer pl-2 hover:w-full hover:bg-green-700 py-2 pr-2'>Tab item 1</h1>
    <h1 className=' font-extrabold text-white cursor-pointer pl-2 hover:w-full hover:bg-green-700 py-2 pr-2'>Tab item 2</h1>
    <h1 className='font-extrabold text-white cursor-pointer pl-2 hover:w-full hover:bg-green-700 py-2 pr-2'>Tab item 3</h1>
    <h1 className='font-extrabold text-white cursor-pointer pl-2 hover:w-full hover:bg-green-700 py-2 pr-2'>Tab item 4</h1>
    <h1 className='font-extrabold text-white cursor-pointer pl-2 hover:w-full hover:bg-green-700 py-2 pr-2'>Tab item 5</h1>
  </div>
 </div>
  <div>
 
<div className='max-w-[700px]'>
 {
  faqs.map((data) => {
    return(
      <>
       <div className='border-b  border-gray-400 text-gray-500 dark:border-gray-700 dark:text-gray-400 h-auto '>
    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left md:gap-72">
      <span>{data.title}</span>
      {
        data.id === id
        ?
        <BsArrowUpCircleFill onClick={() => setId(-1)} />
        :
     <BsArrowDownCircleFill onClick={() => setId(data.id)} />
      }
    </button>
    {
      data.id === id &&
      <p className="mb-2 text-gray-500 dark:text-gray-400">{data.description}</p>
    }
    
  </div>
      </>
    )
  })
 }
  

</div>

  </div>
</div>
    </div>
  )
}

export default Faq