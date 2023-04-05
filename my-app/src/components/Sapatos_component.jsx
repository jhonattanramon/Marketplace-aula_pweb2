
const Sapatos_component = (props) => {

    if( props.produtos.length == 0){
        return
    }


    console.log(props);
    return(
        <div>
            {/* <img src= alt="" /> Pegar o endereço da imagem */}
             <div>{props.produtos.sapatos[0].nome}</div>
        </div>
    )

}

export default Sapatos_component