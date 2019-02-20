import React from "react";
import './ContactTable.css'
import FunctionButton from "../FunctionButton/FunctionButton";

export default class ContactTable extends React.Component {
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
            return <tr key={idx}>
              <td><img className="img-table" src={e.pictureUrl}/></td>
              <td><h2>{e.name}</h2></td>
              <td><h3>{e.popularity.toFixed(2)}</h3></td>
              <td><FunctionButton functionProp={() => this.props.deleteProp(e.name)}>Delete</FunctionButton></td>
            </tr>
          })}
        </tbody>
      </table>
    );
  }
}

// en jsx dentro del return del render si quiero usar js va en {}
// toFixed() convierte números en strings
