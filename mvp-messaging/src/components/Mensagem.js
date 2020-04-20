import React from "react";
import styled from "styled-components";

const ContainerMensagem = styled.div `
display: flex;
background-color: #F8B195;
height: 25px;
padding: 20px;
color: #6C5B7B;
`
const NomeAutor = styled.p `
font-weight: bold;
margin-right: 50px;
color: #6C5B7B;
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