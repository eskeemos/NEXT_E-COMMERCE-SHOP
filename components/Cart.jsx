import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineLeft, AiOutlineShopping, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();

  return (
    <div className='w-screen bg-[#00000080] fixed right-0 top-0 z-50 transition-all' ref={cartRef}>
      <div className='h-screen w-[600px] bg-white float-right py-10 px-2 relative'>
        <button type="button" className="flex items-center text-xl font-semibold cursor-pointer gap-1 ml-3 bg-transparent" onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='ml-2'>Your Cart</span>
          <span className='ml-2 text-[#f02d34]'>({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="m-10 text-center">
            <AiOutlineShopping size={150} className="m-auto" />
            <h3 className='text-2xl'>Your shopping bag is empty</h3>
            <Link href="/">
              <button type="button" onClick={() => setShowCart(false)} className="text-white hover:text-black border border-black bg-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2 mt-5 transition-colors w-full">Continue shopping</button>
            </Link>
          </div>
        )}
        <div className="mt-4 overflow-hidden max-h-[70vh] py-5 px-2">
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className="flex gap-7 p-5 my-1" key={index}>
              <img src={urlFor(item?.image[0])} className="w-44 h-40 rounded-2xl bg-[#ebebeb]" alt="product" />
              <div className='h-40 w-full flex flex-col justify-between py-2'>
                <div className="flex-wrap gap-2">
                  <h5 className='text-[#324d67] text-xl'>{item.name}</h5>
                  <h4 className='text-lg mt-2'>${item.price}</h4>
                </div>
                <div className="flex justify-between">
                  <p className="border border-gray-600 flex">
                    <span className='border-r border-gray-600 py-2 px-4 cursor-pointer' onClick="">
                      <AiOutlineMinus />
                    </span>
                    <span className='border-r border-gray-600 w-12 text-center pt-[5px]'>
                      0
                    </span>
                    <span className='py-2 px-4 cursor-pointer' onClick="">
                      <AiOutlinePlus />
                    </span>
                  </p>
                  <button type="button" className="text-[#f02d34] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center text-2xl" onClick=""><TiDeleteOutline /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="p-7 border-t border-black">
            <div className="flex text-2xl justify-center">
              <h3>Subtotal:</h3>
              <h3 className='pl-2'>${totalPrice}</h3>
            </div>
            <div className="w-[400px] m-auto">
              <button type="button" onClick="" className="text-white hover:text-black border border-black bg-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2 mt-5 transition-colors w-full">Pay with Stripe</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart