import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
export default function About() {
  return (<>
  <div id='navbar'>
     <img src='https://clayandglaze.in/cdn/shop/files/clayandglaze2025-min.png?crop=center&height=169&v=1748971139&width=527' alt="" />
     <nav>
     <Link className='menu' to="/">Home</Link>
           <Link className='menu' to="/Products">Products</Link>
            <Link className='menu' to="/About">About</Link>
           <Link className='menu' to="/Contact">Contact</Link>
     
     </nav>
     <nav>
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-solid fa-cart-shopping"></i>
      <i class="fa-solid fa-user"></i>   
     </nav>
     </div>
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
