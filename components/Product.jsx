import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='cursor-pointer scale-100 hover:scale-110 transition-transform text-[#324d67]'>
          <img src={urlFor(image && image[0])} width={250} height={250} 
          alt="product" className='rounded-2xl bg-[#ebebeb] scale-100 transition-transform' />
          <p>{name}</p>
          <p className='font-semibold mt-1 text-black'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product