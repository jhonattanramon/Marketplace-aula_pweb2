import { Link } from "react-router-dom";
import "./jogos_estilos.css";

const Jogos_component = ({produtos,onAddFavoritos,onAddDenuncia}) => {
  if (produtos.length === 0) {
    return;
  }
  return (

    <> 

    <div className="title"><h1>JOGOS</h1></div>
    <Link to="jogos">Clique para ir a página de filmes</Link>
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
                  onAddFavoritos(
                    produtos[Number(id) - 1],
                  );
                }}
                >
                adicionar favoritos
              </button>

              <button
              onClick={ () => {
                onAddDenuncia ( 
                  produtos[Number(id) - 1]
                )
              }}>
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

export default Jogos_component;
