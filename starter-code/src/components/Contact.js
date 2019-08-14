import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <tr>
                <td><img src={this.props.picture}></img></td>
                <td>{this.props.name} </td>
                <td>{this.props.popularity}</td>
                <td><button onClick={() => { this.props.buttonDelete(this.props.idx) }}>Eliminar</button></td>
            </tr>
        )
    }
}
export default Contact

// Primero se crea el elemento<table>.
// Posteriormente, creamos el elemento < tbody > , que es el hijo del elemento<table> .
// Después, utilizamos ciclos para crear los elementos < tr >, que son hijos del elemento<tbody>.
// Para cada elemento < tr >, utilizamos nuevamente ciclos para generar los elementos < td > que son hijos de los elementos<tr>.
// Para cada elemento < td >, creamos nodos de texto con el contenido de cada celda.


