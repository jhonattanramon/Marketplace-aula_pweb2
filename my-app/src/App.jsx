import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';

//component

import Filmes_component from './components/Filmes_component';
import Jogos_component from './components/Jogos_Component';
import Roupas_component from './components/Roupas_component';
import Sapatos_component from './components/Sapatos_component';
import Favoritos_component from './components/Favoritos_component';


function App() {

  const [produtos, setProdutos] = useState([]);
 


  const [favoritos, setFavoritos] = useState([]);

  console.log(favoritos);

  useEffect(() => {
   const load = async () => {

    const roupas = await (await fetch('https://6426bdd3556bad2a5b56d684.mockapi.io/Roupas')).json();
    const filmes = await (await fetch('https://6426bdd3556bad2a5b56d684.mockapi.io/Filmes')).json();
    const jogos = await (await fetch('https://6426c45cd24d7e0de477b3dd.mockapi.io/jogos')).json()
    const sapatos = await (await fetch('https://6426c45cd24d7e0de477b3dd.mockapi.io/sapatos')).json()
    
   
    const ObjProdutos = {
      roupas: roupas,
      filmes: filmes,
      jogos: jogos,
      sapatos: sapatos 
    }
   
    setProdutos(ObjProdutos);
   
   }
   load();
  },[]);

 

  
  return (
    <div className="App">

      <div className='box2'>
        <Favoritos_component favoritos={favoritos} />
      </div>

      <div className='box2'>
    <Filmes_component produtos={produtos}/>
      </div>

    <div className="box-container">

      <div className='box'>
      <Jogos_component produtos={produtos}/>
      </div>

      <div className='box'>
      <Roupas_component produtos={produtos} setProps={setFavoritos} PropFavoritos={favoritos}/>
      </div>
    </div>

    <div className='box2'>
    <Sapatos_component produtos={produtos}  />
    </div>

   
</div>
  );
}

export default App;