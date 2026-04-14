import React from 'react'
import Products from './Products'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
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
    <div className='hero'>
      <h2>Soulful Aromatherapy with handcrafted clay, Glazed to Perfection</h2>
      <p>Slow-Crafted Ceramics made for Soulful Homes <br /> <br /> <button>Explore our Collection</button></p>
      
    </div>
    <Products/>
    </>
  )
}
