import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Contact() {
  return (
    <>
   
      <h1>Contact Us</h1>
       
      <section id='contact-info'>
        <div className='kit'>
          <p>Please contact us over the phone or by email on the details below. Alternatively, fill out our contact form and we will come back to you as soon as possible.</p>
          <p>68931-49302</p>
          <p>clayclaze@gmail.com</p>
          <p>@clayandglaze</p>

        </div>

        <div className='cf'>
       <input type="text"  placeholder='Name' />
       <input type="email" placeholder='Email' />
       <input type="text" placeholder='Message' />
       <button>SEND</button>
        </div>
      </section>
      <Footer/>
    </>
  )
}
