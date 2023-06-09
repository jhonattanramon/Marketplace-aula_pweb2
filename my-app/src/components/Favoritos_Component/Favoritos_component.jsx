import { useEffect, useState } from "react";
import Filter_Component from "./Filter_component";
import { Link, json, useNavigate } from "react-router-dom";

const Favoritos_component = ({ favoritos }) => {
  const soma = favoritos
    .reduce(
      (accumulator, currentFavorito) => accumulator + currentFavorito.preco,
      0
    )
    .toFixed(2);

  const navigate = useNavigate();

  const toFavoritosHome = () => {
    console.log("navigation");
    navigate("/favoritoshome", { state: { fav: favoritos } });
  };

  const [valorDigitado, setValorDigitado] = useState("");

  const [filtrados, setFiltrados] = useState(favoritos);

  const filtrarMenoresValores = () => {
    if (valorDigitado !== "") {
      const valoresFiltrados = favoritos.filter(
        ({ preco }) => preco <= valorDigitado
      );
      setFiltrados(valoresFiltrados);
    } else {
      setFiltrados(favoritos);
    }
  };

  const DetalhesDoProduto = (produto) => {};

  useEffect(() => {
    filtrarMenoresValores();
  }, [favoritos]);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        background: "#282c34",
        height: "100%",
      }}
    >
      <div
        style={{
          color: "white",
          textDecoration: "none",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1> FAVORITOS</h1>
          <a
            onClick={() => {
              toFavoritosHome();
            }}
          >
            Ir para página favoritos
          </a>
        </div>
        <div
          style={{
            position: "absolute",
            left: "75%",
            top: "3%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <input
            placeholder="Filtrar"
            type="number"
            name=""
            id=""
            value={valorDigitado}
            onChange={({ target }) => setValorDigitado(target.value)}
            onBlur={filtrarMenoresValores}
          />
          <img
            style={{ width: "20px", height: "20px" }}
            src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-search-icon-image_1344447.jpg"
            alt=""
          />
        </div>

        <div
          style={{
            position: "absolute",
            left: "0%",
            textAlign: "center",
            position: "absolute",
            top: "3%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          SOMA: {soma}
        </div>

        <div style={{ position: "relative", left: "30%" }}></div>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        {filtrados.map(({ imagem, nome, descricao, preco, id }) => {
          return (
            <section
              style={{
                background: "white",
                fontSize: 14,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                color: "black",
                padding: 10,
                borderRadius: 7,
                maxWidth: 200,
              }}
              key={id}
            >
              <div style={{ width: 200, height: 200 }}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={imagem}
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
                <div>{nome}</div>
                <div>
                  <strong style={{ color: "green", fontSize: 12 }}>
                    <span> R$</span>
                    {preco}
                  </strong>
                </div>

                <div
                  style={{
                    margin: 10,
                  }}
                >
                  <Link
                    style={{
                      border: "none",
                      padding: 7,
                      margin: 10,
                      fontSize: 12,
                      textDecoration: "none",
                      backgroundColor: "#e2e8f0",
                      color: "black",
                    }}
                    to={`/favoritosDetalhesPage/${id}`}
                  >
                    Detalhes do Produto
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Favoritos_component;
