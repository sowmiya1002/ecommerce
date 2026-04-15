import React from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'
import Navbar from './Navbar'
import About from './About'
export default function Home() {
  return (
    <>
  
  

    <div className='hero'>
      <h2>Soulful Aromatherapy with handcrafted clay, Glazed to Perfection</h2>
      <p>Slow-Crafted Ceramics made for Soulful Homes <br /> <br /> <button>Explore our Collection</button></p>
      
    </div>


      <Products showNavbar={false} />
      <About/>
    </>
  )
}
