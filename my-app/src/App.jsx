 import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import RoupasHome from "./components/RoupasHome/RoupasHome"

//component
import Marketplace from "./components/Marketplace";

function App() {
  
  return(
    <Routes>
    <Route path="/" element={<Marketplace/>}></Route>
    <Route path="/RoupasHome" element={<RoupasHome/>}></Route>
  </Routes>  )
}

export default App;
