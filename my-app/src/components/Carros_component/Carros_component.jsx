const Carros_component = () => {

  useEffect( () => {

    const load = async () => {
      const resultJson = await fetch("https://fakestoreapi.com/products");
    
      const resultProduct = await resultJson.json();
    
      console.log();
      //formatação da API FAKE
      let apiFormatada = resultProduct.map(({ id, title, price, image }) => ({
        id: id,
        nome: title,
        preco: price,
        imagem: image,
      }));
    
      setProdutos(apiFormatada);
    };
    
    load();
    },[] );

  return(
      <div>
          <div>
        
          </div>
      </div>
  )
}

export default Carros_component