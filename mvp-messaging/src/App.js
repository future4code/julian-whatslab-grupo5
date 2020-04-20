import React from 'react';
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
const ContainerDasMensagens = styled.div `
width: 100%;
border: red 2px solid;

`
const ContainerDosInputs = styled.div ` 
margin-bottom: 0px;
`
const Display = styled.div` 
height: 94vh;
display: flex;
flex-direction: column-reverse;
width: 100%;

`
const MensagemFantasma = [
  {
    autor: "",
    mensagem: "",
  }
]
const dadosDaMensagem = MensagemFantasma.map(mensagem => {
  return (
    <Mensagem
    autor={mensagem.autor}
    mensagem = {mensagem.mensagem }
    />
  )
  }
)
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

EnviarMensagem = () => {
  dadosDaMensagem.push(
  <Mensagem
    autor = {this.state.valorNome}
    mensagem = {this.state.valorMensagem}
      />)
      console.log(dadosDaMensagem)
}

  render () {
    const mensagensNaTela = dadosDaMensagem.map(item => {
      return item;
    }
      )
    return (
    <FullBody>
      <Display>
      <ContainerDasMensagens>
        {mensagensNaTela}
      </ContainerDasMensagens>
      </Display>
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
            <button onClick={this.EnviarMensagem}>Enviar</button>
        </ContainerDosInputs> 
        </FullBody>
    )
  };
}
export default App;
