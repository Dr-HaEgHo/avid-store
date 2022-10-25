import React from 'react'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

const NavTray = ({openNav, setOpenNav}) => {

    const ourLinks = [
    {id : 1, title: "Electronics", link: "/Electronics", icon:<Icon icon='carbon:apple' /> },
    {id : 2, title: "Furniture", link: "/Furniture", icon:<Icon icon='carbon:apple' /> },
    {id : 3, title: "Clothings", link: "/Clothes", icon:<Icon icon='carbon:apple' /> },
    {id : 4, title: "Footwear", link: "/Shoes", icon:<Icon icon='carbon:apple' /> },
    {id : 5, title: "Appliances", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 6, title: "Provisions", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 7, title: "Sneakers", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 8, title: "Interior Decor", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 9, title: "Cookware", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 10, title: "Vehicle Parts", link: "/services", icon:<Icon icon='carbon:apple' /> },
    {id : 11, title: "Smart Phones", link: "/services", icon:<Icon icon='carbon:apple' /> },
    ]

    
    
    const navigate = useNavigate()


  return (
    <div style={{left: openNav === true ? "0px" : "-201px", }} className='nav-tray'>
          <div className='nt'>
              <div className='nt-closeIcon' onClick={() => {setOpenNav(!openNav)}}>
                  <Icon  icon='ci:close-big' />
              </div>
              <div className="nt-top">
                <h2>Categories</h2>
                
              </div>
              {
                ourLinks && ourLinks.map((link) => (
                  <div
                    onClick={() => {
                      navigate(`/categories${link.link}`)
                      setOpenNav(!openNav)
                    }}
                    key={link.id}
                    className="nt-each-link">
                    {link.icon}
                    <p>{ link.title }</p>
                  </div>
                ))
              }
              
        </div>
    </div>
  )
}

export default NavTray;