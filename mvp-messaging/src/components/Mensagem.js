import React from "react";
import styled from "styled-components";

const ContainerMensagem = styled.div `
display: flex;
background-color: lightblue;
height: 30px;
`
const NomeAutor = styled.p `
font-weight: bold;
margin-right: 50px;
`

export class Mensagem extends React.Component{


render(){
    return (
        <ContainerMensagem>
            <NomeAutor>{this.props.autor}</NomeAutor>
            <p>{this.props.mensagem}</p>
        </ContainerMensagem>
    )

}
}

export default Mensagem;