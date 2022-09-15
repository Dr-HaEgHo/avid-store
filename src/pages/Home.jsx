import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Hero from '../components/hero-section/Hero';
import MostRecent from '../components/MostRecent';
import QuickSales from '../components/QuickSales';
import TopSellingItems from '../components/TopSellingItems';
import Upcoming from '../components/Upcoming';
import { productsFetch } from '../redux/features/productSlice';
import { store } from '../redux/store';

const Home = () => {

    // const products = useSelector((state) => state.products.items)

    // const setLocalProducts = () => {
    //  localStorage.setItem('allItems', JSON.stringify(products));
    // }

    // setLocalProducts();
  
  const items = JSON.parse(localStorage.getItem('allItems'))

  console.log(items)

         
  return (
    <div className='home'>
      <Hero />
      <TopSellingItems />
      <QuickSales />
      <Upcoming />
      <MostRecent />
      <Footer/>
    </div>
  )
}

export default Home