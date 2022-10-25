import { Icon } from '@iconify/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import AddToCard from '../components/AddToCard'
import Hero from '../components/hero-section/Hero'

const Categories = () => {

  const { catName } = useParams();
  const navigate = useNavigate();

  const [catItems, setCatItems] = useState([])

  const products = useSelector(state => state.products.items)
  console.log(products)

  const fetchCatItems = () => {
    const sorted = products?.filter(item => item.category.name === catName )
    setCatItems(sorted)
  }

  useEffect(() => { 
    fetchCatItems();
  }, [])

  return (
    <>
      <Hero/>
      {
        catItems.length > 0 ? (
          <div className='most-recent'>
      <div className="container">
        <div className="mri">
          <div className="mri-title">
            <p>{catName}</p>
            <div className="see-more">
              {/* <a href="#">See more</a> */}
              {/* <Icon className='seemore' icon='akar-icons:arrow-right' /> */}
            </div>
          </div>
          <div className="mri-products">
            {
              catItems ? catItems.map(item => (
                <AddToCard
                  key={item.id}
                  onClick={() => {
                    // dispatch(selectedProduct({
                    //   id: item.id,
                    //   title: item.title,
                    //   image: item.category.image,
                    //   price: item.price,
                    //   images: item.images,
                    // }))
                    navigate(`/products/${item.id}/`);
                  }}
                  id={item.id}
                  image={item.category.image}
                  title={item.title}
                  price={item.price} 
                  quantity={item.quantity}
                  images={item.images}
                />
              )): (<div>OOPS!, A big ratty error occurred</div>)
            }
          </div>
        </div>
      </div>
    </div>
        ) : (<div>Loading...</div>)
      }
  </>
  )
}

export default Categories