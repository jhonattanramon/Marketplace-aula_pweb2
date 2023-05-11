 import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

//component
import Marketplace from "./components/Marketplace";
import LaptopPageComponent from "./components/Filmes_Component/LaptopPageComponent";

function App() {
  
  return(
  <Routes>
    <Route path="/" element={<Marketplace/>}></Route>
    <Route path="filmes" element={<LaptopPageComponent/>}></Route>
  </Routes>
  )
}

export default App;
