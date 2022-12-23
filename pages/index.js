import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, heroBanner}) => {
  console.log(products, heroBanner);
  return (
    <>
      <HeroBanner heroBanner={heroBanner.length && heroBanner[0]} />
      <div className='text-center my-10 text-[#324d67]'>
        <h2 className='text-4xl font-bold'>Best Seller Products</h2>
        <p className='font-normal'>Speakers of many variations</p>
      </div>
      <div className='flex flex-wrap justify-center gap-4 mt-5 w-full'>
        {products?.map(product => (product.name))}
      </div>
      <FooterBanner />
    </>
  )
}
export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);
  const bannerQuery = '*[_type == "banner"]';
  const heroBanner = await client.fetch(bannerQuery);

  return {
    props: { products, heroBanner }
  }
}

export default Home