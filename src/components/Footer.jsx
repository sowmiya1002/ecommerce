import React from 'react'

export default function Footer() {
  const a = "MORE INFO"
  return (<>
    <div className='foot'>
      <img src="https://clayandglaze.in/cdn/shop/files/clayandglaze2025-min.png?crop=center&height=169&v=1748971139&width=527" alt="" />
      
      <div className='foot1'>
        <h4>{a}</h4>
        <ul>
            <li>Our Stores</li>
            <li>Contact</li>
            <li>Making</li>
        </ul>
      </div>
      <div className='foot2'>
        <h4>CATEGORIES</h4>
        <ul>
            <li>New In</li>
            <li>Dinnerware</li>
            <li>Drinkware</li>
            <li>Serveware</li>
            <li>Home Decor</li>
            <li>Spa Range</li>
        </ul>
      </div>
      <div className='foot3'>
        <h4>INFORMATION</h4>
        <ul>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Shipping and Returns</li>
            <li>Order status</li>
            <li>Terms and conditions</li>
        </ul>
      </div>
    </div>
    <footer> Copyright © 2025. All Right Reserved</footer>
  </>
  )
}
