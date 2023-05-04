import "./roupas.css";
import { useState } from "react";
const Roupas_component = ({
  produtos,
  onAddFavoritos,
  onAddDenuncia,
  PropFavoritos,
}) => {


  const [contagem, setContagem] = useState(0)


  if (produtos.length === 0) {
    return;
  }

  return (

    <> 
      <div className="title"> <h1>ROUPAS <label> {contagem}</label></h1> 
        
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

export default Roupas_component;
