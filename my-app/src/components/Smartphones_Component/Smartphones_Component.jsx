import "./smartphones.css";
import { useState, useEffect } from "react";

const Smartphones_Component = (props) => {
const [contagem, setContagem] = useState(0);
const [smartphones, setSmartphones] = useState([])


useEffect(() => {
  const load = async () => {
    const resultJson = await fetch("https://dummyjson.com/products/category/smartphones");

      const fakeStoreaApi = await resultJson.json();

      const apiFomatada = [];

      fakeStoreaApi.products.map(({ id, title, price, thumbnail, stock, rating }) => {
        apiFomatada.push({
          id: id,
          nome: title,
          preco: price,
          imagem: thumbnail,
          estoque: stock,
          avaliacao: rating,
        });
      });
      
      setSmartphones(apiFomatada);
    };
    load();
  }, []);
  
  if (props.produtos.length === 0) {
    return;
  }

  return (
    <>
      <div className="title">
        {" "}
        <h1>Smartphones - <label> CONTAGEM: {contagem}</label></h1>
      </div>
      <div className="card">
        {smartphones.map((f) => {
          return (
            <section className="sectionContainer" key={f.id}>
              <div>
                <img className="img" src={f.imagem} />
              </div>

              <div className="divDescription">
                <div>{f.nome}</div>
                <div>R$ {f.preco}</div>
                <div>Estoque: {f.estoque}</div>
                <div>Avaliação: {f.avaliacao}</div>

                <div>
                  <button
                    onClick={() => {
                      props.onAddFavoritos(props.produtos[Number(f.id) - 1]);
                      setContagem(contagem + 1)
                    }}
                  >
                    Adicionar Favoritos
                  </button>
                  <button
                    onClick={() => {
                      props.onAddDenuncia(props.produtos[Number(f.id) - 1]);
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


      <div className="title">
        {" "}
        <h1>SMARTPHONES - <label> CONTAGEM: {contagem}</label></h1>
      </div>
      <div className="card">
        {props.produtos.map((f) => {
          return (
            <section className="sectionContainer" key={f.id}>
              <div>
                <img className="img" src={f.imagem} />
              </div>

              <div className="divDescription">
                <div>{f.nome}</div>
                <div>{f.preco}</div>

                <div>
                  <button
                    onClick={() => {
                      props.onAddFavoritos(props.produtos[Number(f.id) - 1]);
                      setContagem(contagem + 1)
                    }}
                  >
                    Adicionar Favoritos
                  </button>
                  <button
                    onClick={() => {
                      props.onAddDenuncia(props.produtos[Number(f.id) - 1]);
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
export default Smartphones_Component;
