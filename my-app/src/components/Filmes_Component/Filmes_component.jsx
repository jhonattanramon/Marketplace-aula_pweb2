import "./filmes.css";
import { useState } from "react";

const Filmes_component = (props) => {
const [contagem, setContagem] = useState(0);

  if (props.produtos.length === 0) {
    return;
  }

  return (
    <>
      <div className="title">
        {" "}
        <h1>FILMES - <label> CONTAGEM: {contagem}</label></h1>
      </div>
      <div className="card">
        {props.produtos.map((f) => {
          return (
            <section className="sectionContainer" key={f.id}>
              <div>
                <img className="img" src={f.imagem} />
              </div>

              <div className="divDescription">
                <div>{f.nome}</div>
                <div>{f.preco}</div>

                <div>
                  <button
                    onClick={() => {
                      props.onAddFavoritos(props.produtos[Number(f.id) - 1]);
                      setContagem(contagem + 1)
                    }}
                  >
                    Adicionar Favoritos
                  </button>
                  <button
                    onClick={() => {
                      props.onAddDenuncia(props.produtos[Number(f.id) - 1]);
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
export default Filmes_component;
