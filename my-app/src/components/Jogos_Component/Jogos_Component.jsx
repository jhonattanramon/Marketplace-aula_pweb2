import "./jogos_estilos.css";

const Jogos_component = ({produtos,onAddFavoritos,onAddDenuncia}) => {
  if (produtos.length === 0) {
    return;
  }
  return (

    <> 

    <div className="title"><h1>JOGOS</h1></div>
 
 <div className="card">
    {produtos.jogos.map(({ imagem, nome, descricao, preco, id }) => {
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
                    produtos.jogos[Number(id) - 1],
                  );
                }}
                >
                adicionar favoritos
              </button>

              <button
              onClick={ () => {
                onAddDenuncia ( 
                  produtos.jogos[Number(id) - 1]
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
