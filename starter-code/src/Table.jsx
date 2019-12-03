import React, { Component } from 'react';



class Table extends Component {
  constructor()
  render() {
    const contacts = this.props.contacts
    return (
<table className="Table">
<tr>
  <th>Picture</th>
  <th>Name</th>
  <th>Popularity</th>
</tr>
<tr>
  <td> <img src={contacts.pictureUrl} alt="photo"/></td>
  <td>{contacts.name}</td>
  <td>{}</td>
</tr>

</table>
     
    );
  }
}

export default Table;



