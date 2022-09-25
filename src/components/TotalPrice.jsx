import React from 'react'
import { useSelector } from 'react-redux'

const TotalPrice = () => {

  const cart = useSelector(state => state.cart.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    if (cart.length > 0) {
      cart.forEach(item => {
        totalQuantity += item.quantity
        totalPrice += item.price * item.quantity
      })
    }
    return { totalPrice, totalQuantity }
  }
  
  return (
    <div>
      <div className="tp-header">
        <h1>SUMMARY</h1>
      </div>
      <div className='tp-price-btn'>
        <div className='tp-price'>
          {(
            <div className='tp-total-price'>
              <span>SUBTOTAL:</span>
              <p> $ { getTotal().totalQuantity * getTotal().totalPrice }</p>
            </div>   
          )}
        </div>
        <button className="tp-btn">
          CHECKOUT(${getTotal().totalQuantity * getTotal().totalPrice})
        </button>
      </div>
    </div>
  )
}






  export default TotalPrice;