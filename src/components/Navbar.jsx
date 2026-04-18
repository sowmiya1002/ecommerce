import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div id='navbar'>
      <img
        src='https://clayandglaze.in/cdn/shop/files/clayandglaze2025-min.png'
        alt="logo"
      />

      <nav>
        <Link className='menu' to="/">Home</Link>
        <Link className='menu' to="/products">Products</Link>
        <Link className='menu' to="/about">About</Link>
        <Link className='menu' to="/contact">Contact</Link>
      </nav>

      <nav>
        <i className="fa-solid fa-magnifying-glass"></i>
       <Link to="/cart">
  <i className="fa-solid fa-cart-shopping"></i>
</Link>
        {/* <i className="fa-solid fa-user"></i>  */}
        <i className="fa-solid fa-user"></i>
      </nav>
    </div>
  )
}