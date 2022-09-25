// import { Icon } from '@iconify/react';
import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
// import Hero from '../components/hero-section/Hero';
import MostRecent from '../components/MostRecent';
// import QuickSales from '../components/QuickSales';
// import TopSellingItems from '../components/TopSellingItems';
// import Upcoming from '../components/Upcoming';
// import { productsFetch } from '../redux/features/productSlice';
// import { store } from '../redux/store';

const Home = () => {

  
  // const setLocalProducts = () => {
    //  localStorage.setItem('allItems', JSON.stringify(products));
    // }
    
    // setLocalProducts();
  
  // const dispatch = useDispatch()
    
  //   useEffect(() => {
  //     dispatch(productsFetch())
  //   }, [dispatch])
    
    
    // const products = useSelector((state) => state.products.items)


         
  return (
    <div className='home'>
      {/* <div className="shopping-cart">
        <Icon icon="bxs:cart" />
        <p>{ getTotalQuantity() || 0 }</p>
      </div> */}
      {/* <Hero />
      <TopSellingItems />
      <QuickSales />
      <Upcoming /> */}
      <MostRecent />
      <Footer/>
    </div>
  )
}

export default Home