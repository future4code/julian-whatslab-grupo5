import styled from 'styled-components';
import React from 'react';

const ContainerDoDisplay = styled.div`
border: black solid 3px;
display: flex;
flex-direction: column;
align-items: center;
width: 500px;
height: 100vh;
`

class Display extends React.Component {
    render () {
        return (
        <ContainerDoDisplay>
        
        </ContainerDoDisplay>
        )
        }
}   

export default Display;