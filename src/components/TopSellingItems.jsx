import React from 'react'
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/features/productSlice';
import { useNavigate } from 'react-router-dom';

const TopSellingItems = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const products = useSelector((state) => state.products.items)

  return (
    <div className='top-selling'>
      <div className="container">
        <div className="tsi">
          <div className="tsi-title">
            <p>Top Selling Products</p>
            <div className="see-more">
              <a href="#">See more</a>
              <Icon icon='akar-icons:arrow-right' />
            </div>
          </div>
          <div className="tsi-products">
            {
              products ? products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    dispatch(selectedProduct({
                      id: product.id,
                      title: product.title,
                      image: product.category.image,
                      price: product.price
                    }))
                    navigate(`/products/${product.id}/`);
                  }}
                  className="tsi-card">
                  <div className="tsi-img">
                    <img src={product.category.image} alt="" />
                  </div>
                  <div className="tsi-content">
                    <p className='tsi-prod-name'> { product.title }</p>
                    <p className='tsi-prod-price'> ₦ { product.price }</p>
                    <p className='tsi-prod-slashed-price'>₦ {Math.round(product.price+50)}</p>
                  </div>
                </div>
              )): (<div>An Error Has Occurred</div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSellingItems;