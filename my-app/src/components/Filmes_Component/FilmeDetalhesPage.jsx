import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FilmeDetalhesPage() {
  const { id } = useParams();
  const [produto, setProduto] = useState();

  useEffect(() => {
    const load = async () => {
      const result = await fetch(`https://dummyjson.com/products/${id}`);
      const p = await result.json();
      setProduto({
        id: p.id,
        nome: p.title,
        preco: p.price,
        imagem: p.thumbnail,
        avaliacao: p.rating,
        descricao: p.description,
        categoria: p.category,
        estoque: p.stock,
      });
    };

    load();
  }, [id]);

  // if (!produto) {
  //   return <div>CARREGANDO</div>;
  // }

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        background: "black",
      }}
    >
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
