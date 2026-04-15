import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Products() {
  return (
    <>

  
   
    <h1>Products</h1>
    <div id='Products'>
    <div id='card' className='card1'>
    <img className='pro-img' src="https://clayandglaze.in/cdn/shop/files/29b54a32-27a2-4791-a07e-67f8c4bf6029_1_-min_360x.jpg?v=1750962462" alt="" />
    <h3>Plaque Dinner Plate</h3>
    <p>₹400.00</p>
    <button>Add to cart</button>
    </div>
     <div id='card' className='card2'>
    <img className='pro-img' src="https://clayandglaze.in/cdn/shop/files/155d444b-2d45-47bc-8079-909a6f1f4fb8_1_-min_360x.jpg?v=1750962317" alt="" />
    <h3>Slip Trail Mug</h3>
    <p>₹400.00</p>
    <button>Add to cart</button>
    </div>
     <div id='card' className='card3'>
    <img className='pro-img' src="https://clayandglaze.in/cdn/shop/files/f8ab06e3-4d2a-4fe3-ad7b-0c6a695599dc_1_-min_360x.jpg?v=1750963348" alt="" />
    <h3>Cane Handle Casserole</h3>
    <p>₹400.00</p>
    <button>Add to cart</button>
    </div>
     <div id='card' className='card4'>
    <img className='pro-img' src="https://clayandglaze.in/cdn/shop/files/85e0a78d-76aa-477e-a371-03d6be1ddd75_1_-min_360x.jpg?v=1750962226" alt="" />
    <h3>Aroma Incense Stick Holder</h3>
    <p>₹400.00</p>
    <button>Add to cart</button>
    </div>
     <div id='card' className='card5'>
    <img className='pro-img' src="https://clayandglaze.in/cdn/shop/files/0374_720x.jpg?v=1748511923" alt="" />
    <h3>Poignee Serving Pot</h3>
    <p>₹400.00</p>
    <button>Add to cart</button>
    </div>
     <div id='card' className='card6'>
    <img className='pro-img' src="https://clayandglaze.in/cdn/shop/files/SE-PL-00117-BK_2_720x.jpg?v=1748520684" alt="" />
    <h3>Cane Handle Casserole</h3>
    <p>₹400.00</p>
    <button>Add to cart</button>
    </div>
     <div id='card' className='card7'>
    <img className='pro-img' src="https://clayandglaze.in/cdn/shop/files/0154_720x.jpg?v=1748455148" alt="" />
    <h3>Flora Diffuser</h3>
    <p>₹400.00</p>
    <button>Add to cart</button>
    </div>
     <div id='card' className='card8'>
    <img className='pro-img' src="https://clayandglaze.in/cdn/shop/files/HD-JA-00144-MB_2_720x.jpg?v=1747851245" alt="" />
    <h3>Foliage Sugar Jar / Sugar Pot</h3>
    <p>₹400.00</p>
    <button>Add to cart</button>
    </div>
    </div>
 
 <About/>

    </>
  )
}
