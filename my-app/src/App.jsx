import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
//component
import Marketplace from "./components/Marketplace";
import FavoritosHome from "./components/Home/favoritos/FavoritosHome";
import Favoritos_component from "./components/Favoritos_Component/Favoritos_component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Marketplace />}></Route>

      <Route path="/favoritos" element={<FavoritosHome />} />
    </Routes>
  );
}

export default App;
