 import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom"
//component
import Marketplace from "./components/Marketplace";
import Sapatos_component from "./components/SapatosHome/SapatosHomeComponent";

function App() {
  
  return(
    <Routes>
        <Route path="/" element={<Marketplace/>}></Route>
        <Route path="/sapatos" element={<Sapatos_component/>}></Route>
        
      </Routes>
  )
}

export default App;
