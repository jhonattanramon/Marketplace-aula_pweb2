import { useEffect, useState } from "react";
import {
  Link,
  json,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./style.css";

const FavoritosHome = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const favoritos = location.state.fav;

  const soma = favoritos.reduce(
    (accumulator, currentFavorito) => accumulator + currentFavorito.preco,
    0
  );

  const [valorDigitado, setValorDigitado] = useState("");

  const [filtrados, setFiltrados] = useState(favoritos);

  console.log(filtrados.length);

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

  const toFavoritosDetalhes = (id) => {
    navigation(`/favoritosDetalhesPage/${id}`);
  };

  useEffect(() => {
    filtrarMenoresValores();
  }, [favoritos]);

  if (filtrados.length > 0) {
    return (
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          background: "#e2e8f0",
          height: "100%",
          flexWrap: "wrap",
          maxWidth: "100%",
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
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            {" "}
            <h1> FAVORITOS</h1>{" "}
          </div>
          <div
            style={{ position: "absolute", left: "80%", textAlign: "center" }}
          >
            {" "}
            SOMA: {soma}
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
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
              style={{ width: "20px", height: "20px", objectFit: "contain" }}
              src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-search-icon-image_1344447.jpg"
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#e2e8f0",
            display: "flex",
            gap: 10,
            flexDirection: "column",
          }}
        >
          {filtrados.map(({ imagem, nome, descricao, preco, id }) => {
            return (
              <section
                className="cardFavoritosHome"
                key={id}
                onClick={() => {
                  toFavoritosDetalhes(id);
                }}
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
                </div>
              </section>
            );
          })}
        </div>
      </section>
    );
  } else {
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
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            {" "}
            <h1> FAVORITOS</h1>{" "}
          </div>
          <div
            style={{ position: "absolute", left: "80%", textAlign: "center" }}
          >
            {" "}
            SOMA: {soma}
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
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
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1 style={{ color: "white" }}>FAVORITOS VAZIO...</h1>
          </div>
        </div>
      </section>
    );
  }
};

export default FavoritosHome;
