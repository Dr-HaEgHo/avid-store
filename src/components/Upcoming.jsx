import { Icon } from '@iconify/react'
import React from 'react'

const Upcoming = () => {

    const events = [1, 2, 3]

  return (
    <div className='upcoming-events'>
        <div className='container'>
            <div className="ue">
                  <div className="ue-title">
                    <span></span>
                    <p>Upcoming Events & Hottest Deals</p>
                    <div className="see-more">
                      <a href="/#">See more</a>
                      <Icon className='seemore' icon='akar-icons:arrow-right' />
                    </div>
                  </div>
                  <div className="ue-events">
                      {
                          events && events.map((event, index) => (
                              <div key={index}  className="ue-card"></div>   
                          ))
                      }
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Upcoming