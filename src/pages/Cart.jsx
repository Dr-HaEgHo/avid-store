import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import TotalPrice from '../components/TotalPrice';
import CartItem from './CartItem';

const Cart = () => {

  const cart = useSelector((state) => state.cart.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
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
                   {cart?.map((item) => (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price} 
                      quantity={item.quantity}
                    />
                  ))}
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