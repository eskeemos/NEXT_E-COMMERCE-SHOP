import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'
import { runFireworks } from '../lib/utils'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, [])
  
  return (
    <div>
      <div className="h-[500px] flex justify-center items-center flex-col bg-[#dcdcdc] rounded-xl m-10">
        <p className='text-green-600 text-6xl p-16'>
          <BsBagCheckFill />
        </p>
        <h2 className='capitalize mt-4 font-semibold text-4xl text-[#324d67]'>Thank you for your order!</h2>
        <p className='font-semibold text-center mt-4'>Check your email inbox for the receipt</p>
        <p className='text-center m-2 my-4'>
          If you have any questions, email us at
          <a href="mailto:order@example.com" className='text-red-600'> order@example.com</a>
        </p>
        <Link href="/">
          <button type="button" className="text-black hover:text-white border 
            border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-10 transition-colors">Continue shopping</button>
        </Link>
      </div>
    </div>
  )
}

export default Success