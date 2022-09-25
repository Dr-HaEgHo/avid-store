import { Icon } from '@iconify/react'
import React from 'react'
import playStore from '../assets/play-store-badge.png'
import appStore from '../assets/App-store-badge.png'

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
                              <input type="email" placeholder='Enter Email Address' />
                          </div>
                          <button>MALE</button>
                          <button>FEMALE</button>
                      </div>
                </div>
                <div className="ft-download">
                    <div className="ft-download-icon">
                        <Icon className='ft-dl-icon' icon="icomoon-free:folder-download" />
                        <div className="ft-download-text">
                            <h4>DOWNLOAD AVIDMALL FREE APP</h4>
                            <p>Get access to exclusive offers!</p>
                        </div>
                    </div>
                    <div className="ft-badges">
                        <img src={appStore} alt="app-store.png" />
                        <img src={playStore} alt="play-store.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="after-footer"></div>
    </div>
  )
}

export default Footer