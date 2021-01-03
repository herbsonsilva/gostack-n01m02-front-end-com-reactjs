import React, { useState } from 'react';

import './App.css';
import backgroundImage from '../assets/background.jpeg';

import Header from './Header';
import Menu from './Menu';

export default function App() {
  const [projects, setProjects] = useState(['Node.js', 'ReactJS']);

  function handleAddTech() {
    setProjects([...projects, `New project ${ Date.now() }`]);
  }

  return (
    <>
      <Header title="Meu Site" />
      <Menu />
      <ul>
        { projects.map(project => (
          <li key={project}>{ project }</li>
          )) }
      </ul>
      <button type="button" onClick={handleAddTech}>Adicionar projeto</button>
      <br/>
      <img src={ backgroundImage } alt="background" width={400} />
    </>
  );
}