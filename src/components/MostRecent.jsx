import { Icon } from '@iconify/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/features/cartSlice';
import { productsFetch, selectedProduct } from '../redux/features/productSlice';
import AddToCard from './AddToCard';

const MostRecent = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
   dispatch(productsFetch())
  }, [dispatch])
  

  // const localProducts = JSON.parse(localStorage.getItem("allItems"))

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
                <AddToCard
                  key={product.id}
                  onClick={() => {
                    // dispatch(selectedProduct({
                    //   id: product.id,
                    //   title: product.title,
                    //   image: product.category.image,
                    //   price: product.price,
                    //   images: product.images,
                    // }))
                    navigate(`/products/${product.id}/`);
                  }}
                  id={product.id}
                  image={product.category.image}
                  title={product.title}
                  price={product.price} 
                  quantity={product.quantity}
                  images={product.images}
                />
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