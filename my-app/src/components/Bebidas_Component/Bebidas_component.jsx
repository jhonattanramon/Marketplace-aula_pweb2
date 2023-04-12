import "./bebidas.css";

const Bebidas_component = (props) => {


    if (props.produtos.length === 0) {
        return
    }
console.log(props)
   
  return(
    
   


<div className="cardBebidas">

{props.produtos.bebidas.map((bebida) =>{

    
    
    return <div className="cardBebidas1" key={bebida.id}>
      <img src={bebida.imagem} alt="logo das marcas"/>
        <p>{bebida.nome}</p>
        <p>{bebida.descricao}</p>
        <p>{bebida.preco}</p>
  </div>
}

)


    }

 
</div>
    
        
  )
}

export default Bebidas_component



