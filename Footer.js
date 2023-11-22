import React from 'react';
import { Button } from './button';
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className='footer-subscription-heading'>
              Join us to recieve hassle-free vaction times.
              <br></br>
              <br></br>
              <p>
              Email us at HiddenOdyssey@gmail.com for booking.
            </p>
            <p>or call us:</p>
            <p><ul>
              <li>+911234567890</li>
              <li>+915738475932</li>
              <li>+913748294756</li>
            </ul></p>
            </p>
            
            <div className='input-areas'>
              <form>
                {/* <br></br> */}
                {/* <input type='email' name='email' placeholder='Your email' className='footer-input'/> */}
                <br></br>
                {/* <br></br> */}
                <Button buttonStyle='btn--outline'>Sign-up/Log-In</Button>
              </form>
            </div>
        </section>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-lik-items'></div>
            <br></br>
            {/* <h2>About Us</h2> */}
            
          </div>
        </div>
    </div>
  )
}

export default Footer