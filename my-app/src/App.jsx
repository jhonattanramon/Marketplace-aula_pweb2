import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom"
//component
import Marketplace from "./components/Marketplace";
import Sapatos_component from "./components/SapatosHome/SapatosHomeComponent";


//component
import FavoritosHome from "./components/Home/favoritos/FavoritosHome";
import Favoritos_component from "./components/Favoritos_Component/Favoritos_component"; 
import RoupasHome from "./components/RoupasHome/RoupasHome"
import FRoupasHome from "./components/FRoupasHome";
import BebidasHome from "./components/BebidasHome/BebidasHome"
//component
import LaptopPageComponent from "./components/Filmes_Component/LaptopPageComponent";

function App() {
  
  return(
    <Routes>

        <Route path="/" element={<Marketplace/>}></Route>
        <Route path="/sapatos" element={<Sapatos_component/>}></Route>
        
      

    
    <Route path="/RoupasHome" element={<RoupasHome/>}></Route>
    <Route path="filmes" element={<LaptopPageComponent/>}></Route>
    <Route path="FRoupasHome" element={<FRoupasHome/>}></Route>
    <Route path="/BebidasHome" element={<BebidasHome/>}></Route>
      </Routes>


  )


}

export default App;
