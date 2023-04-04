
    import "./roupas.css"

const Roupas_component = ({produtos, setProps}) => {

    

            console.log(produtos);
        if(produtos.length === 0  ){
            console.log('aqui');
            return
        }

    
    
         const RenderCard = (index) =>{

            let i = index
            console.log(i);
                return(
                    <section className="sectionContainer">
                    
                    <div>
                    <img className="img" src={produtos.roupas[i].imagem} alt="" />    
                </div>  
                
                <div className="divDescription">
                <div>
                    {produtos.roupas[i].nome}
                    </div>
                    <div>
                    <span>
                    <span>
                    R$:
                    </span>
                    {produtos.roupas[i].preco}
                    </span>
                    
                    
                    </div>
                    
                    <div> 
                    <button onClick={ () => { 
                        
                        setProps(produtos.roupas[i].id)
                        
                    }} >adicionar favoritos</button>
                    </div>
                    </div>  
                    </section>
                )
            }

            let arrayDeComponent = []


            for (let i = 0; i < produtos.roupas.length; i++) {
                
                arrayDeComponent.push(<RenderCard index={i} />)
            }
        
            console.log(arrayDeComponent);
                 


    return(

        <div style={{overflowY: 'scroll' , background:'blue', height:'100%', width: 400}}>

         
            {arrayDeComponent.map( (i) => i )}
           
   

           
        </div>
    )
}

export default Roupas_component