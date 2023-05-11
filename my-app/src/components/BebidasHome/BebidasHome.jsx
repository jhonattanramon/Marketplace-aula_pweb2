import { useEffect, useState } from "react";
import "./bebidas.css";
import {Link} from 'react-router-dom'


const BebidasHome = (props) => {

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
  
  return (
    

        <>
        <Link to="/">Clique para ir a página inicial</Link>

      <div className="title">
        <h1>BEBIDA</h1>

        <div className="card">


          {mantimentos.map((bebida) => {
            return (
              <section className="sectionContainer" key={bebida.id}>
                <div>
                  <img
                    className="img"
                    src={bebida.imagem}
                    alt="logo das marcas" />
                </div>
                <div className="divDescription">
                  <h3>
                    {bebida.nome} <br />
                  </h3>

                  <div className="cardInfo">
                    <h3>{bebida.descricao}</h3>
                    <h3>R${bebida.preco}</h3>
                  </div>

                  <div className="fav">
                    <button
                      className="buttonFav"
                      onClick={() => {
                        props.onAddFavoritos(
                          props.produtos[Number(bebida.id - 1)]
                        );
                      } }
                    >
                      FAVORITAR
                    </button>
                    <br />
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

export default BebidasHome;
