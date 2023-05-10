 import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import FRoupasHome from "./components/FRoupasHome";

//component
import Marketplace from "./components/Marketplace";

function App() {
  
  return(
    <Routes>
        <Route path="/" element={<Marketplace/>}></Route>
        <Route path="FRoupasHome" element={<FRoupasHome/>}></Route>
      </Routes>
  )
}

export default App;
