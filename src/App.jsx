import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import{Route,Routes,BrowserRouter}from "react-router-dom"
import Home from "./components/Home";
import Products from "./components/Products";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
      
      </Routes>

      </BrowserRouter>

   
    </>
  );
}

export default App;
