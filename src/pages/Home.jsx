// import { Icon } from '@iconify/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Hero from '../components/hero-section/Hero';
import MostRecent from '../components/MostRecent';
import QuickSales from '../components/QuickSales';
import TopSellingItems from '../components/TopSellingItems';
import Upcoming from '../components/Upcoming';
import { productsFetch } from '../redux/features/productSlice';
// import { store } from '../redux/store';

const Home = () => {
  
  const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(productsFetch())
    }, [dispatch])
    
  // useSelector to get the products from the redux store
    const products = useSelector((state) => state.products.items)

  
   
  return (
    <div className='home'>

      <Hero products={products}/>
      <TopSellingItems products={products}/>
      <QuickSales products={products}/>
      <Upcoming products={products}/>
      <MostRecent />
      <Footer/>
    </div>
  )
}

export default Home