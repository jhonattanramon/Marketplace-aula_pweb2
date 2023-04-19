import "./bebidas.css";

const Bebidas_component = (props) => {
  if (props.produtos.length === 0) {
    return null;
  }

  return (
    <>
      <div className="title">
        {" "}
        <h1>BEBIDAS</h1>
      </div>

      <div className="card">
        {props.produtos.bebidas.map((bebida) => {
          return (
            <section className="sectionContainer" key={bebida.id}>
              <div>
                <img
                  className="img"
                  src={bebida.imagem}
                  alt="logo das marcas"
                />
              </div>
              <div className="divDescription">
                <h3>
                  {bebida.nome} <br />
                </h3>

                <div className="cardInfo">
                  <h3>{bebida.descricao}</h3>
                  <h3>R${bebida.preco}</h3>
                </div>

              <div className="fav">
                <button
                  className="buttonFav"
                  onClick={() => {
                    props.onAddFavoritos(
                      props.produtos.bebidas[Number(bebida.id - 1)]
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
                    props.produtos.bebidas[Number(bebida.id - 1)]
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

export default Bebidas_component;
