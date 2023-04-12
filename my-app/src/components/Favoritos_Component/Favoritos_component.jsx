 
 import { useState } from "react";
import Filter_Component from "./Filter_component";

const Favoritos_component = ({favoritos, setProps}) => {

       


        const [filter, setFilter] = useState()

        
    return(
        <section style={{display:'flex', flexDirection:'column', flex:1, background:'red', height:'100%'}}> 
            <div style={{ }}>

                    <span style={{display:'block', textAlign:'center'}}>FAVORITOS </span>
                    <span style={{position:'relative', left:'75%'}}> 
                        <Filter_Component favoritos={favoritos} setProps = {setProps}/>
                    </span> 
        
                 
            </div>


            <div style={{display:'flex', gap:10}}>




                {favoritos.map( ({imagem, nome,descricao, preco, id}) => {
                    
                    return(
                        
                        
                        <section style={{
                         
                            background:'white',
                            fontSize: 14,
                            display:'flex',
                            flexDirection: 'column',
                            alignItems:'center',
                            justifyContent:'space-around',
                            color: 'black',
                            padding:10
                            
                            
                        }}>

                              

                        <div style={{ width:200, height: 200}}>
                            <img style={{ width: '100%', height:'100%' }} src={imagem} alt="" />
                        </div>
            
                        <div style={{
                            width: '100%',
                            flex:2,
                            display:"flex",
                            flexDirection:'column',
                            alignItems:'center',
                            justifyContent:'center',
                            fontSize: '70%',
                            textAlign: "center"
                        }}> 
                        
                        
                        <div>{nome}</div>

                        <div> 
                            <strong style={{color: 'green', fontSize: 12}}>
                                <span> R$</span>{preco}
                             </strong>
                            
                        </div>
                        </div>


                        
                        </section>

                        
                    )

                })}

                

                
            </div>


           

          
      
            </section>
    )
}

export default Favoritos_component