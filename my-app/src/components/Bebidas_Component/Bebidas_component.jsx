import "./bebidas.css";

const Bebidas_component = (props) => {
  if (props.produtos.length === 0) {
    return null;
  }

  return (
    <div className="containerBebidas">
      {props.produtos.bebidas.map((bebida) => {

        console.log(bebida);
        return (
          <div className="cardBebidas" key={bebida.id}>
            <img
              className="cardBebidas1"
              src={bebida.imagem}
              alt="logo das marcas"
            />
            <div className="cardH3">
              <h3>
                {bebida.nome} <br />
              </h3>
              <div className="cardInfo">
                <h3>{bebida.descricao}</h3>
                <h3>R${bebida.preco}</h3>
              </div>
            </div>

            <div className="fav">
              <button
                className="buttonFav"
                onClick={() => {
                  props.onAddFavoritos(
                    props.produtos.bebidas[Number(bebida.id - 1)],
                  );
                }}
              >
                FAVORITAR
              </button>
              <br />
            </div>

            <div className="den">
              <button className="buttonDen">DENUNCIAR</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bebidas_component;
