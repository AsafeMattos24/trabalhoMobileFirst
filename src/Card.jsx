import React from 'react';
import './Card.css'; // Importa o arquivo CSS

export default function Card({ imagem, titulo, descricao, rodape }) {
  return (
    <div className="card-container">
      <img src={imagem} alt={titulo} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{titulo}</h2>
        <p className="card-description">{descricao}</p>
        <div className="card-footer">{rodape}</div>
      </div>
    </div>
  );
}
