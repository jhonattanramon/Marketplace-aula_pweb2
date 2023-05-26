import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
//component
import Marketplace from "./components/Marketplace";
import Sapatos_component from "./components/SapatosHome/SapatosHomeComponent";

//component
// import FavoritosHome from "./components/Home/favoritos/FavoritosHome";
import Favoritos_component from "./components/Favoritos_Component/Favoritos_component";
import RoupasHome from "./components/RoupasHome/RoupasHome";

//component

import CarrosPageComponent from "./components/Carros_component/CarrosPageComponent";
import SapatosHomeComponent from "./components/Sapatos_Component/SapatosHomeComponent";
import ProdutoHomeComponent from "./components/ProdutoHome/ProdutoHomeComponent";
import PaginaNaoEncontradaComponent from "./components/PaginaNaoEncontrada/PaginaNaoEncontradaComponent";

import FilmeDetalhesPage from "./components/Filmes_Component/FilmeDetalhesPage";
import LaptopPageComponent from "./components/Filmes_Component/LaptopPageComponent";
import RelogioPageComponent from "./components/RelogioPageComponent/RelogioPageComponent";
import RelogioDetalhes from "./components/RelogioPageComponent/RelogioDetalhes";

//Homes
import FRoupasHome from "./components/FRoupasHome";
import BebidasHome from "./components/BebidasHome/BebidasHome";
import FavoritosHome from "./Home/favoritos/FavoritosHome";

//Detalhes
import FavoritosDetalhesPage from "./pages/favoritosDetalhes/FavoritosDetalhesPage";

function App() {
  return (
    <Routes>
      {/*components*/}
      <Route path="/" element={<Marketplace />} />
      <Route path="/carros" element={<CarrosPageComponent />} />
      <Route path="*" element={<PaginaNaoEncontradaComponent />} />
      <Route path="/RelogioPageComponent" element={<RelogioPageComponent />} />
      <Route path="/sapatos" element={<Sapatos_component />} />
      <Route path="/filmes" element={<LaptopPageComponent />} />
      {/*home */}
      <Route path="/RoupasHome" element={<RoupasHome />} />
      <Route path="/FRoupasHome" element={<FRoupasHome />} />
      <Route path="/BebidasHome" element={<BebidasHome />} />
      <Route path="/sapatosHome" element={<SapatosHomeComponent />} />
      <Route path="/favoritoshome" element={<FavoritosHome />} />
      {/* params */}
      <Route path="/filme/:id" element={<FilmeDetalhesPage />} />
      <Route
        path="/favoritosDetalhesPage/:id"
        element={<FavoritosDetalhesPage />}
      />
      <Route path="/relogio/:id" element={<RelogioDetalhes />} />
      /
      <Route path="/produto/:id" element={<ProdutoHomeComponent />} />
    </Routes>
  );
}

export default App;
