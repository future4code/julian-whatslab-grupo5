import React from 'react';
import Display from './components/Display'
import styled from 'styled-components'
import Mensagem from './components/Mensagem'

const FullBody = styled.div `
display: flex;
flex-direction: column;
align-items: center;
border: black 2px solid;
width: 600px;
margin-left: 400px;
height: 99vh;
`

const ContainerDosInputs = styled.div ` 
margin-bottom: 0px;
`

const dadosDaMensagem = []
class App extends React.Component {
  state = {
    valorNome: "",
    valorMensagem: "",
    }  

onChangeValorNome = (event) => {
    this.setState({valorNome: event.target.value})
}

onChangeValorMensagem = (event) => {
    this.setState({valorMensagem: event.target.value})

}

enviarMensagem = () => {
  dadosDaMensagem.push(
  <Mensagem
    autor = {this.state.valorNome}
    mensagem = {this.state.valorMensagem}
      />)
      console.log(dadosDaMensagem)
}

  render () {

    return (
    <FullBody>
      <Mensagem
      />
        <ContainerDosInputs>
            <input
                placeholder={"Digite seu nome"}
                onChange={this.onChangeValorNome}
                value={this.state.valorNome}
            />

            <input
                placeholder={"Digite sua mensagem"}
                onChange={this.onChangeValorMensagem}
                value={this.state.valorMensagem}
            />

            <button onClick={this.enviarMensagem}>Enviar</button>
        </ContainerDosInputs> 
        </FullBody>
    )
  };
}
export default App;
