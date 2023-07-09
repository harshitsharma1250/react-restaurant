import React from 'react'
import BannerImage from '../assets/special.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className="leftSide" style={{ backgroundImage: `url(${BannerImage})` }}>
        </div>

        <div className="rightSide">
            <h1>Contact Us</h1>

            <form id='contact-form' method='POST'>
                <label htmlFor="name">Full Name</label>
                <input name='name' placeholder='Enter name....' type="text" />
                <label htmlFor="email">EMAIL</label>
                <input name='email' placeholder='Enter email....' type="email" />
                <label htmlFor="message">Type message</label>

                <textarea name="message" rows="6" placeholder='Enter your message' required>Send Message</textarea>
                <button type="submit"> Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
