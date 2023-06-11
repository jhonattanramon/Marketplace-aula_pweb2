import { useEffect, useState } from "react";
import "./Groceries.css";
import { Link } from "react-router-dom";

const Groceries_component = (props) => {

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
      <div>
    
        <h1>GROCERIES</h1>
        <div>

        <div>
          <select onChange={(event) => setOrdem(event.target.value)}>
            <option value="preco">Preço</option>
            <option value="estoque">Estoque</option>
            <option value="avaliacao">Avaliação</option>
          </select>
        </div>
        <Link to="BebidasHome">Clique para ir a página de groceries</Link>

        <div>
        {mantimentos.map((mantimento) => {
          return (
            <section key={mantimento.id}>
              <div>
                <img
                  src={mantimento.imagem}
                  alt="logo das marcas"
                />
              </div>
              <div>
                <h3>
                  {mantimento.nome} <br />
                </h3>

                <div>
                  <h3>{mantimento.descricao}</h3>
                  <h3>R${mantimento.preco}</h3>
                  <h3>{mantimento.avaliacao}</h3>
                  <h3>{mantimento.estoque}</h3>
                </div>

              <div>
                <button
                  onClick={() => {
                    props.onAddFavoritos(
                      props.produtos[Number(mantimento.id - 1)]
                      );
                    }}
                    >
                  FAVORITAR
                </button>
                <br />
              </div>

              <div>
                <button 
                onClick={ () => {
                  props.onAddDenuncia(
                    props.produtos[Number(mantimento.id - 1)]
                  )
                }}
                >DENUNCIAR</button>
              </div>
                  </div>
            </section>
          );
        })}
      </div>
      </div>
      </div>

      <div>
      <h1>Variedades</h1>
      
      

        {props.produtos.map((variedades) => {
          return (
            <section key={variedades.id}>
              <div>
                <img
                  
                  src={variedades.imagem}
                  alt="logo das marcas"
                />
              </div>
              <div>
                <h3>
                  {variedades.nome} <br />
                </h3>

                <div>
                  <h3>{variedades.descricao}</h3>
                  <h3>R${variedades.preco}</h3>
                </div>

              <div>
                <button
            
                  onClick={() => {
                    props.onAddFavoritos(
                      props.produtos[Number(variedades.id - 1)]
                      );
                    }}
                    >
                  FAVORITAR
                </button>
                <br />
              </div>

              <div>
                <button 
                onClick={ () => {
                  props.onAddDenuncia(
                    props.produtos[Number(variedades.id - 1)]
                  )
                }}
                >DENUNCIAR</button>
              </div>
                  </div>
            </section>
          );
        })}
      </div>
    
    </>
  );
};

export default Groceries_component;
