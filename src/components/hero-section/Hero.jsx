import React from 'react'
// import { IconName } from "react-icons/ai"
import { Icon } from '@iconify/react';
import centerBanner from '../../assets/center-ad.png'
import rightBanner1 from '../../assets/rightBanner1.jpg'
import rightBanner2 from '../../assets/rightBanner2.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import { addToCart } from '../../redux/features/cartSlice';

const Hero = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const products = useSelector((state) => state.products.items)

    const cart = useSelector((state) => state.cart)
  
  const getTotalQuantity = () => {
    let total = 0;
    cart.Footer(item => {
      total += item.quantity
    }) 
    return total;
  } 

  console.log(cart)  
 
  // console.log(products)
  const links = [
    {id : 1, title: "Supermarket", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 2, title: "Cosmetics", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 3, title: "Clothings", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 4, title: "Gadgets", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 5, title: "Appliances", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 6, title: "Provisions", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 7, title: "Sneakers", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 8, title: "Interior Decor", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 9, title: "Cookware", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 10, title: "Vehicle Parts", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 11, title: "Smart Phones", link: "/services", icon:<Icon icon='carbon:apple' /> },
  ]

  const handleAddToCart = ({id, title, image, price}) => {
    
  }

  return (
    <div className='hero'>
      <div className="container">
        <div className="hero-sect">
          <div className='hero-top'>
            <div  className='hero-links'>
              {
                links && links.map((link) => (
                  <div key={link.id} className="each-hero-link">
                    {link.icon}
                    <p>{ link.title }</p>
                  </div>
                ))
              }
              
            </div>
            <div className="hero-banner">
              <img src={centerBanner} alt="center banner" />
            </div>
            <div className="hero-ads">
              <div className="hero-ads-top"></div>
              <div className="hero-ads-bottom"></div>
            </div>
          </div>
          <div className="hero-bottom">
            <Icon className='carousel-icon' icon='ci:chevron-duo-left' />
            <div  className="carousel">
              {
                products ? products.map((product) => (
                  <div key={product.id} onClick={() => {
                    navigate(`/products/${product.id}`);
                    
                  }} className="carousel-div">
                    <img src={ product.category.image } alt="backgrounds" />
                  </div>
                )) : null
              }
              
            </div>
            <Icon className='carousel-icon' icon='ci:chevron-duo-right' />
          </div>
            {/* <div className="shopping-cart">
              <Icon icon="bxs:cart" />
              <p style={{color: "#000"}} >{ getTotalQuantity || "0" }</p>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero