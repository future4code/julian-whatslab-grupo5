import React from 'react';
import Display from './components/Display'
import './App.css';
import styled from 'styled-components'
import { CampoNome } from "./components/CampoDeEnvio";

function App() {

valorAutor = (valorDoCampo) => {

}


  return (
    <div className="App">
      <Display
      autor= ""
      mensagem = ""
        />

        <CampoNome
        autor = {this.valorAutor}
        mensagem = ""
        />
        </div>
  );
  }
export default App;
