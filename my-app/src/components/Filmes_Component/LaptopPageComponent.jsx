import React, { useEffect, useState } from 'react';
import './filmes.css';
import { Link } from 'react-router-dom';

function LaptopPageComponent(props) {

  const [laptop, setLaptops] = useState([]);
  
  useEffect(() => {

    const load = async () => {
      const resultJson = await fetch("https://dummyjson.com/products/category/laptops");

      const fakeStoreaApi = await resultJson.json();

      const apiFomatada = [];

      fakeStoreaApi.products.map(({ id, title, price, thumbnail, rating, stock }) => {
        apiFomatada.push({
          id: id,
          nome: title,
          preco: price, 
          imagem: thumbnail,
          avaliacao: rating,
          estoque: stock,
        });
      });

      setLaptops(apiFomatada);
    };

    load();
  }, []);

  return(
  <div className="card">
      <Link to="/">Voltar para home</Link>
        {laptop.map((laptop) => {
          return (
            <section className="sectionContainer" key={laptop.id}>
              <div>
                <img className="img" src={laptop.imagem} />
              </div>

              <div className="divDescription">
                <div>{laptop.nome}</div>
                <div>{laptop.preco}</div>
                <div>{laptop.avaliacao}</div>
                <div>{laptop.estoque}</div>
              </div>
            </section>
          );
        })}
      </div>
  )
}

export default LaptopPageComponent