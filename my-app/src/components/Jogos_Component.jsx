
const Jogos_component = (props) => {

    console.log(props);


    if (props.produtos.length === 0 ) {
      return  
    }


    return(
        <div>
             <div>{props.produtos.jogos[0].nome}</div>
        </div>
    )
}
 
export default Jogos_component