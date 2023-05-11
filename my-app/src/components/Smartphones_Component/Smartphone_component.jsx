import { useEffect, useState } from "react";
import "./Smartphone.css";

const Smartphone_Component = (props) => {

  const [celulares, setCelulares] = useState([]);
  const [ordem, setOrdem] = useState("avaliacao");

  useEffect( () => {
    const load = async () => {
      const resultJson = await fetch("https://dummyjson.com/products/category/smartphones");

      const resultProduct = await resultJson.json();
      let resultFormatado = resultProduct.products.map(({ id, title, price, thumbnail, rating, stock }) => ({
        id: id,
        nome: title,
        preco: price,
        imagem: thumbnail,
        avaliacao: rating,
        estoque: stock,
      }));

      setCelulares(resultFormatado);
      console.log(celulares)
    };

    load();
  },[] );


  useEffect(()=> {
    const lista = celulares.slice();
    lista.sort((c1, c2) => c2[ordem] > c1[ordem] ? 1 : c2[ordem] < c1[ordem] ? -1:0 );
    console.log('order: '+ ordem);
    setCelulares(lista);
  }, [ordem])

  if (props.produtos.length === 0) {
    return null;
  }
  
  return (
    <>
      <div className="title">
    
        <h1>SMARTPHONES</h1>
        <div>
          <select onChange={(event) => setOrdem(event.target.value)}>
            <option value="avaliacao">Avaliação</option>
            <option value="preco">Preço</option>
            <option value="estoque">Estoque</option>
          </select>
        </div>
        <div className="card">
        {celulares.map((produto) => {
          return (
            <section className="container" key={produto.id}>
              <div>
                <img
                  className="img"
                  src={produto.imagem}
                  alt="logo das marcas"
                />
              </div>
              <div className="divDescription">
                <h3>
                  {produto.nome} <br />
                </h3>

                <div className="cardInfo">
                  <h3>{produto.descricao}</h3>
                  <h3>R${produto.preco}</h3>
                  <h3>{produto.avaliacao}</h3>
                  <h3>{produto.estoque}</h3>
                </div>

              <div className="fav">
                <button
                  className="buttonFav"
                  onClick={() => {
                    props.onAddFavoritos(
                      props.produtos[Number(produto.id - 1)]
                      );
                    }}
                    >
                  FAVORITAR
                </button>
                <br />
              </div>

              <div className="den">
                <button 
                onClick={ () => {
                  props.onAddDenuncia(
                    props.produtos[Number(produto.id - 1)]
                  )
                }}
                className="buttonDen">DENUNCIAR</button>
              </div>
                  </div>
            </section>
          );
        })}
      </div>
      </div>

      <div className="title">
      <h1>CELULARES</h1>
      
      <div className="card">
      

        {props.produtos.map((celular) => {
          return (
            <section className="sectionContainer" key={celular.id}>
              <div>
                <img
                  className="img"
                  src={celular.imagem}
                  alt="logo"
                />
              </div>
              <div className="divDescription">
                <h3>
                  {celular.nome} <br />
                </h3>

                <div className="cardInfo">
                  <h3>{celular.descricao}</h3>
                  <h3>R${celular.preco}</h3>
                </div>

              <div className="fav">
                <button
                  className="buttonFav"
                  onClick={() => {
                    props.onAddFavoritos(
                      props.produtos[Number(celular.id - 1)]
                      );
                    }}
                    >
                  FAVORITAR
                </button>
                <br />
              </div>

              <div className="den">
                <button 
                onClick={ () => {
                  props.onAddDenuncia(
                    props.produtos[Number(celular.id - 1)]
                  )
                }}
                className="buttonDen">DENUNCIAR</button>
              </div>
                  </div>
            </section>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Smartphone_Component;
