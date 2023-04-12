

const Filter_Component = ({favoritos, setProps}) => {


  
    

    return(

        <div style={{}}> 

            <div style={{display:'flex', alignItems:'center'}}>  
            <input 
            placeholder="Filtrar"
             type="number"
             name=""
             id=""
             
             onChange={ ({target}) => {

                let valorDigitado = target.value

                
                 setProps( favoritos.filter( ({preco}) =>  preco <= valorDigitado))

                    

             }}/>
              <img style={{width:'20px', height:'20px'}} src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-search-icon-image_1344447.jpg" alt="" /></div>

          
            
        </div>

    )
}
export default Filter_Component