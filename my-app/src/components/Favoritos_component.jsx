
const Favoritos_component = ({favoritos}) => {

        console.log(favoritos);

        
    return(
       
            <div style={{flex:1, display:'flex', gap: 10,  }}>

                {favoritos.map( ({imagem, nome,descricao, preco, id}) => {

                    return(

                        <section style={{
                         
                            background:'white',
                            width: 200,
                            height:250,
                            fontSize: 14,
                            display:'flex',
                            flexDirection: 'column',
                            alignItems:'center',
                            justifyContent:'space-around',
                            color: 'black'
                            }}>

                        <div style={{flex: 1,background:'red', width:'100%', height: 200}}>
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
      
    )
}

export default Favoritos_component