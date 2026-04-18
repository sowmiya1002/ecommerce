// import React from 'react'

// export default function Cart({ cart }) {
//   return (
//     <div>
//       <h1>Cart</h1>
//       {cart.length === 0 ? (
//         <p>No items</p>
//       ) : (
//         cart.map((item, index) => (
//           <div key={index}>
//             <h3>{item.name}</h3>
//             <p>₹{item.price}</p>
//           </div>
//         ))
//       )}
//     </div>
//   )
// }
import React from 'react'

export default function Cart({ cart }) {

  console.log(cart)   // 👈 ADD THIS LINE HERE

  return (

  

    <div id='cart-products'>
        <h1>Cart Page</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div className='cart-card' key={index}>
            <img src={item.image} alt={item.name}  />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  )
}
