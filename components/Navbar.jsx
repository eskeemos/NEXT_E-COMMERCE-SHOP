import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='flex justify-between my-2 mx-5 relative'>
      <p className='text-gray-600 text-lg'>
        <Link href="/">LM Headphones</Link>
      </p>
      <button type='button' className='text-2xl text-gray-600 
      cursor-pointer relative transition-transform border-none
      bg-transparent hover:scale-110' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="absolute -right-2 -top-0 text-sm text-[#eee]
        bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold">
          {totalQuantities}
        </span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar