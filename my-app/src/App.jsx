import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';

//component

import Filmes_component from "./components/Filmes_Component/Filmes_component";
import Jogos_component from "./components/Jogos_Component/Jogos_Component";
import Roupas_component from "./components/Roupas_componet/Roupas_component";
import Sapatos_component from "./components/Sapatos_Component/Sapatos_component";
import Bebidas_component from "./components/Bebidas_Component/Bebidas_component";
import Carros_component from "./components/Carros_component/Carros_component";

import Favoritos_component from "./components/Favoritos_Component/Favoritos_component";
import Denuncia_component from './components/Denuncia_component.s/Denuncia_component';

function App() {
  const [produtos, setProdutos] = useState([]);

  const [favoritos, setFavoritos] = useState([]);

  const [denunciados, setDenunciados] = useState([]);

  const addDenunciados = (produto) => {
    console.log(produto);
  };

  const addFavoritos = (produtos) => {
    setFavoritos([...favoritos, produtos])
   
  }
 
  

  useEffect(() => {
    const load = async () => {
      const roupas = await (
        await fetch("https://6426bdd3556bad2a5b56d684.mockapi.io/Roupas")

      ).json();
      const filmes = await (
        await fetch("https://6426bdd3556bad2a5b56d684.mockapi.io/Filmes")
      ).json();
      const jogos = await (
        await fetch("https://6426c45cd24d7e0de477b3dd.mockapi.io/jogos")
      ).json();
      const sapatos = await (
        await fetch("https://6426c45cd24d7e0de477b3dd.mockapi.io/sapatos")
      ).json();
      const bebidas = await (
        await fetch("https://642dbef1bf8cbecdb40df741.mockapi.io/bebidas")

      ).json();
      const carros = await (
        await fetch("https://6436eb343e4d2b4a12df1a39.mockapi.io/carros")
        

      ).json();

      const ObjProdutos = {
        roupas: roupas,
        filmes: filmes,
        jogos: jogos,
        sapatos: sapatos,
        bebidas: bebidas,
        carros: carros,
      };

      setProdutos(ObjProdutos);
    };
    load();
  }, []);

  return (
    <div className="App">
      <div className="box2">
        <Favoritos_component favoritos={favoritos} />
      </div>

      <div className='box2'>
        <Denuncia_component />
      </div>

      <div className="box2">
        <Filmes_component
          produtos={produtos}
          PropFavoritos={favoritos}
          onAddDenuncia={addDenunciados}
          onAddFavoritos={addFavoritos}
        />
      </div>

      <div className="box-container">
        <div className="box">
          <Jogos_component
            produtos={produtos}
            PropFavoritos={favoritos}
            onAddDenuncia={addDenunciados}
          onAddFavoritos={addFavoritos}
          />
        </div>

        <div className="box">
          <Roupas_component
            produtos={produtos}
            PropFavoritos={favoritos}
            onAddDenuncia={addDenunciados}
          onAddFavoritos={addFavoritos}
          />
        </div>
      </div>

      <div className="box2">
        <Sapatos_component
          produtos={produtos}
          PropFavoritos={favoritos}
          onAddDenuncia={addDenunciados}
          onAddFavoritos={addFavoritos}
        />
      </div>

      <div className="box4">
        <Bebidas_component
          produtos={produtos}
         PropFavoritos={favoritos}
         onAddDenuncia={addDenunciados}
          onAddFavoritos={addFavoritos}
         />
      </div>

        <div className="box2">
        <Carros_component 
         produtos={produtos}
        PropFavoritos={favoritos}
        onAddDenuncia={addDenunciados}
          onAddFavoritos={addFavoritos}
        />
      </div>
    </div>
  );
}

export default App;