import { useEffect, useState } from "react";
import "./carros.css";
import { Link } from "react-router-dom";

const Carros_component = (props) => {

  const [criatividade, setCriatividade] = useState([]);
  const [ordem, setOrdem] = useState("preco");
    console.log(criatividade);
  useEffect( () => {
    const load = async () => {
      const resultJson = await fetch("https://dummyjson.com/products/category/automotive");

      const resultProduct = await resultJson.json();
      let resultFormatado = resultProduct.products.map(({ id, title, price, thumbnail, rating, stock }) => ({
        id: id,
        nome: title,
        preco: price,
        imagem: thumbnail,
        avaliacao: rating,
        estoque: stock,
      }));

      setCriatividade(resultFormatado);
      console.log(criatividade)
    };

    load();
  },[] );


  useEffect(()=> {
    const lista = criatividade.slice();
    lista.sort((m1, m2) => m2[ordem] > m1[ordem] ? 1 : m2[ordem] < m1[ordem] ? -1:0 );
    console.log('order: '+ ordem);
    setCriatividade(lista);
  }, [ordem])

  if (props.produtos.length === 0) {
    return null;
  }
  
  return (
    <>
      <div className="title">
        <div className="acessorios">
        <h1>Acessórios de carros</h1>
        </div>


        <Link to="/carros">Clique aqui e acesse detalhes</Link>
        
        <div className="button1">
          <select onChange={(event) => setOrdem(event.target.value)}>
            <option value="preco">Preço</option>
            <option value="estoque">Estoque</option>
            <option value="avaliacao">Avaliação</option>
          </select>
        </div>

        <Link to="CarrosHome">Clique aqui não</Link>

        
      </div>

      <div className="title">
      
      <div className="containerCarros">
      

        {criatividade.map((Carro) => {
          return (
            <section className="containerCarros" key={Carro.id}>
                <div className="">
                    
              <div>
                    <img
                    className="imgCarros"
                    src={`${Carro.imagem}`} 
                    
                    />
              </div>
              <div className="cardH3">
                <h3>
                  {Carro.nome} <br />
                </h3>

                <div className="cardInfo">
                  <h3>{Carro.descricao}</h3>
                  <h3>R${Carro.preco}</h3>
                </div>

              <div className="buttonCarros">
                <button
                  className="buttonCarrosStyle "
                  onClick={() => {
                      props.onAddFavoritos(
                      props.produtos[Number(Carro.id - 1)]
                      );
                    }}
                    >
                  FAVORITAR
                </button>
                <br />
              </div>

              <div className="buttonCarros ">
                <button 
                onClick={ () => {
                    props.onAddDenuncia(
                        props.produtos[Number(Carro.id - 1)]
                        )
                    }}
                    className="buttonCarrosStyle">DENUNCIAR</button>
              </div>
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

export default Carros_component;
