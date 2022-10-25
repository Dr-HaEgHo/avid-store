import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/features/cartSlice';
import { selectedProduct } from '../redux/features/productSlice';

const AddToCard = ({ id, title, image, price, images }) => {
    
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
      <div>
      <div className='mri-card'>
          <div
            onClick={() => {
              dispatch(selectedProduct({
                id,
                title,
                image,
                price,
                images
              }))
              navigate(`/products/${id}/`);
            }}
             className="mri-image">
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
                id, title, image, price, images
              }))
              }} className="mri-atk">add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default AddToCard