import React, { Component } from "react";
import Image from './Image';

class ContactsTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table>
        <thead>
          <tr> 
            { this.props.keysArr.map((keys, idx) => <th key={idx}>{keys}</th> )} 
          </tr>
        </thead>
        <tbody>
          { this.props.fiveContacts.map((oneContact, idx) => {
            return (
              <tr>
                <td key={idx} name={oneContact.pictureUrl}>
                <Image picUrl={oneContact.pictureUrl} style={{width: "100px"}} />
                </td>
                <td key={idx} name={oneContact.name}>{oneContact.name}</td>
                <td key={idx} name={oneContact.popularity}>{oneContact.popularity}</td>
                <td key={idx} name={oneContact.id} hidden >{oneContact.id}</td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    )
  }
}

export default ContactsTable;
