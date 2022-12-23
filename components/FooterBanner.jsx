import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({ footerBanner: {discount, largeText1, largeText2, saleTime, 
  smallText, midText, desc, product, buttonText, image} }) => {
  return (
    <div className='h-[560px] md:h-[400px] mt-20 md:mt-28 py-24 px-10 bg-[#f02d34] rounded-2xl
    relative text-white w-full'>
      <div className="flex justify-between">
        <div>
          <p className='m-4'>{discount}</p>
          <h3 className='font-semibold text-5xl md:text-7xl ml-1 md:ml-6'>{largeText1}</h3>
          <h3 className='font-semibold text-5xl md:text-7xl ml-1 md:ml-6'>{largeText2}</h3>
          <p className='m-4'>{saleTime}</p>
        </div>
        <div className="leading-6">
          <p className='text-[18px] mb-3'>{smallText}</p>
          <h3 className='font-semibold text-5xl md:text-6xl'>{midText}</h3>
          <p className='text-[18px]'>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button" className="text-white hover:text-[#f02d34] border border-white
          hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
            text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6 transition-colors">{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} className="absolute -top-1/4 left-1/4" alt="footer-image" />
      </div>
    </div>
  )
}

export default FooterBanner