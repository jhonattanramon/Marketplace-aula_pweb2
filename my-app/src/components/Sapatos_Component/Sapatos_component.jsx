import './sapatos.css'

const Sapatos_component = ({produtos, onAddDenuncia, onAddFavoritos}) =>{
    if(produtos.length === 0){
       return; 
    }

    return(

<div
      style={{
    display:'flex',
      }}
    >
      {produtos.sapatos.map(({ imagem, nome, descricao, preco, id }) => {
        return (
          <section className="caixa-sapato" key={id}>
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

                    console.log(produtos.sapatos[Number(id)- 1]);
                    onAddFavoritos( produtos.sapatos[Number(id) - 1])
                  }}
                >
                  Adicionar Favoritos   
                </button>
                <button onClick={() => {
                  onAddDenuncia(produtos.sapatos[Number(id) - 1])
                }}>
                  Denunciar
                </button>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
export default Sapatos_component;