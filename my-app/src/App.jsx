 import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import FRoupasHome from "./components/FRoupasHome";

//component
import Marketplace from "./components/Marketplace";
import SmartphonePage_Component from "./components/Smartphones_Component/SmartphonePage_component";

function App() {
  
  return(
    <Routes>
        <Route path="/" element={<Marketplace/>}></Route>
        <Route path="FRoupasHome" element={<FRoupasHome/>}></Route>
        <Route path="smartphones" element={<SmartphonePage_Component/>}></Route>
      </Routes>
  )
}

export default App;
