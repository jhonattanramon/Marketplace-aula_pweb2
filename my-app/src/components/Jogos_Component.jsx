import './jogos_estilos.css'

const Jogos_component = (props) => {
    if (props.produtos.length === 0) {
        return
    }

    return (
        <div id='geral'>

            <div class='jogo'>
                <p>{props.produtos.jogos[0].nome}</p>
                <img src={props.produtos.jogos[0].imagem} alt="" />
                <p>{props.produtos.jogos[0].preco}</p>
            </div>

            <div class='jogo'>
                <p>{props.produtos.jogos[1].nome}</p>
                <img src={props.produtos.jogos[1].imagem} alt="" />
                <p>{props.produtos.jogos[1].preco}</p>
            </div>

            <div class='jogo'>
                <p>{props.produtos.jogos[2].nome}</p>
                <img src={props.produtos.jogos[2].imagem} alt="" />
                <p>{props.produtos.jogos[2].preco}</p>
            </div>

            <div class='jogo'>
                <p>{props.produtos.jogos[3].nome}</p>
                <img src={props.produtos.jogos[3].imagem} alt="" />
                <p>{props.produtos.jogos[3].preco}</p>
            </div>

            <div class='jogo'>
                <p>{props.produtos.jogos[4].nome}</p>
                <img src={props.produtos.jogos[4].imagem} alt="" />
                <p>{props.produtos.jogos[4].preco}</p>
            </div>

            <div class='jogo'>
                <p>{props.produtos.jogos[5].nome}</p>
                <img src={props.produtos.jogos[5].imagem} alt="" />
                <p>{props.produtos.jogos[5].preco}</p>
            </div>

            <div class='jogo'>
                <p>{props.produtos.jogos[6].nome}</p>
                <img src={props.produtos.jogos[6].imagem} alt="" />
                <p>{props.produtos.jogos[6].preco}</p>
            </div>

            <div class='jogo'>
                <p>{props.produtos.jogos[7].nome}</p>
                <img src={props.produtos.jogos[7].imagem} alt="" />
                <p>{props.produtos.jogos[7].preco}</p>
            </div>

            <div class='jogo'>
                <p>{props.produtos.jogos[8].nome}</p>
                <img src={props.produtos.jogos[8].imagem} alt="" />
                <p>{props.produtos.jogos[8].preco}</p>
            </div>

            <div class='jogo'>
                <p>{props.produtos.jogos[9].nome}</p>
                <img src={props.produtos.jogos[9].imagem} alt="" />
                <p>{props.produtos.jogos[9].preco}</p>
            </div>


 


    if (props.produtos.length === 0 ) {
      return  
    }



    return(
        <div>

        </div>
    )
}

export default Jogos_component