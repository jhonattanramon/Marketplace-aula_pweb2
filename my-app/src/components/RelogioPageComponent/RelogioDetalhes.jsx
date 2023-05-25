import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RelogioDetalhes() {
  const { id } = useParams();
  const [produto, setProduto] = useState();

  useEffect(() => {
    const load = async () => {
      const resultado = await fetch(`https://dummyjson.com/products/${id}`);
      const produtos = await resultado.json();
      setProduto({
        id: produtos.id,
        nome: produtos.title,
        preco: produtos.price,
        imagem: produtos.thumbnail,
        avaliacao: produtos.rating,
        descricao: produtos.description,
        categoria: produtos.category,
        estoque: produtos.stock,
      });
    };

    load();
  }, [id]);

  // if (!produto) {
  //   return <div>CARREGANDO</div>;
  // }

  return (
    <div>
      {produto && (
        <section className="sectionContainer" key={produto.id}>
          <div>
            <img className="img" src={produto.imagem} />
          </div>

          <div className="divDescription">
            <div>{produto.nome}</div>
            <div>{produto.preco}</div>
            <div>{produto.avaliacao}</div>
            <div>{produto.estoque}</div>
          </div>
        </section>
      )}
    </div>
  );
}
