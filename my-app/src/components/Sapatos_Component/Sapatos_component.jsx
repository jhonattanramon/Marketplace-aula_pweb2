import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./sapatos.css";

const Sapatos_component = ({ produtos, onAddDenuncia, onAddFavoritos,}) => {

//passo 1 Hook - React UseState
  const [contagem, setContagem] = useState(0);
  const [sapatosMasculino, setSapatosMasculino] = useState(0);
  
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
      <h1>SAPATOS {contagem} </h1>
      <Link to = 'SapatosHome'>Ir para Sapatos Home</Link>
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
                <Link to={`produto/${produto.id}`}>Ver detalhes</Link>
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
