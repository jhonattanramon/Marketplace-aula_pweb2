import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const FavoritosDetalhesPage = () => {
  const { id } = useParams();

  const [produto, setProduto] = useState();

  console.log(produto);

  useEffect(() => {
    const load = async () => {
      const produtoGet = await (
        await fetch(`https://dummyjson.com/products/${id}`)
      ).json();

      console.log(produtoGet);
      setProduto({
        id: produtoGet.id,
        nome: produtoGet.title,
        descricao: produtoGet.description,
        preco: produtoGet.price,
        avaliacao: produtoGet.rating,
        imagem: produtoGet.thumbnail,
        estoque: produtoGet.stock,
        descontoEmPorcentagem: produtoGet.discountPercentage,
      });
    };
    load();
  }, []);

  if (!produto) {
    return;
  }

  return (
    <div>
      <div>
        <h1>Detalhes do Produto</h1>
      </div>

      <section className="containerDetalhesFavortios" key={id}>
        <div style={{ width: 200, height: 200 }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={produto.imagem}
            alt=""
          />
        </div>

        <div
          style={{
            width: "100%",
            flex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "70%",
            textAlign: "center",
          }}
        >
          <div>{produto.nome}</div>
          <div>
            <strong style={{ color: "green", fontSize: 12 }}>
              <span> R$</span>
              {produto.preco}
            </strong>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FavoritosDetalhesPage;
