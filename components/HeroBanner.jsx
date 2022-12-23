import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='py-24 px-10 bg-[#dcdcdc] rounded-2xl relative h-[560px] md:h-[500px] leading-[0.9] w-full'>
      <div>
        <p className='text-xl'>{heroBanner.smallText}</p>
        <h3 className='text-4xl md:text-7xl mt-1'>{heroBanner.midText}</h3>
        <h1 className='text-5xl md:text-8xl -ml-5 uppercase text-white'>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className='absolute top-[-2%] md:top-0 right-[-6%] md:right-[20%] w-[77%] md:w-[450px] height-[62px] md:height-[450px]' />
      </div>
      <div>
        <Link href={`/products/${heroBanner.product}`}>
          <button className='inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out' type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className="bottom-16 md:bottom-[-5%] right-[10%] absolute width-[300px] leading-5 flex flex-col text-[#324d67]">
          <h5 className='mb-3 font-semibold self-end'>Description</h5>
          <p className='text-[#5f5f5f] font-light text-end'>DESCRIPTION</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner