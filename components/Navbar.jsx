import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='flex justify-between my-2 mx-5 relative'>
      <p className='text-gray-600 text-lg'>
        <Link href="/">LM Headphones</Link>
      </p>
      <button type='button' className='text-2xl text-gray-600 
      cursor-pointer relative transition-transform border-none
      bg-transparent hover:scale-110' onClick="">
        <AiOutlineShopping />
        <span className="absolute -right-2 -top-0 text-sm text-[#eee]
        bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold">
          1
        </span>
      </button>
    </div>
  )
}

export default Navbar