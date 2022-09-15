import { Icon } from '@iconify/react'
import React from 'react'

const Footer = () => {
  return (
    <div className="ft-wrapper">
        <div className='footer'>
        <div className="container">
            <div className="ft">
                <div className="ft-logo">
                    <h1>AVID<span>MALL</span></h1>
                </div>
                <div className="ft-form">
                    <h4>NEW TO AVIDMALL?</h4>
                      <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                      <div className="ft-ct-form">
                          <div className="ft-ct-input">
                              <Icon className='ft-ct-icon' icon="ic:baseline-mail" />
                              <input type="email" placeholder='Enter your email address' />
                          </div>
                          <button>MALE</button>
                          <button>FEMALE</button>
                      </div>
                </div>
                <div className="ft-download"></div>
            </div>
        </div>
    </div>
    <div className="after-footer"></div>
    </div>
  )
}

export default Footer