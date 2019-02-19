import React, { Component } from "react";
import './ContacTable.css'
import FunctionButton from "../FunctionButton/FunctionButton";

class ContactTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contactsProp.map((e, idx) => {
            return <tr key ={idx}>
              <td><img className="img-table" src={e.pictureUrl}/></td>
              <td><h2>{e.name}</h2></td>
              <td><h4>{e.popularity.toFixed(2)}</h4></td>
              <tb><FunctionButton functionProp={() => this.props.deleteProp(e.name)}>Delete</FunctionButton></tb>
            </tr>
          })}
        </tbody>
      </table>
    );
  }
}

export default ContactTable;

//También puedes hacerlo de la siguiente manera export default class ContactTable extends React.Component

//Para escribir JS en un JSX y siempre que esté dentro del return hay que poner llaves {}

//toFixed()Le pasamos los números que queremos que muestre pero lo transforma a string