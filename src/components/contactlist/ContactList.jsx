import React from 'react';
import ContactBox from '../contactbox/ContactBox';

class ContactList extends React.Component {
  state = {};

  render() {
    return (
      <div className="FoodList">
        <input
          type="text"
          className="input search-bar mb-2"
          name="search"
          placeholder="Search"
          onChange={this.handleChange}
          value={this.state.search}
        />

        <div className="columns">
          <div className="column">
            {this.props.contacts.map((contact, key) => (
              <ContactBox key={key} contact={contact} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactList;
