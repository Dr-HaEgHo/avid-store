import { Icon } from '@iconify/react';
import React from 'react'
import { useSelector } from 'react-redux';

const MostRecent = () => {

  const products = useSelector(state => state.products.items)

  return (
    <div className='most-recent'>
      <div className="container">
        <div className="mri">
          <div className="mri-title">
            <p>Most Recent Items</p>
            <div className="see-more">
              <a href="#">See more</a>
              <Icon className='seemore' icon='akar-icons:arrow-right' />
            </div>
          </div>
          <div className="mri-products">
            {
              products ? products.map(product => (
                <div className="mri-card">
                  <div className="mri-image">
                    <img src={product.image} alt="" />
                  </div>
                  <p className="mri-name">{product.title} </p>
                  <div className="mri-card-bottom">
                    <div className="mri-prices">
                      <p className="mri-price">₦{product.price}</p>
                      <p className="mri-price-slashed"> ₦ {product.price+product.price*0.3} </p>
                    </div>
                    <button className="mri-atk">add to cart</button>
                  </div>
                </div>
              )): (<div>OOPS!, A big ratty error occurred</div>)
            }
          </div>
          <p className='mri-pagination'>prev...           page 1 0f        2, 3, 4, 5...34      ...next</p>
        </div>
      </div>
    </div>
  )
}

export default MostRecent;