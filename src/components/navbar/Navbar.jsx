import React from 'react'
import baby from '../../assets/baby.jpeg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="nav">
                <div className='logo'>
                    <h1>AVID<span>MALL</span></h1>
                </div>
                <div className='search'>
                    <div  className="search-bar">
                        <input type="text" placeholder='Search products, brands and categories' />
                    </div>
                    <button className="search-btn">SEARCH</button>
                </div>
                <div className='user'>
                    <div className="user-menu">
                        <p>Hi, Timothy</p>
                        <div className="user-avatar">
                            <img src={baby} alt='profilepicture.png'></img>
                        </div>
                        {/* drop down icon goes here when you finally sub */}<h2>▼</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar