import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/features/cartSlice';

const AddToCard = ({ id, title, image, price }) => {
    
  const dispatch = useDispatch();

  return (
      <div>
        <div className="mri-card">
            <div className="mri-image">
              <img src={image} alt="productImage.png" />
            </div>
            <p className="mri-name">{title} </p>
            <div className="mri-card-bottom">
              <div className="mri-prices">
                <p className="mri-price">${price}</p>
                <p className="mri-price-slashed"> $ {price+price*0.3} </p>
              </div>
              <button onClick={() => {
                dispatch(addToCart({
                id, title, image, price
              }))
              }} className="mri-atk">add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default AddToCard