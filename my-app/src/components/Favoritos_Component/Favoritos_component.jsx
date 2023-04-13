import { useState } from "react";
import Filter_Component from "./Filter_component";

const Favoritos_component = ({ favoritos, setProps }) => {
  const soma = favoritos.reduce(
    (accumulator, currentFavorito) => accumulator + currentFavorito.preco,
    0
  );

  const [filter, setFilter] = useState();

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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>FAVORITOS </div>
        <div style={{ textAlign: "center" }}> -SOMA: {soma}</div>
        <div style={{ position: "relative", left: "30%" }}>
          <Filter_Component favoritos={favoritos} setProps={setProps} />
        </div>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        {favoritos.map(({ imagem, nome, descricao, preco, id }) => {
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
              }}
            >
              <div style={{ width: 200, height: 200 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
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
};

export default Favoritos_component;
