import React, { Component } from 'react';


class Contactos extends Component {

  render() {
    return (
      
  <tr>
    <td><img src={this.props.image} width="100" /></td>
    <td>{this.props.name}</td> 
    <td>{this.props.popularity}</td>
   <td><button onClick={this.props.borrar} >Borrar</button></td>
  </tr>
      
    );
  }
}

export default Contactos;