import { useEffect, useState } from "react";
import "./filmes.css";

const Filmes_component = (props) => {

  const [laptops, setLaptops] = useState([]);

  useEffect(() => {

    const load = async () => {
      const resultJson = await fetch("https://dummyjson.com/products/category/laptops");

      const fakeStoreaApi = await resultJson.json();

      const apiFomatada = [];

      fakeStoreaApi.products.map(({ id, title, price, thumbnail, rating, stock }) => {
        apiFomatada.push({
          id: id,
          nome: title,
          preco: price, 
          imagem: thumbnail,
          avaliacao: rating,
          estoque: stock,
        });
      });

      setLaptops(apiFomatada);
    };

    load();
  }, []);

  if (props.produtos.length === 0) {
    return;
  }


  const setProps = props.setProps;

  return (

    <>

<div className="title">
        {" "}
        <h1>LAPTOPS</h1>
      </div>
      <div className="card">
        {laptops.map((laptop) => {
          return (
            <section className="sectionContainer" key={laptop.id}>
              <div>
                <img className="img" src={laptop.imagem} />
              </div>

              <div className="divDescription">
                <div>{laptop.nome}</div>
                <div>{laptop.preco}</div>
                <div>{laptop.avaliacao}</div>
                <div>{laptop.estoque}</div>

                <div>
                  <button
                    onClick={() => {
                      props.onAddFavoritos(props.produtos[Number(laptop.id) - 1]);
                    }}
                  >
                    Adicionar Favoritos
                  </button>
                  <button
                    onClick={() => {
                      props.onAddDenuncia(props.produtos[Number(laptop.id) - 1]);
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
        <h1>FILMES - <label> CONTAGEM: {contagem}</label></h1>
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
export default Filmes_component;
