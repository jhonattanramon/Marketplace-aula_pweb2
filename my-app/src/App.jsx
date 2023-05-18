 import "./App.css";
import React from "react";

//component
import Marketplace from "./components/Marketplace";
import { Route, Routes } from "react-router-dom";
import CarrosPageComponent from "./components/Carros_component/CarrosPageComponent";
import SapatosHomeComponent from "./components/Sapatos_Component/SapatosHomeComponent";
import ProdutoHomeComponent from "./components/ProdutoHome/ProdutoHomeComponent";
import PaginaNaoEncontradaComponent from "./components/PaginaNaoEncontrada/PaginaNaoEncontradaComponent";

function App() {
  
  return(
    <Routes>
      <Route path="/" element={<Marketplace /> }/>
      <Route path="/carros" element={<CarrosPageComponent /> }/>
      <Route path="/sapatos" element={<SapatosHomeComponent /> }/>
      <Route path="/produto/:id" element={<ProdutoHomeComponent /> }/>

      <Route path="*" element={<PaginaNaoEncontradaComponent /> }/>
    </Routes>
  )
}

export default App;
