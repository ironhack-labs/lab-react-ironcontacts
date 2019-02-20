import React from "react";
import "./ContactTable.css";
import FunctionButton from "../FunctionButton/FunctionButton";

export default class ContactTable extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contactsProp.map((contact, index) => {
            return (
              <tr key={index}>
                <td>
                  <img className="imgTable" src={contact.pictureUrl} />
                </td>
                <td>
                  <p>{contact.name}</p>
                </td>
                <td>
                  <p>{contact.popularity.toFixed(2)}</p>
                </td>
                <td>
                  <FunctionButton
                    functionProp={() => this.props.deleteProp(contact.name)}
                  >
                    Delete
                  </FunctionButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
