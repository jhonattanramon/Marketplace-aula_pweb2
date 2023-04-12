import "./bebidas.css";

const Bebidas_component = (props) => {


    if (props.produtos.length === 0) {
        return
    }
console.log(props)
   
  return(
    
<div className="containerBebidas">

{props.produtos.bebidas.map((bebida) =>{

    
    
    return  <div className="cardBebidas" key={bebida.id}>
        <img className="cardBebidas1" src={bebida.imagem} alt="logo das marcas"/>
        <p>{bebida.nome}</p>
        <p>{bebida.descricao}</p>
        <p>{bebida.preco}</p>
        <button>Favoritar</button>
        <button>Adicionar</button>
  </div>
})}
</div>
    
        
  )
}

export default Bebidas_component



