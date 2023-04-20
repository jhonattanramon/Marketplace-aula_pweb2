import { useEffect, useState } from "react";


const Denuncia_component = ({ denunciados }) => {

  const [filtrados, setFiltrados] = useState(denunciados);


  useEffect(() => {
    
  }, [denunciados]);

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
        <div style={{ textAlign: "center" }}> <h1>DENUNCIAS</h1> </div>

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
              }}
              key={id}
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
                <div>{nome}</div>1
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

export default Denuncia_component;
