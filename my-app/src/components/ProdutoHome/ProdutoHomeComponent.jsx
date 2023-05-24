import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ProdutoHomeComponent() {

  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const loadProduto = async (produtoId) => {
      const resultJson = await fetch(`https://dummyjson.com/products/${produtoId}`);
      const resultProduct = await resultJson.json();
      setProduto({
          id: resultProduct.id,
          nome: resultProduct.title,
          preco: resultProduct.price,
          imagem: resultProduct.thumbnail,
          avaliacao: resultProduct.rating,
          estoque: resultProduct.stock
        }
      );
    }

    loadProduto(id);
  }, [id])

  return (
    <div> 

    {produto && <section className="sectionContainer" key={produto.id}>
        <div>
          <img
            className="img"
            src={produto.imagem}
            alt="logo das marcas"/>
        </div>
        <div className="divDescription">
          <h3>
            {produto.nome} <br />
          </h3>

          <div className="cardInfo">
            <h3>{produto.descricao}</h3>
            <h3>R${produto.preco}</h3>
            <h3>{produto.avaliacao}</h3>
            <h3>{produto.estoque}</h3>
          </div>
        </div>
      </section>
    }
      <div>
        <Link to="/" >Voltar</Link>
      </div>
    </div>
  )
}

export default ProdutoHomeComponent