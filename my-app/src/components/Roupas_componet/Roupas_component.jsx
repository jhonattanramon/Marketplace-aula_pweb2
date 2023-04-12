import "./roupas.css";

const Roupas_component = ({ produtos, setProps, PropFavoritos }) => {
  if (produtos.length === 0) {
    return;
  }

  return (
    <div
      style={{
        overflowY: "scroll",
        background: "blue",
        height: "100%",
        width: 400,
      }}
    >
      {produtos.roupas.map(({ imagem, nome, descricao, preco, id }) => {
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
                    setProps([
                      ...PropFavoritos,
                      produtos.roupas[Number(id) - 1],
                    ]);
                  }}
                >
                  adicionar favoritos
                </button>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Roupas_component;
