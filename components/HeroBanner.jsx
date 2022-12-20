import React from 'react'
import Link from 'next/link'
const HeroBanner = () => {
  return (
    <div className='py-24 px-10 bg-[#dcdcdc] rounded-2xl relative h-[560px] md:h-[500px] leading-[0.9] w-full'>
      <div>
        <p className='text-xl'>SMALL TEXT</p>
        <h3 className='text-4xl md:text-7xl mt-1'>MID TEXT</h3>
        <img src="" alt="headphones" className='absolute top-[-2%] md:top-0 right-[-6%] md:right-[20%] w-[77%] md:w-[450px] height-[62px] md:height-[450px]' />
      </div>
      <div>
        <Link href="/products/ID">
          <button className='inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out' type="button">BUTTON TEXT</button>
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