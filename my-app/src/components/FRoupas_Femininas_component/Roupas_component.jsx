import "./roupas.css";
import { useEffect, useState } from "react";
const FRoupas_Femininas_component = ({

  onAddFavoritos,
  onAddDenuncia,
  PropFavoritos,
}) => {


  // if (produtos.length === 0) {
  //   return;
  // }
  const [contagem, setContagem] = useState(0)
  const [produtos, setProdutos] = useState([])


    useEffect(() => {
      
      const load = async () => {
        const resultJson = await fetch("https://dummyjson.com/products/category/womens-dresses")

        const resultProduct = await resultJson.json();
        
        const result = resultProduct.products
        console.log(result);

        let api = result.map(({ id, title, price, thumbnail }) => ({
          id: id,
          nome: title,
          preco: price,
          imagem: thumbnail,
          
           
        }));

        setProdutos(api)

      }
      load();
    },[]); 

  return (

    <> 
      <div className="title"> <h1>ROUPAS FEMININAS<label> {contagem}</label></h1> 
        <select name="opt" id="iopt">

                <option value="" selected>----Escolha----</option>
                  <optgroup label="Filtrar">
                    <option value="mep">Menor Preço</option>
                    <option value="map">Maior Preço</option>
                    <option value="mas">Mais estoque</option>
                  </optgroup>

        </select>
      </div>

    <div className="card">


      {produtos.map(({ imagem, nome, descricao, preco, id }) => {
        return (
          <section className="sectionContainer" key={id}>
            <div>
              <img className="img" src={imagem} alt="" />
            </div>

            <div className="divDescription">
              <div>{nome} </div>
              <div>
                <span>
                  {" "}
                  <span> $: </span>
                  {preco}
                </span>
              </div>

              <div>
                <button
                  onClick={() => {
                    onAddFavoritos(produtos[Number(id) - 1]);
                    setContagem(contagem + 1)
                  }}
                >
                  Adicionar Favoritos
                </button>
                <button
                  onClick={() => {
                    onAddDenuncia(produtos[Number(id) - 1]);
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

export default FRoupas_Femininas_component;
