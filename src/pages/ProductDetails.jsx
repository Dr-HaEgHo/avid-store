import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/features/cartSlice'
import { Icon } from '@iconify/react';
import { productsFetch } from '../redux/features/productSlice'
import rightBanner from '../assets/rightBanner1.jpg'
// import { useSelector } from 'react-redux'

const ProductDetails = () => {

  const dispatch = useDispatch()
  // INITIALIZING USEDISPATCH FRROM REACT-REDUX
  const [ratio, setRatio] = useState()

  
  useEffect(() => {
    dispatch(productsFetch())
    pricePercentage()
   },[])

  const product = useSelector(state => state.products.selectedProduct)
  console.log(product)

  const pricePercentage = () => {
    let discountPrice = product.price + 70;

    console.log(discountPrice)
    let newRatio = (product.price / discountPrice) * 100
    const myRatio = 100 - Math.round(newRatio)
    console.log(newRatio)
    return {discountPrice, myRatio}
  }


    return (
      <div className='prod-dets'>
        <div className="container">
          <div className="pds">
            <div className="pd-left">
              <div className="pd-images">
                <div className="pd-main-img">
                  <div className='pd-main-img-wrapper'>
                    <img src={product.image} alt={product.title} />
                    {/* <img src={rightBanner} alt="" /> */}
                  </div>
                </div>
                <div className="pd-thumbs">
                  <Icon icon='ci:chevron-duo-left' />
                  <div className="pd-thumbs-scroll">
                    <div className='pd-thumbs-scroll-img-sel' >
                      <img src={product.image} alt={product.title} />
                      {/* <img src={rightBanner} alt="" /> */}
                    </div>
                  </div>
                  <Icon icon='ci:chevron-duo-right' />
                </div>
              </div>
              <div className="pd-info">
                <div>
                  <div className="pd-title-heart">
                  <p className="pd-title">{ product.title }</p>
                  <Icon className='heartIcon' icon='ant-design:heart-outlined' />
                </div>
                <div className="pd-stars">
                  <div className="pd-star">
                    <Icon className='starIcon' icon='ant-design:star-filled' />
                    <Icon className='starIcon' icon='ant-design:star-filled' />
                    <Icon className='starIcon' icon='ant-design:star-filled' />
                    <Icon className='starIcon' icon='ant-design:star-filled' />
                    <Icon className='starIcon-off' icon='ant-design:star-filled' />
                  </div>
                  <p>(1885 verified ratings)</p>
                </div>
                  <p className='pd-free-deli'>Free Delivery*</p>
                <div>
                  <p className="pd-price">₦ {product.price}</p>
                  <div className='pd-discount-price'>
                    <p className='pdd-price'>₦ { pricePercentage().discountPrice}</p>
                    <p className='pdd-percent'>-{ pricePercentage().myRatio}%</p>
                  </div>
                  <p className="pd-few-units">few units left</p>
                  <p className="pd-shipping">+ shipping from ₦ 170 to LEKKI-AJAH (SANGOTEDO)</p>
                  </div>
                </div>
                  
                
                <div>
                  <hr className='pd-hr' />
                  <button className="pd-atk">
                    <Icon className='cartIcon' icon='ic:baseline-add-shopping-cart' />
                    <p
                      onClick={() => {
                dispatch(addToCart({
                id:product.id, title:product.title, image:product.image, price:product.price
              }))
              }}
                      className='addtoC'>ADD TO CART</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="pd-right"></div>
          </div>
        </div>
      </div>

  )
}

export default ProductDetails