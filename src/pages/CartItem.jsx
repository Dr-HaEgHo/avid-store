import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from '../redux/features/cartSlice'

const CartItem = ({ id, image, title, price, quantity = 0 }) => {
    
    const dispatch = useDispatch();

  return (
       <div className="cart-item">
          <div className="ci-img">
            <img src={image} alt='item'/>
          </div>
          <hr className='ci-mid-line'/>
          <div className="ci-info">
            <div className="ci-title-price">
              <p className="ci-title">{title}</p>
              <p className="ci-price">
                <small>$</small>
                <strong>{price}</strong>
              </p>
            </div>
            <div className='ci-incr-dec'>
              <p className="ci-qty">Quantity: </p>
              <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
              <p>{quantity}</p>
              <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
            </div>
            <button
              className='ci-removeButton' 
              onClick={() => dispatch(removeItem(id))}>
                Remove
            </button>
          </div>
    </div>
  )
}

export default CartItem