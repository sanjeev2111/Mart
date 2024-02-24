import './NewsLetter.css';

import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email ID'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter