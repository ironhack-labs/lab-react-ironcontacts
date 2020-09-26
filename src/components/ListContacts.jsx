import React from 'react';
import Contact from './Contact';

class ListContacts extends React.Component {
  state = {
    count: 5,
  };
  render() {
    return (
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contacts.map(
            (contact, index) =>
              index < this.state.count && (
                <Contact key={contact.id} contact={contact} />
              )
          )}
        </tbody>
      </table>
    );
  }
}

export default ListContacts;
