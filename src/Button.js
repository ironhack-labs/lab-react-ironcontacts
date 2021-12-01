import React, { Component } from "react";


class Button extends Component {
    constructor() {
        super()

        //El estado INICIAL del componente
        this.state = {
            submitted: false,
            text: "Add Random Contact"
        }

    }

    // handleClick() {

    //     this.setState({ text: "Enviado correctamente", submitted: true })

    // }

    render() {

        return (
            <button style={{ backgroundColor: "white"}} onClick={() => this.handleClick()} className="btn btn-primary">{this.state.text}</button>
        )
    }
}

export default Button