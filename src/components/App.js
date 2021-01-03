import React from 'react';

import Header from './Header';
import Menu from './Menu';

export default function App() {
  return (
    <>
      <Header title="Meu Site">
        <ul>
          <li>Link</li>
        </ul>
      </Header>
      <Menu />
    </>
  );
}