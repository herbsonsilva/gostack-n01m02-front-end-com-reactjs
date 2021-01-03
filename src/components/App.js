import React, { useState, useEffect } from 'react';
import api from '../services/api';

import './App.css';

import Header from './Header';
import Menu from './Menu';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      console.log(response);
    });
  }, []);

  function handleAddTech() {
    setProjects([...projects, `New project ${ Date.now() }`]);
  }

  return (
    <>
      <Header title="Meu Site" />
      <Menu />
      <ul>
        { projects.map(project => (
          <li key={ project.id }>{ project.title }</li>
          )) }
      </ul>
      <button type="button" onClick={handleAddTech}>Adicionar projeto</button>
    </>
  );
}