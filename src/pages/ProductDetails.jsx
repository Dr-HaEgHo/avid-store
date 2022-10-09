import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/features/cartSlice'
import { productsFetch } from '../redux/features/productSlice'
// import { useSelector } from 'react-redux'

const ProductDetails = () => {

  const dispatch = useDispatch()
  // INITIALIZING USEDISPATCH FRROM REACT-REDUX
  const product = useSelector(state => state.products.selectedProduct)
  console.log(product)

    return (
      <div>
        <div>
          <img src={product.image} alt="" />
        </div>
        <div>{ product.title }</div>
        <div>
          {product.price}
        </div>
        <div>
        <button onClick={() => {
                dispatch(addToCart({
                id:product.id, title:product.title, image:product.image, price:product.price
              }))
              }} className="mri-atk">add to cart</button>

        </div>
      </div>

  )
}

export default ProductDetails