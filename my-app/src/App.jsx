 import "./App.css";
import React from "react";

//component
import Marketplace from "./components/Marketplace";
import { Route, Routes } from "react-router-dom";
import JogosHomeComponent from "./components/Home/JogosHomeComponent/JogosHomeComponent";
import FilmesHomeComponent from "./components/Home/FilmesHomeComponent/FilmesHomeComponent";

function App() {
  return(
    
    <>
      <Routes>
        <Route path="/" element={<Marketplace/>}></Route>
        <Route path="/jogos" element={<JogosHomeComponent/>}></Route>
        <Route path="/filmes" element={<FilmesHomeComponent/>}></Route>
      </Routes>
    </>
  )
}

export default App;
