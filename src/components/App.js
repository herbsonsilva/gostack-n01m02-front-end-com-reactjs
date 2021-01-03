import React, { useState } from 'react';

import Header from './Header';
import Menu from './Menu';

export default function App() {
  const [techs, setTechs] = useState(['Node.js', 'ReactJS']);

  function handleAddTech() {
    setTechs([...techs, `New Trader ${ Date.now() }`]);
  }

  return (
    <>
      <Header title="Meu Site" />
      <Menu />
      <ul>
        { techs.map(tech => (
          <li key={tech}>{ tech }</li>
        )) }
      </ul>
      <button type="button" onClick={handleAddTech}>Adicionar tecnologia</button>
    </>
  );
}