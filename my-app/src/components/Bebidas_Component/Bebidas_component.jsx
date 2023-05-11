import { useEffect, useState } from "react";
import "./bebidas.css";

const Bebidas_component = (props) => {

  const [mantimentos, setMantimentos] = useState([]);
  const [ordem, setOrdem] = useState("preco");

  useEffect( () => {
    const load = async () => {
      const resultJson = await fetch("https://dummyjson.com/products/category/groceries");

      const resultProduct = await resultJson.json();
      let resultFormatado = resultProduct.products.map(({ id, title, price, thumbnail, rating, stock }) => ({
        id: id,
        nome: title,
        preco: price,
        imagem: thumbnail,
        avaliacao: rating,
        estoque: stock,
      }));

      setMantimentos(resultFormatado);
      console.log(mantimentos)
    };

    load();
  },[] );


  useEffect(()=> {
    const lista = mantimentos.slice();
    lista.sort((m1, m2) => m2[ordem] > m1[ordem] ? 1 : m2[ordem] < m1[ordem] ? -1:0 );
    console.log('order: '+ ordem);
    setMantimentos(lista);
  }, [ordem])

  if (props.produtos.length === 0) {
    return null;
  }
  
  return (
    <>
      <div className="title">
    
        <h1>GROCERIES</h1>
        <div>
          <select onChange={(event) => setOrdem(event.target.value)}>
            <option value="preco">Preço</option>
            <option value="estoque">Estoque</option>
            <option value="avaliacao">Avaliação</option>
          </select>
        </div>
        <div className="card">
        {mantimentos.map((produto) => {
          return (
            <section className="sectionContainer" key={produto.id}>
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
      <h1>BEBIDA</h1>
      
      <div className="containerBebidas">
      

        {props.produtos.map((bebida) => {
          return (
            <section className="containerBebidas" key={bebida.id}>
              <div>
                <img
                  className="img"
                  src={bebida.imagem}
                  alt="logo das marcas"
                />
              </div>
              <div className="cardH3">
                <h3>
                  {bebida.nome} <br />
                </h3>

                <div className="cardInfo">
                  <h3>{bebida.descricao}</h3>
                  <h3>R${bebida.preco}</h3>
                </div>

              <div className="cardBbebidas1">
                <button
                  className="buttonFav"
                  onClick={() => {
                    props.onAddFavoritos(
                      props.produtos[Number(bebida.id - 1)]
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
                    props.produtos[Number(bebida.id - 1)]
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

export default Bebidas_component;
