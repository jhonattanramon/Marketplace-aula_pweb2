 import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import FRoupasHome from "./components/FRoupasHome";
import BebidasHome from "./components/BebidasHome/BebidasHome"



//component
import Marketplace from "./components/Marketplace";
import LaptopPageComponent from "./components/Filmes_Component/LaptopPageComponent";

function App() {
  
  return(

  <Routes>
    <Route path="/" element={<Marketplace/>}></Route>
    <Route path="filmes" element={<LaptopPageComponent/>}></Route>
 
        <Route path="/" element={<Marketplace/>}></Route>
        <Route path="FRoupasHome" element={<FRoupasHome/>}></Route>
        <Route path="/BebidasHome" element={<BebidasHome/>}></Route>
      </Routes>

  )
}

export default App;
