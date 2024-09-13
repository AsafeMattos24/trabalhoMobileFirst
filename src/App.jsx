import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu'
import Exercicio5 from './Exercicio5'
import Card from './Card'
import img from './imgs/infnet.jpg'

function App() {
 

  return (
  <div>
    <Menu/>
   <Exercicio5/>
   <Card imagem = {img} titulo = "Instituto Infnet" descricao ="O Infnet é um instuto de tecnologia fundado em 1994. " rodape = "Rua São José, 90"/>
   </div>
  );
  
}

export default App
