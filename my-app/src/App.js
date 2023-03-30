import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Jhon_componets from './components/jhon_componet';

function App() {
  const [produtos, setProdutos] = useState([]);

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
   const load = async () => {
    const result = await fetch('https://fakestoreapi.com/products');
    const resultProdutos = await result.json();
    setProdutos(resultProdutos);
   }
   load();
  },[]);

  
  return (
    <div className="App">
        <Jhon_componets produtos={produtos} />
    </div>
  );
}

export default App;