
const Favoritos_component = ({favoritos}) => {

        console.log(favoritos);

        const BaseDeFavoritos = () => {


            <section>

            <div>
                <img src={favoritos} alt="" />
            </div>

            <div> </div>
            </section>

            
        }

    return(
        <div>
            <div>

                {favoritos.map( ({imagem, nome,descricao, preco, id}) => {

                    return(

                        <section>

                        <div>
                            <img src={imagem} alt="" />
                        </div>
            
                        <div> {nome} </div>
                        </section>
                    )

                })}

                
            </div>
        </div>
    )
}

export default Favoritos_component