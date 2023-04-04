
    import "./roupas.css"

const Roupas_component = ({produtos, setProps}) => {

    

            console.log(produtos);
        if(produtos.length === 0  ){
            console.log('aqui');
            return
        }

          


                 


    return(

        <div style={{overflowY: 'scroll' , background:'blue', height:'100%', width: 400}}>


            {produtos.roupas.map( ({imagem, descricao, preco, id}) => { 

              
             return(

                 
                 <section className="sectionContainer">
                    
<div>
<img className="img" src={imagem} alt="" />    
</div>  

<div className="divDescription">
<div>
{descricao}
</div>
<div>
<span>
<span>
R$:
</span>
{preco}
</span>


</div>

<div> 
<button onClick={ () => { 
    
    setProps(id)
    
}} >adicionar favoritos</button>
</div>
</div>  
</section>
             )   
             })}
             
   
             
             
             </div>
             )
}

export default Roupas_component