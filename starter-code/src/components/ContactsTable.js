import React, { Component } from "react";
import Image from './Image';
import TableHead from './TableHead';
import TableBody from './TableBody';

class ContactsTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table>
        <TableHead keysArr={this.props.keysArr} />
        <TableBody actorsContacts={this.props.actorsContacts} clickToDelete={this.props.clickToDelete} />
      </table>
    )
  }
}

export default ContactsTable;
