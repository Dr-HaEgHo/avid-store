import { Icon } from '@iconify/react'
import React from 'react'
import { useSelector } from 'react-redux'

const QuickSales = () => {

    const products = useSelector(state => state.products.items)
  return (
    <div className='quick-sales'>
      <div className="container">
        <div className="qs">
          <div className="qs-title">
            <p>Quick Sales</p>
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
                <div className="qs-card">
                  <div className="qs-img">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="qs-content">
                    <p className='qs-prod-name'> { product.title }</p>
                    <p className='qs-prod-price'> ₦ { product.price }</p>
                    <p className='qs-prod-items-left'> {product.rating.count} items left</p>
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