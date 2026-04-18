// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// import{Route,Routes,BrowserRouter}from "react-router-dom"
// import Home from "./components/Home";
// import Products from "./components/Products";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Cart from './components/Cart'
// function App() 
//  {

//  const addToCart = (item) => {
//   console.log("Added:", item)   // 👈 check this
//   setCart([...cart, item])
// }
//   return (
//     <>
//       <BrowserRouter>
//       <Navbar />
    
//       <Routes>
//         <Route path="/" element={<Home/>}></Route>
//       {/* <Route path="/products" element={<Products />} /> */}
//          <Route path="/About" element={<About/>}></Route>
//           <Route path="/Contact" element={<Contact/>}></Route> 
//       <Route path="/" element={<Products addToCart={addToCart} />} />
//         <Route path="/cart" element={<Cart cart={cart} />} />
//       </Routes>
//   <Footer />
//       </BrowserRouter>

   
//     </>
//   );
// }

// export default App;


import { useState } from "react";
import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {

  // ✅ FIX 1: Create cart state
  const [cart, setCart] = useState([]);

  // ✅ FIX 2: Add function
  const addToCart = (item) => {
    console.log("Added:", item);
    setCart([...cart, item]);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* ✅ Keep only ONE / route */}
       <Route path="/" element={<Home addToCart={addToCart} />} />

        {/* ✅ Products page */}
        <Route path="/products" element={<Products addToCart={addToCart} />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ Cart page */}
        <Route path="/cart" element={<Cart cart={cart} />} />

        {/* optional */}
        <Route path="*" element={<h1>Page Not Found</h1>} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
