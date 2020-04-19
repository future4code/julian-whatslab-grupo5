import styled from 'styled-components';
import React from 'react';
import Mensagem from './Mensagem';

const ContainerDoDisplay = styled.div`
border: lightblue solid 3px;
display: flex;
flex-direction: column;
align-items: center;
width: 500px;
height: 90vh;
`

class Display extends React.Component {
    render () {
        return (
        <ContainerDoDisplay>
            <Mensagem
            />
        </ContainerDoDisplay>
        )
        }
}   

export default Display;