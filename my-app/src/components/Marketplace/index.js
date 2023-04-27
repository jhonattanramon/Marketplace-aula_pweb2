import "../../App.css";
import React from "react";
import { useEffect, useState } from "react";

//component

import Filmes_component from "../Filmes_Component/Filmes_component";
import Jogos_component from "../Jogos_Component/Jogos_Component";
import Roupas_component from "../Roupas_componet/Roupas_component";
import Sapatos_component from "../Sapatos_Component/Sapatos_component";
import Bebidas_component from "../Bebidas_Component/Bebidas_component";
import Favoritos_component from "../Favoritos_Component/Favoritos_component";
import Denuncia_component from "../Denuncia_component.s/Denuncia_component";



const Marketplace = () => {




  const [produtos, setProdutos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [denunciados, setDenunciados] = useState([]);

  const [totalFavoritos, setTotalFavoritos] = useState(0);

  const addDenunciados = (produto) => {
    const checkProduto = denunciados.find((f) => f.id === produto.id);

    if (!checkProduto) {
      setDenunciados([...denunciados, produto]);
    }
  };

  const addFavoritos = (produto) => {
    const checkProduto = favoritos.find((f) => f.id === produto.id);

    if (!checkProduto) {
      setTotalFavoritos(totalFavoritos + produto.preco);
      setFavoritos([...favoritos, produto]);
    }
  };

  useEffect(() => {
    const load = async () => {
      const resultJson = await fetch("https://fakestoreapi.com/products");

      const fakeStoreaApi = await resultJson.json();

      //formatação da API FAKE
      const apiFomatada = [];

      fakeStoreaApi.map(({ id, title, price, image }) => {
        apiFomatada.push({
          id: id,
          nome: title,
          preco: price,
          imagem: image,
        });
      });

      setProdutos(apiFomatada);
    };
    load();
  }, []);

  return (
    <div className="App">
      <div className="box2">
        <h1>{totalFavoritos}</h1>
        <Favoritos_component
          favoritos={favoritos}
          onAddFavoritos={addFavoritos}
        />
      </div>

      <div className="box2">
        <Denuncia_component denunciados={denunciados} />
      </div>

      <div className="box2">
        <Filmes_component
          produtos={produtos}
          PropFavoritos={favoritos}
          onAddDenuncia={addDenunciados}
          onAddFavoritos={addFavoritos}
        />
      </div>

      <div className="box2">
        <Jogos_component
          produtos={produtos}
          PropFavoritos={favoritos}
          onAddDenuncia={addDenunciados}
          onAddFavoritos={addFavoritos}
        />
      </div>

      <div className="box2">
        <Roupas_component
          produtos={produtos}
          PropFavoritos={favoritos}
          onAddDenuncia={addDenunciados}
          onAddFavoritos={addFavoritos}
        />
      </div>

      <div className="box2">
        <Sapatos_component
          produtos={produtos}
          PropFavoritos={favoritos}
          onAddDenuncia={addDenunciados}
          onAddFavoritos={addFavoritos}
        />
      </div>

      <div className="box2">
        <Bebidas_component
          produtos={produtos}
          PropFavoritos={favoritos}
          onAddDenuncia={addDenunciados}
          onAddFavoritos={addFavoritos}
        />
      </div>
    </div>
  );
}



export default Marketplace