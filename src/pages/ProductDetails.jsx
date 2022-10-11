import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/features/cartSlice'
import { Icon } from '@iconify/react';
import { productsFetch } from '../redux/features/productSlice'
import rightBanner from '../assets/rightBanner1.jpg'
import axios, { Axios } from 'axios'
// import { useSelector } from 'react-redux'

const ProductDetails = () => {

  const dispatch = useDispatch()
  // INITIALIZING USEDISPATCH FRROM REACT-REDUX
  const [ratio, setRatio] = useState()
  const [states, setStates] = useState([])
  const [os, setOs] = useState(false)
  const [opl, setOpl] = useState(false)
  const [liked, setLiked] = useState(false)
  const [osValue, setOsValue] = useState("")




  const products = useSelector(state => state.products.items)
  const { prodName } = useParams()
  const param = parseInt(prodName)


  const findProduct = () => {
    const isItem = products.find((product) => {
      if (product.id === param) {
        return product
      } else {
        return product[1]
      }
    })
    return {isItem}
  }
  const product = findProduct().isItem
  

  useEffect(() => {
    pricePercentage()
  }, [])

  const fetchStates = async() => {
    const response = await axios.get("https://nigerian-states-info.herokuapp.com/api/v1/states")
    const allStates = response.data
    setStates(allStates.data)
    return allStates;
  }

  const handleOsValue = (e) => {
    setOsValue(e.target.textContent)
  }

  useEffect(() => { 
    fetchStates()
  }, [])

  const pricePercentage = () => {
    let discountPrice = product.price + 70;
    let newRatio = (product.price / discountPrice) * 100
    const myRatio = 100 - Math.round(newRatio)
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
                    <img src={product.category.image} alt={product.title} />
                    {/* <img src={rightBanner} alt="" /> */}
                  </div>
                </div>
                <div className="pd-thumbs">
                  <Icon icon='ci:chevron-duo-left' />
                  <div className="pd-thumbs-scroll">
                    {
                      product ? product.images.map((image, index) => (
                        <div key={index} className='pd-thumbs-scroll-img-sel' >
                          <img src={product.images[index]} alt={product.title} />
                        </div>
                      )) : null
                    }
                  </div>
                  <Icon icon='ci:chevron-duo-right' />
                </div>
              </div>
              <div className="pd-info">
                <div>
                  <div className="pd-title-heart">
                  <p  className="pd-title">{ product.title }</p>
                    {
                      liked ? <Icon onClick={() => {setLiked(!liked)}} className='heartIcon' icon='ant-design:heart-filled' />
                    : <Icon onClick={() => {setLiked(!liked)}} className='heartIcon' icon='ant-design:heart-outlined' />
                    }
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
                  <p className="pd-price">$ {product.price}</p>
                  <div className='pd-discount-price'>
                    <p className='pdd-price'>$ { pricePercentage().discountPrice}</p>
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
                  <div onClick={() => { setOs(!os) }}
                    
                    className='pd-drop-down'>
                    <input disabled={true} type="text" placeholder='Lagos' value={ osValue ? osValue : "City Location"} />
                    {
                      os ===true ? (<Icon className='dropDownIcon' icon='ci:chevron-up' />) : (<Icon className='dropDownIcon' icon='ci:chevron-down' />)                    }
                    <div
                      style={{
                        height: os === true ? "40vh" : "0vh",
                        padding: os === true ? ".4rem" : "0rem"
                      }}
                      className='pd-drop-down-menu' >
                      {
                        states.length > 0 ? states.map((state, index) => (
                          <p
                            key={index}
                            onClick={handleOsValue}
                            style={{
                              fontSize: "14px",
                              margin: "6px 0 6px 0",
                              "&:hover": {
                                background:"yellow"
                              }
                            }}
                          >{state.Name}</p>
                        )) : (<div>No states</div>)
                      }
                      </div>
                  </div>
                  <div onClick={() => {setOpl(!opl)}} className='pd-drop-down'>
                    <input disabled={true} type="text" placeholder='Pick Up Station'/>
                    {
                      opl === true ? (<Icon className='dropDownIcon' icon='ci:chevron-up' />) : (<Icon className='dropDownIcon' icon='ci:chevron-down' />)
                    }
                    <div
                      style={{
                        height: opl === true ? "15vh" : "0vh",
                        padding: opl === true ? ".4rem" : "0rem"
                      }}
                      className='pd-drop-down-menu' ></div>
                  </div>
                </form>
                <div className="pd-door-deli">
                  <div className='pd-dd-icon'>
                    <Icon className='cartIcon' icon='bi:truck' />
                  </div>
                  <div className='pd-dd-cont'>
                    <div className='pd-dd-cont-top'>
                      <p>Door Delivery</p>
                      <span>Details</span>
                    </div >
                    <p style={{margin: "0 0 6px 0"}}>Delivery <span>${ Math.round(product.price * 0.3) }</span></p>
                    <p>
                      Delivered by <span>16 September</span> when you order within next <span>5hrs 25mins</span>
                    </p>
                  </div>
                </div>
                <div className="pd-door-deli">
                  <div className='pd-dd-icon'>
                    <Icon className='cartIcon' icon='bi:shop' />
                  </div>
                  <div className='pd-dd-cont'>
                    <div className='pd-dd-cont-top'>
                      <p>Pickup Station</p>
                      <span>Details</span>
                    </div >
                    <p style={{margin: "0 0 6px 0"}}>Delivery <span>${ Math.round(product.price * 0.3) }</span></p>
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