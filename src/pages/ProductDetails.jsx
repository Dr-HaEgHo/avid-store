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
                  <button
                    onClick={() => {
                      dispatch(addToCart({
                      id:product.id, title:product.title, image:product.image, price:product.price
                    }))
                    }}
                    className="pd-atk">
                    <Icon className='cartIcon' icon='ic:baseline-add-shopping-cart' />
                    <p
                      
                      className='addtoC'>ADD TO CART</p> 
                  </button>
                </div>
              </div>
            </div>



            {/* -------------------------------------------------------the right section of the page */}
            <div className="pd-right">
              <div className='pd-DNR'>
                <p className='pd-DNR-p'>DELIVERY & RETURNS</p>
              </div>
              <div className='pd-bottom'>
                <p className='pd-choose'>Choose Your Location</p>
                <form>
                  <div className='pd-drop-down'>
                    <input disabled={true} type="text" placeholder='Lagos' />
                    <Icon className='dropDownIcon' icon='ic:baseline-add-shopping-cart' />
                  </div>
                  <div className='pd-drop-down'>
                    <input disabled={true} type="text" placeholder='Pick Up Station'/>
                    <Icon className='dropDownIcon' icon='ic:baseline-add-shopping-cart' />
                  </div>
                </form>
                <div className="pd-door-deli">
                  <div className='pd-dd-icon'>
                    <Icon className='cartIcon' icon='ic:baseline-add-shopping-cart' />
                  </div>
                  <div className='pd-dd-cont'>
                    <div className='pd-dd-cont-top'>
                      <p>Door Delivery</p>
                      <span>Details</span>
                    </div >
                    <p style={{margin: "0 0 6px 0"}}>Delivery <span>₦{ Math.round(product.price * 0.3) }</span></p>
                    <p>
                      Delivered by <span>16 September</span> when you order within next <span>5hrs 25mins</span>
                    </p>
                  </div>
                </div>
                <div className="pd-door-deli">
                  <div className='pd-dd-icon'>
                    <Icon className='cartIcon' icon='ic:baseline-add-shopping-cart' />
                  </div>
                  <div className='pd-dd-cont'>
                    <div className='pd-dd-cont-top'>
                      <p>Pickup Station</p>
                      <span>Details</span>
                    </div >
                    <p style={{margin: "0 0 6px 0"}}>Delivery <span>₦{ Math.round(product.price * 0.3) }</span></p>
                    <p>
                      Delivered by <span>16 September</span> when you order within next <span>5hrs 25mins</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default ProductDetails