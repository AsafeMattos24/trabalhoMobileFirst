import React, { useState } from 'react';
import './Menu.css'; 

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-logo">
        <span>Logo</span>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>
      <ul className={`menu-items ${isOpen ? 'show' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#products">Produtos</a></li>
        <li><a href="#about">Sobre nós</a></li>
        <li><a href="#contact">Contatos</a></li>
      </ul>
    </nav>
  );
};


