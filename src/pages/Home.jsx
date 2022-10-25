// import { Icon } from '@iconify/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Hero from '../components/hero-section/Hero';
import MostRecent from '../components/MostRecent';
import NavTray from '../components/NavTray';
import QuickSales from '../components/QuickSales';
import TopSellingItems from '../components/TopSellingItems';
import Upcoming from '../components/Upcoming';
import { productsFetch } from '../redux/features/productSlice';
import Lottie from "lottie-react";
import loader from "../assets/98915-loader.json"
// import { store } from '../redux/store';

const Home = ({openNav, setOpenNav}) => {
  
  const dispatch = useDispatch();

    
    useEffect(() => {
      dispatch(productsFetch())
    }, [dispatch])
    
  // useSelector to get the products from the redux store
    const products = useSelector((state) => state.products.items)

  
   
  return products.length > 0 ? (
    <div className='home'>
      <Hero products={products}/>
      <TopSellingItems products={products}/>
      <QuickSales products={products}/>
      <Upcoming products={products}/>
      <MostRecent />
      <Footer/>
    </div>
  ) : (
      <div className='loader-div'>
        <Lottie style={{width:"100px"}} animationData={loader} loop={true} />
          We're currently Loading...
      </div>
  )
}

export default Home