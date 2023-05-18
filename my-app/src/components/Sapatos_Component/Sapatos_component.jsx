import { Link } from "react-router-dom";
import "./sapatos.css";

const Sapatos_component = ({ produtos, onAddDenuncia, onAddFavoritos }) => {
  if (produtos.length === 0) {
    return;
  }

  return (

    <>

    <div className="title">
      <h1>SAPATOS</h1>
      <Link to="sapatos">Sapatos</Link>  
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
                <Link to={`produto/${id}`}>Ver detalhes</Link>
                <button
                  onClick={() => {
                  
                    onAddFavoritos(produtos[Number(id) - 1]);
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
export default Sapatos_component;
