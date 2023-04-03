
    import "./roupas.css"

const Roupas_component = ({produtos, setProps}) => {

    

            console.log(produtos);
        if(produtos.length === 0  ){
            console.log('aqui');
            return
        }

        
        

        const BaseCard = () => {

            return(

                
                
            <section className="sectionContainer">

                <div>
                <img className="img" src={produtos.roupas[0].imagem} alt="" />    
                </div>  

                    <div className="divDescription">
                <div>
                    {produtos.roupas[0].nome}
                </div>
                <div>
                    <span>
                        <span>
                            R$:
                        </span>
                    {produtos.roupas[0].preco}
                    </span>
                    

                </div>

                <div> 
                <button onClick={ () => { 

                        setProps(produtos.roupas[0].id)
                    
                }} >adicionar favoritos</button>
                </div>
                    </div>  
            </section>
    )

    }


    return(
        <div style={{overflowY: 'scroll' , background:'blue', height:'100%', width: 400}}>

         


          <BaseCard /> 
          <BaseCard />
        
         

           
   

           
        </div>
    )
}

export default Roupas_component