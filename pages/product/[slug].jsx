import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Product from '../../components/Product';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ products, product }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();
  return (
    <div>
      <div className="flex-nowrap m-5 md:m-10 md:mt-14 text-[#324d67] flex gap-10">
        <div>
          <div>
            <img src={urlFor(image && image[index])} alt="product" className='rounded-2xl bg-[#ebebeb] w-[400px] h-[400px] cursor-pointer transition-colors hover:bg-[#f02d34]' />
          </div>
          <div className="flex gap-2 mt-5">
            {image?.map((product, i) => (
              <img src={urlFor(product)} alt="product" key={product._id} onMouseEnter={() => setIndex(i)} className={i === index ? 'rounded-lg bg-[#f02d34] w-20 h-20 cursor-pointer' : 'rounded-lg bg-[#ebebeb] w-20 h-20 cursor-pointer'} />
            ))}
          </div>
        </div>
        <div>
          <h1 className='font-semibold text-4xl'>{name}</h1>
          <div className='mt-2 flex gap-1 items-center'>
            <div className='flex text-[#f02d34]'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4 className='font-semibold mt-2'>Details: </h4>
          <p className='text-[#324d67] mt-2'>{details}</p>
          <h4 className='font-semibold mt-2'>Price: </h4>
          <p className='mt-3 text-3xl font-semibold text-[#f02d34]'>${price}</p>
          <div className="font-semibold gap-5 mt-2 items-center flex">
            <h3 className="pt-1">Quantity:</h3>
            <p className="border border-gray-600 flex mt-2">
              <span className='border-r border-gray-600 py-2 px-4 text-[#f02d34] cursor-pointer' onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className='border-r border-gray-600 w-12 text-center pt-[5px]'>
                {qty}
              </span>
              <span className='py-2 px-4 text-[#f02d34] cursor-pointer' onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="flex gap-7">
            <button type="button" className="text-black hover:text-white border 
            border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300
            font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2 mt-5 transition-colors w-full" onClick={() => onAdd(product, qty)}>
              Add to Cart</button>
            <button type="button" className="text-white hover:text-black border 
            border-black bg-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300
            font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2 mt-5 transition-colors w-full">
              Buy Now</button>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <h2 className='text-center mt-12 text-[#324d67] text-3xl font-semibold'>You may also like</h2>
        <div className="marquee">
          <div className='flex justify-center gap-6 mt-5'>
            {products.map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "product"]`;

  const product = await client.fetch(productQuery);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products }
  }
}


export default ProductDetails