import "./filmes.css";
const Filmes_component = (props) => {


  if (props.produtos.length === 0) {
    return;
  }
  console.log(props);

  const setProps = props.setProps;

  return (
    <div className="div">
      {
        props.produtos.filmes.map(f => 
          <div className="card">
            <img className="img" src={f.imagem} />
            <div>{f.nome}</div>
            <div>{f.descricao}</div>
            <div>{f.preco}</div>

            <button
              onClick={() => {
              props.onAddFavoritos( f );
              }}
            >
              adicionar favoritos
            </button>

            <button
              onClick={() => {
                props.onAddDenuncia( f );
              }}
            >
              denunciar
            </button>
          </div>  
        )
      }
    </div>
  );
};
export default Filmes_component;
