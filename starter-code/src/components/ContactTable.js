import React, { Component } from "react";
import Contact from "./Contact";

class ContactTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [this.props.contacts]
    };
  }

  render() {
    const contactsList = this.state.contacts.map((contact, i) => (
       <Contact key={i} {...contact} />
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contacts.length > 0 ? contactsList : "No items"}
        </tbody>
      </table>
    );
  }
}

export default ContactTable;
