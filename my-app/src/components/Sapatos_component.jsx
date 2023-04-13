
const Sapatos_component = (props) => {

        if(props.produtos.lenght == 0){
            return
        }
    return(
        <div>
                
            <div>{props.produtos.sapatos[0].nome}</div>
        </div>
    )

}

export default Sapatos_component