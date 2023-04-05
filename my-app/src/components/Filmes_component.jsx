import "./filmes.css";
const Filmes_component = (props) => {
    
    
    console.log(props)
    if(props.produtos.length == 0){
        return
    }
    

    return(
    <div className="div">
        <div>
            <img className="img" src={props.produtos.filmes[0].imagem}/>
            <div>{props.produtos.filmes[0].nome}</div>
            <div>{props.produtos.filmes[0].descricao}</div>
            <div>{props.produtos.filmes[0].preco}</div>
        </div>
        
        <div>
            <img className="img" src={props.produtos.filmes[1].imagem}/>
            <div>{props.produtos.filmes[1].nome}</div>
            <div>{props.produtos.filmes[1].descricao}</div>
            <div>{props.produtos.filmes[1].preco}</div>
        </div>

        <div>
            <img className="img" src={props.produtos.filmes[2].imagem}/>
            <div>{props.produtos.filmes[2].nome}</div>
            <div>{props.produtos.filmes[2].descricao}</div>
            <div>{props.produtos.filmes[2].preco}</div>
        </div>

        <div>
            <img className="img" src={props.produtos.filmes[3].imagem}/>
            <div>{props.produtos.filmes[3].nome}</div>
            <div>{props.produtos.filmes[3].descricao}</div>
            <div>{props.produtos.filmes[3].preco}</div>
        </div>

        <div>
            <img className="img" src={props.produtos.filmes[4].imagem}/>
            <div>{props.produtos.filmes[4].nome}</div>
            <div>{props.produtos.filmes[4].descricao}</div>
            <div>{props.produtos.filmes[4].preco}</div>
        </div>
        <div>
            <img className="img" src={props.produtos.filmes[5].imagem}/>
            <div>{props.produtos.filmes[5].nome}</div>
            <div>{props.produtos.filmes[5].descricao}</div>
            <div>{props.produtos.filmes[5].preco}</div>
        </div>
        <div>
            <img className="img" src={props.produtos.filmes[6].imagem}/>
            <div>{props.produtos.filmes[6].nome}</div>
            <div>{props.produtos.filmes[6].descricao}</div>
            <div>{props.produtos.filmes[6].preco}</div>
        </div>
        <div>
            <img className="img" src={props.produtos.filmes[7].imagem}/>
            <div>{props.produtos.filmes[7].nome}</div>
            <div>{props.produtos.filmes[7].descricao}</div>
            <div>{props.produtos.filmes[7].preco}</div>
        </div>
        <div>
            <img className="img" src={props.produtos.filmes[8].imagem}/>
            <div>{props.produtos.filmes[8].nome}</div>
            <div>{props.produtos.filmes[8].descricao}</div>
            <div>{props.produtos.filmes[8].preco}</div>
        </div>
    </div>    


    )
}
export default Filmes_component