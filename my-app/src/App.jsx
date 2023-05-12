 import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import FRoupasHome from "./components/FRoupasHome";

//component
import Marketplace from "./components/Marketplace";
import RelogioPageComponent from "./components/RelogioPageComponent/RelogioPageComponent";

function App() {
  
  return(
    <Routes>
        <Route path="/" element={<Marketplace/>}></Route>
        <Route path="FRoupasHome" element={<FRoupasHome/>}></Route>
        <Route path="Relogios" element={<RelogioPageComponent/>}></Route>
      </Routes>
  )
}

export default App;
