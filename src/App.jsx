import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import{Route,Routes,BrowserRouter}from "react-router-dom"
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products />} />
         <Route path="/About" element={<About/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>      
      </Routes>

      </BrowserRouter>

   
    </>
  );
}

export default App;
