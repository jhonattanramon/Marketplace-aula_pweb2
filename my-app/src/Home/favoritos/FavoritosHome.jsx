import { useEffect, useState } from "react";
import { Link,json,useParams, useLocation  } from "react-router-dom";

const FavoritosHome = () => {




    const location = useLocation()

    const favoritos = location.state.fav




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
          background: "#282c34",
          height: "100%",
          flexWrap:"wrap"
        }}
      >
        <div
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
        
        </div>
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
        <div style={{backgroundColor:"#282c34", display: "flex", gap: 10, flexDirection:'row' }}>
          {filtrados.map(({ imagem, nome, descricao, preco, id }) => {
            return (
              <section
                style={{
                  background: "#282c34",
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
        >
        
       
        </div>
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

        <div style={{display: "flex", alignItems:'center', justifyContent:'center' }}>
          <div>
            <h1 style={{color: 'white'}}>FAVORITOS VAZIO...</h1>
          </div>
        </div>
      </section>
    );
  }
};

export default FavoritosHome;
