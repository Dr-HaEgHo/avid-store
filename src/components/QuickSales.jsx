import { Icon } from '@iconify/react'
import React from 'react'
import { useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectedProduct } from '../redux/features/productSlice'

const QuickSales = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

    const products = useSelector(state => state.products.items)
  return (
    <div className='quick-sales'>
      <div className="container">
        <div className="qs">
          <div className="qs-title">
            <p className='small' >Quick Sales</p>
            <div className="qs-timer">
                <p>Time Left: <span>05h : 09m : 42s</span></p>
            </div>
            <div className="see-more">
              <a href="/#">See more</a>
              <Icon icon='akar-icons:arrow-right' />
            </div>
          </div>
          <div className="qs-products">
            {
              products ? products.map(product => (
                <div key={product.id}
                  onClick={() => {
                    dispatch(selectedProduct({
                      id: product.id,
                      title: product.title,
                      image: product.category.image,
                      price: product.price
                    }))
                    navigate(`/products/${product.id}/`);
                  }}
                  className="qs-card">
                  <div className="qs-img">
                    <img src={product.category.image} alt="" />
                  </div>
                  <div className="qs-content">
                    <p className='qs-prod-name'> { product.title }</p>
                    <p className='qs-prod-price'> ₦ { product.price }</p>
                    <p className='qs-prod-items-left'> {product.price} items left</p>
                  </div>
                  <div className='qs-prod-bar-case'>
                    <div className='qs-prod-bar'></div>
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

export default QuickSales