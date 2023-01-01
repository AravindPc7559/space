import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'

type Props = {}

const Navbar = (props: Props) => {
    const [toogleOptions, setToogleOptions] = useState(false);
  return (
    <div className='bg-gray-100'>
        <div className='flex justify-between p-6 md:px-24'>
        <div>
            <h1>Space</h1>
        </div>
        {
            toogleOptions ? null : 
            <div className='md:hidden'>
            <FaBars className='text-2xl' />
            
            </div>
        }
        <div className='hidden md:flex'>
            <ul className='flex gap-5 font-bold text-gray-400'>
                <li className='cursor-pointer  hover:text-gray-500'>Home</li>
                <li className='cursor-pointer  hover:text-gray-500'>Templates</li>
                <li className='cursor-pointer  hover:text-gray-500'>Price</li>
                <li className='cursor-pointer  hover:text-gray-500'>Help</li>
                <li className='text-blue-700 border px-5 py-2 -mt-2 cursor-pointer border-black rounded-md  hover:text-blue-800'>Get In Touch</li>
            </ul>
        </div>
       
        </div>
    </div>
  )
}

export default Navbar