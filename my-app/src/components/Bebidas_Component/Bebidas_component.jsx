import "./bebidas.css";

const Bebidas_component = (props) => {

  return(
    
   


<div className="card">

{props.produtos.bebidas.map((bebida) => (
  <div className="card1" key={bebida.id}>
      <img src={bebida.imagem} alt="logo das marcas"/>
        <p>{bebida.nome}</p>
        <p>{bebida.descric.ao}</p>
        <p>{bebida.preco}</p>
  </div>
))}

</div>
    
        
  )
}

export default Bebidas_component



