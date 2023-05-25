import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const RelogioPageComponent = (props) => {

    const [relogios, setRelogios] = useState([]);
    const [ordem, setOrdem] = useState("preco");
  
    useEffect( () => {
      const load = async () => {
        const resultJson = await fetch("https://dummyjson.com/products/category/mens-watches");
  
        const resultProduct = await resultJson.json();
        let resultFormatado = resultProduct.products.map(({ id, title, price, thumbnail, rating, stock }) => ({
          id: id,
          nome: title,
          preco: price,
          imagem: thumbnail,
          avaliacao: rating,
          estoque: stock,
        }));
  
        setRelogios(resultFormatado);
      };
  
      load();
    },[] );
  
  
    useEffect(()=> {
      const lista = relogios.slice();
      lista.sort((r1, r2) => r2[ordem] > r1[ordem] ? 1 : r2[ordem] < r1[ordem] ? -1:0 );
      console.log('order: '+ ordem);
      setRelogios(lista);
    }, [ordem])
  
    return (
          <>
          <Link to="/">Clique para ir a página inicial</Link>
        <div className="title">
          <h1>Relógios</h1>
  
          <div className="card">
            {relogios.map((relogio) => {
              return (
                <section className="sectionContainer" key={relogio.id}>
                  <div>
                    <img
                      className="img"
                      src={relogio.imagem}
                      alt="logo das marcas" />
                  </div>
                  <div className="divDescription">
                    <h3>
                      {relogio.nome} <br />
                    </h3>
  
                    <div className="cardInfo">
                      <h3>{relogio.descricao}</h3>
                      <h3>R${relogio.preco}</h3>
                    </div>
  
                    <div className="fav">
                      <button
                        className="buttonFav"
                        onClick={() => {
                          props.onAddFavoritos(
                            props.produtos[Number(relogio.id - 1)]
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
  
  export default RelogioPageComponent;