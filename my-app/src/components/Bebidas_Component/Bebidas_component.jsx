import "./bebidas.css";

const Bebidas_component = (props) => {


    if (props.produtos.length === 0) {
        return
    }

  return(
    
<div className="containerBebidas">

{props.produtos.bebidas.map((bebida) =>{

    
    
    return  <div className="cardBebidas" key={bebida.id}>
        <img className="cardBebidas1" src={bebida.imagem} alt="logo das marcas"/>
        <div className="cardH3">
        <h3>{bebida.nome} <br />
        {bebida.descricao} <br />
        R${bebida.preco}</h3> <br />
        </div>
   
        <div className="fav"><button className="cardButtonFav">FAVORITAR</button> <br /></div>
        <div className="den"><button className="cardButtonAdd">DENUNCIAR</button></div>

          
      
       
      
       
        
       
       
  </div>
})}
</div>
    
        
  )
}

export default Bebidas_component



