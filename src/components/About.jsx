import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
export default function About() {
  return (<>



    <h1>About Us</h1>
    <div className='about'>
  
  <p>We create handmade clay products that blend tradition, art, and everyday usability.
Each piece is crafted with care, using natural materials and eco-friendly processes.
Our collection includes pottery, home decor items, planters, kitchenware, and custom designs—made to bring warmth and authenticity to your space.</p>
<button>Buy now</button>
    </div>
    <Footer/>
    </>
  )
}
