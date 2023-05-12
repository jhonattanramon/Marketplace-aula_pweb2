import "./Smartphone.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


const SmartphonePage_component = (props) =>{
    
const [contagem, setContagem] = useState(0)
const [celulares, setCelulares] = useState([]);
const [ordem, setOrdem] = useState("avaliacao");


    useEffect(() => {
      
      const load = async () => {
        const resultJson = await fetch("https://dummyjson.com/products/category/smartphones")

        const resultProduct = await resultJson.json();
        
        const result = resultProduct.products
        console.log(result);

        let resultFormatado = resultProduct.products.map(({ id, title, price, thumbnail, rating, stock }) => ({
            id: id,
            nome: title,
            preco: price,
            imagem: thumbnail,
            avaliacao: rating,
            estoque: stock,
        }));

        setCelulares(resultFormatado);

      }
      load();
    },[]); 

    
    return (
        <> 
          <div className="title"> <h1>SMARTPHONES</h1><label> {contagem}</label>
          <select onChange={(event) => setOrdem(event.target.value)}>
            <option value="avaliacao">Avaliação</option>
            <option value="preco">Preço</option>
            <option value="estoque">Estoque</option>
          </select>
          </div>
         
          <Link to="SmartphonePage_component">Página de Smartphones</Link>
    
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
    </>
      );
    };

    export default SmartphonePage_component;