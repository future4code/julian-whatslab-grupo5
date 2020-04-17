import React from "react";

export class CampoNome extends React.Component{
    constructor(props) {
        super(props)

this.state = {

    valorNome: "",
    valorMensagem: ""
    }  

}

onChangeValorNome = (event) => {
    this.setState({valorNome: event.target.value})
}

onChangeValorMensagem = (event) => {
    this.setState({valorMensagem: event.target.value})

}



render(){
    return (
        <div>
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

            
            <button onClick="" >Enviar</button>
        </div>

        
            

        
        

    )



}




}