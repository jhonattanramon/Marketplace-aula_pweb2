import { useEffect } from "react";
import { useState } from "react";
import "./sapatos.css";
import {Link} from 'react-router-dom'

const Sapatos_component = ({ produtos, onAddDenuncia, onAddFavoritos,}) => {

//passo 1 Hook - React UseState
  const [contagem, setContagem] = useState(0);
  const [sapatosMasculino, setSapatosMasculino] = useState(0);
  const [ordem, setOrdem] = useState(null);

  <select onChange={(evt) => setOrdem(evt.target.value)}>
            <option value="">Ordenar por</option>
            <option value="nome">Nome</option>
            <option value="preco">Preço</option>
            <option value="avaliacao">Avaliaçâo</option>
        </select>

        useEffect(() => {

            console.log('ordenar ' + ordem);
           
        
        }, [ordem]);

          



  useEffect(() => {
    const load =  async () => {
      const result = await fetch('https://dummyjson.com/products/category/mens-shoes');
      const resultJson = await result.json();
    
     const novaLista = resultJson.products.map( p => ({
        id: p.id,
        nome: p.title,
        preco: p.price,
        avaliacao: p.rating,
        estoque: p.stock,
        marca: p.brand,
        imagem: p.thumbnail
     }));
      
     setSapatosMasculino(novaLista);
    }

    load();
  }, []);
  
  if (produtos.length === 0) {
    return <></>;
  }
// passo 4 Hook - React UseState
  function handleAddFavorito(produto){
    setContagem(contagem+1);
    onAddFavoritos(produto);
  }

  return (

    <>
    {/* passo 2  Hook - React UseState */}
    
    <div className="title">
      <h1>Sapatos Masculino {contagem} </h1>
      <Link to = 'SapatosHome'>Ir para Sapatos Home</Link>
    </div> 
    <div className="actions-container">
      <select>
          <option value="">Ordenar por</option>
          <option value="nome">Nome</option>
          <option value="preco">Preço</option>
          <option value="avaliacao">Avaliaçâo</option>
      </select>
    </div>
    <div className="card">
      {sapatosMasculino.map((produto) => {
        return (
          <section className="sectionContainer" key={produto.id}>
            <div>
              <img className="img" src={produto.imagem} alt="" />
            </div>

            <div className="divDescription">
              <div>{produto.nome} </div>
              <div>
                <span>
                  {" "}
                  <span> R$: </span>
                  {produto.preco}
                </span>
              </div>

              <div>
                <button
                  onClick={() => {
                    // passo 3 Hook - React UseState
                    handleAddFavorito(produto);
                  }}
                  >
                  Adicionar Favoritos
                </button>
                <button
                  onClick={() => {
                    onAddDenuncia(produto);
                  }}
                >
                  Denunciar
                </button>
              </div>
            </div>
          </section>
        );
      })}
    </div>
        </>
  );
};
export default Sapatos_component;
