import React, { Component } from "react";
import './contacts.css'
import FunctionButton from "../FunctionButton/FunctionButton";

export default class ContactsTable extends Component {

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
          {this.props.contacts.map((e, idx)=> {
            return <tr key={idx}>
              <td> <img className="img-table" src={e.pictureUrl} alt="You should be watching the contact"></img> </td>
              <td><p>{e.name}</p></td>
              <td>{e.popularity.toFixed(2)}</td>
              <td><FunctionButton functionProp={()=> this.props.deleteProp(e.name)}>Delete</FunctionButton></td>
            </tr>
          })}
        </tbody>
      </table>
    );
  }
}
