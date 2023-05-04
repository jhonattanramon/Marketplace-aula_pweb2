import "./roupas.css";
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> fa66fc7d885d2725f11a4025acc45e1d680c1771
const Roupas_component = ({
  
  onAddFavoritos,
  onAddDenuncia,
  PropFavoritos,
}) => {

<<<<<<< HEAD
  // if (produtos.length === 0) {
  //   return;
  // }


=======
//  if (produtos.length === 0) {
//     return;
//   }
>>>>>>> fa66fc7d885d2725f11a4025acc45e1d680c1771
  const [contagem, setContagem] = useState(0)

  const [produtos, setProdutos] = useState([])

  const [ordem, setOrdem] = useState('preco')

  useEffect (() => {

   async function loading () {
    const responsive = await fetch('https://dummyjson.com/products/category/mens-shirts')

    const result = await responsive.json();   
    console.log(result.products)

    const selectionProduct = result.products.map(({title, thumbnail, price, stock, rating}) => (
      {
        nome: title,
        imagem: thumbnail,
        preco: price,
        estoque: stock,
        avaliacao: rating
      }
    ))

    setProdutos(selectionProduct)

<<<<<<< HEAD
  }
    loading()
  },[]);

=======
 

 
>>>>>>> fa66fc7d885d2725f11a4025acc45e1d680c1771

  useEffect (() =>{

     function loading (params) {

        console.log(produtos);
       const format = produtos.sort(function(a,b){
      
        console.log(a.preco);
        console.log(b.preco);        
        if(true){
          return -1
        }else{
         return 0
        }
          
        
    })

    console.log(format);
     
     
      
     } 
      loading()
  },[ordem])
  
  return (

    <> 
      <div className="title"> <h1>ROUPAS <label> {contagem}</label></h1> 
      <select name="select" onChange={(event) => {
        setOrdem(event.target.value)

      }}>
  <option value="valor1">Maior Preço</option>
  <option value="valor2" >Menor Preço</option>
  <option value="valor3">Mair estoque</option>
  <option value="valor4">Mais Avaliados</option>
</select>
      </div>

    <div className="card">

   


      {produtos.map(({ imagem, nome, descricao, preco, id }) => {
        return (
          <section className="sectionContainer" key={id}>
            <div>
              <img className="img" src={imagem} alt="" />
            </div>

            <div className="divDescription">
              <div>{nome} </div>
              <div>
                <span>
                  {" "}
                  <span> $: </span>
                  {preco}
                </span>
              </div>

              <div>
                <button
                  onClick={() => {
                    onAddFavoritos(produtos[Number(id) - 1]);
                    setContagem(contagem + 1)
                  }}
                >
                  Adicionar Favoritos
                </button>
                <button
                  onClick={() => {
                    onAddDenuncia(produtos[Number(id) - 1]);
                  }}
                  >
                  Denunciar
                </button>
              </div>
            </div>
          </section>
        );
      })}
    </div>
                  </>
  );
};

export default Roupas_component;
