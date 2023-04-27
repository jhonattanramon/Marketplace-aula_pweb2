import "./filmes.css";
const Filmes_component = (props) => {
  if (props.produtos.length === 0) {
    return;
  }

  const setProps = props.setProps;

  return (
    <>
      <div className="title">
        {" "}
        <h1>FILMES</h1>
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
