import React, { Component } from "react";
import contacts from "./contacts.json";
import Contact from "./Contact";


class Table extends Component {
  render() {
    const contactsArr = this.props.contacts.map((contact, index) =>{
      return <Contact picture={contact.pictureUrl} name={contact.name} popularity={contact.popularity} key={index}/>
    }
    )
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
           {contactsArr}
           </tbody>
        </table>
      </div>
    );
  }
}


export default Table;