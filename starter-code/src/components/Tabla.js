import React, { Component } from 'react'



export default class Tabla extends Component {
    //  
    render() {
        return (
            <tr className="fila">
            
                <td> {<img className="actor" src ={this.props.image} alt={this.props.name}/>}</td>
                <td> {this.props.name}</td>
                <td> {this.props.popularity}</td>
                <td><button className="btnDelete" onClick = { () => {this.props.deleteActor(this.props.idx)}} >Delete</button></td>
        
            </tr>
        )
    }
}
