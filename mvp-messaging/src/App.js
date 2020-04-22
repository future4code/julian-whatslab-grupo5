import React from 'react';
import styled from 'styled-components'
import Mensagem from './components/Mensagem'


//Código de estilo

const FullBody = styled.div `
display: flex;
flex-direction: column;
border: #6C5B7B 2px solid;
width: 600px;
margin: auto;
height: 99vh;
justify-content: flex-end;
gap: 5px;
background-color: #355C7D;
`
const ContainerDasMensagens = styled.div `
width: 100%;
`
const ContainerDosInputs = styled.div ` 
margin-bottom: 0px;
margin-top: 10px;
`
const Display = styled.div` 
height: 94vh;
display: flex;
flex-direction: column-reverse;
width: 100%;
margin-bottom: 10px;
`

const InputDoAutor = styled.input`
border: 2px solid grey;
width: 100px;
height: 20px;

`

const InputDaMensagem = styled.input` 
border: 2px solid grey;
width: 400px;
height: 20px;
margin-left: 10px;
`

const BotaoEnviar = styled.button`
background-color: #C06C84;
border: none;
padding: 7px;
margin-left: 30px;
color: white;
border-radius: 10px;
`

//Elementos de Funcionalidade

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

      this.setState({valorMensagem: ""})
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
            <InputDoAutor
                placeholder={"Digite seu nome"}
                onChange={this.onChangeValorNome}
                value={this.state.valorNome}
            />
            <InputDaMensagem
                placeholder={"Digite sua mensagem"}
                onChange={this.onChangeValorMensagem}
                value={this.state.valorMensagem}
            />
            <BotaoEnviar onClick={this.EnviarMensagem}>Enviar</BotaoEnviar>
        </ContainerDosInputs> 
        </FullBody>
    )
  };
}
export default App;
