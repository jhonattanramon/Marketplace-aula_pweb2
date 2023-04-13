import "./filmes.css";
const Filmes_component = (props) => {


  if (props.produtos.length === 0) {
    return;
  }
  console.log(props);

  const setProps = props.setProps;

  return (
    <div className="div">
      <div className="card">
        <img className="img" src={props.produtos.filmes[0].imagem} />
        <div>{props.produtos.filmes[0].nome}</div>
        <div>{props.produtos.filmes[0].descricao}</div>
        <div>{props.produtos.filmes[0].preco}</div>

        <button
          onClick={() => {
           props.onAddFavoritos( props.produtos.filmes[0]);
          }}
        >
          adicionar favoritos
        </button>

        <button
          onClick={() => {
            props.onAddDenuncia(props.produtos.filmes[0]);
          }}
        >
          denunciar
        </button>
      </div>

      <div className="card">
        <img className="img" src={props.produtos.filmes[1].imagem} />
        <div>{props.produtos.filmes[1].nome}</div>
        <div>{props.produtos.filmes[1].descricao}</div>
        <div>{props.produtos.filmes[1].preco}</div>
        <button
          onClick={() => {
            props.onAddFavoritos(props.produtos.filmes[1])
          }}
        >
          adicionar favoritos
        </button>
      </div>

      <div className="card">
        <img className="img" src={props.produtos.filmes[2].imagem} />
        <div>{props.produtos.filmes[2].nome}</div>
        <div>{props.produtos.filmes[2].descricao}</div>
        <div>{props.produtos.filmes[2].preco}</div>
        <button
          onClick={() => {
            setProps([...props.PropFavoritos, props.produtos.filmes[2]]);
          }}
        >
          adicionar favoritos
        </button>
      </div>

      <div className="card">
        <img className="img" src={props.produtos.filmes[3].imagem} />
        <div>{props.produtos.filmes[3].nome}</div>
        <div>{props.produtos.filmes[3].descricao}</div>
        <div>{props.produtos.filmes[3].preco}</div>
        <button
          onClick={() => {
            setProps([...props.PropFavoritos, props.produtos.filmes[3]]);
          }}
        >
          adicionar favoritos
        </button>
      </div>

      <div className="card">
        <img className="img" src={props.produtos.filmes[4].imagem} />
        <div>{props.produtos.filmes[4].nome}</div>
        <div>{props.produtos.filmes[4].descricao}</div>
        <div>{props.produtos.filmes[4].preco}</div>
        <button
          onClick={() => {
            setProps([...props.PropFavoritos, props.produtos.filmes[4]]);
          }}
        >
          adicionar favoritos
        </button>
      </div>
      <div className="card">
        <img className="img" src={props.produtos.filmes[5].imagem} />
        <div>{props.produtos.filmes[5].nome}</div>
        <div>{props.produtos.filmes[5].descricao}</div>
        <div>{props.produtos.filmes[5].preco}</div>
        <button
          onClick={() => {
            setProps([...props.PropFavoritos, props.produtos.filmes[5]]);
          }}
        >
          adicionar favoritos
        </button>
      </div>
      <div className="card">
        <img className="img" src={props.produtos.filmes[6].imagem} />
        <div>{props.produtos.filmes[6].nome}</div>
        <div>{props.produtos.filmes[6].descricao}</div>
        <div>{props.produtos.filmes[6].preco}</div>
        <button
          onClick={() => {
            setProps([...props.PropFavoritos, props.produtos.filmes[6]]);
          }}
        >
          adicionar favoritos
        </button>
      </div>
      <div className="card">
        <img className="img" src={props.produtos.filmes[7].imagem} />
        <div>{props.produtos.filmes[7].nome}</div>
        <div>{props.produtos.filmes[7].descricao}</div>
        <div>{props.produtos.filmes[7].preco}</div>
        <button
          onClick={() => {
            setProps([...props.PropFavoritos, props.produtos.filmes[7]]);
          }}
        >
          adicionar favoritos
        </button>
      </div>
      <div className="card">
        <img className="img" src={props.produtos.filmes[8].imagem} />
        <div>{props.produtos.filmes[8].nome}</div>
        <div>{props.produtos.filmes[8].descricao}</div>
        <div>{props.produtos.filmes[8].preco}</div>
        <button
          onClick={() => {
            setProps([...props.PropFavoritos, props.produtos.filmes[8]]);
          }}
        >
          adicionar favoritos
        </button>
      </div>
    </div>
  );
};
export default Filmes_component;
