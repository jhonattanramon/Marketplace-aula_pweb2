import React, { useState } from 'react';

const Filter_Component = ({ favoritos, setProps }) => {
  const [valorDigitado, setValorDigitado] = useState(' ');

  const filtrarMenoresValores = () => {
    if (valorDigitado === '') {
        setProps(favoritos);
      } else {
    const valoresFiltrados = favoritos.filter(({ preco }) => preco <= valorDigitado);
    setProps(valoresFiltrados);
      }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
          style={{ width: '20px', height: '20px' }}
          src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-search-icon-image_1344447.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Filter_Component;