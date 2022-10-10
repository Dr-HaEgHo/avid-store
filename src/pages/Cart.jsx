import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TotalPrice from '../components/TotalPrice';
import { selectedProduct } from '../redux/features/productSlice';
import CartItem from './CartItem';
import astronaut from '../assets/astro.png';

const Cart = () => {

  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  const getTotal = () => {
    let totalQuantity = 0
    // let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
    })
    return {totalQuantity};
  }

  console.log(cart)
  

  return (
    <div className="cart">
        <div className='container'>
           <div className="cart-flex">
             <div className="scroll-cart">
                  <div className="cart-title">
                    <p>Cart </p> <span>  ({ getTotal().totalQuantity }) </span>
                  </div> 
                <div className="cart-items">
              {
                cart.length > 0 ? cart.map((item) => (
                     <CartItem
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price} 
                      quantity={item.quantity}
                    />
                )) : (
                    <div className='cart-noItems'>
                      <img src={astronaut} alt="astronaut" />
                      <p>No items in cart</p>
                    </div>)
                  }
                </div>
             </div>
            <div className="cart-price">
             <TotalPrice/>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Cart;