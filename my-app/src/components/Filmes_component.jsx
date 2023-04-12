import "./filmes.css";
const Filmes_component = (props) => {
    
    
    console.log(props)
    if(props.produtos.length == 0){
        return
    }
    

    return(
    <div className="div">
        {
            props.produtos.filmes.map(f => 
                <div key={f.id}>
                    <img className="img" src={f.imagem}/>
                    <div>{f.nome}</div>
                    <div>{f.preco}</div>
                </div>
            )
        }  
    </div>    


    )
}
export default Filmes_component