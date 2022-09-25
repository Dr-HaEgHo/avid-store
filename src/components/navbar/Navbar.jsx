import { Icon } from '@iconify/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import baby from '../../assets/baby.jpeg'


const Navbar = () => {

    const cart = useSelector((state) => state.cart.cart)
    const products = useSelector((state) => state.products.items)
  
    const getTotalQuantity = () => {
      let total = 0;
      if (cart.length > 0) {
        cart.forEach((item) => {
        total += item.quantity
      })
      }
      return total;
    } 

    const navigate = useNavigate();


  return (
    <div className='navbar'>
        <div className="container">
            <div className="nav">
                <div onClick={() => {navigate("/")}} className='logo'>
                    <h1>AVID<span>MALL</span></h1>
                </div>
                <div className='search'>
                    <div  className="search-bar">
                        <input type="text" placeholder='Search products, brands and categories' />
                    </div>
                    <button className="search-btn">SEARCH</button>
                </div>
                <div className='user'>
                    <div className="user-menu">
                        <p>Hi, Timothy</p>
                        <div className="user-avatar">
                            <img src={baby} alt='profilepicture.png'></img>
                        </div>
                        {/* drop down icon goes here when you finally sub */}<h2>▼</h2>
                    </div>
                      <Link to='/cart'>
                        <div className="shopping-cart">
                          <Icon className='cart-icon' icon="ic:outline-shopping-cart" />
                          <p>{ getTotalQuantity() || 0 }</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar