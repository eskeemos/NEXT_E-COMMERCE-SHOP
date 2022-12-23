import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='py-24 px-10 bg-[#dcdcdc] rounded-2xl relative h-[560px] md:h-[500px] leading-[0.9] w-full'>
      <div>
        <p className='text-xl ml-1'>{heroBanner.smallText}</p>
        <h3 className='text-4xl md:text-7xl mt-1'>{heroBanner.midText}</h3>
        <h1 className='text-5xl md:text-8xl ml-1 uppercase text-white'>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className='absolute top-[-2%] md:top-0 right-[-6%] md:right-[20%] w-[77%] md:w-[450px] height-[62px] md:height-[450px]' />
        <div>
          <Link href={`/products/${heroBanner.product}`}>
            <button type="button" className="text-black hover:text-white border 
            border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300
            font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors">
              {heroBanner.buttonText}</button>
          </Link>
          <div className="absolute bottom-16 md:bottom-[5%] right-[10%] width-[300px] leading-5 flex flex-col text-[#324d67]">
            <h5 className='mb-3 font-semibold self-end'>Description</h5>
            <p className='text-[#5f5f5f] font-light text-end'>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner