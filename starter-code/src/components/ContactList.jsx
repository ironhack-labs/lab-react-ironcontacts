import React, { Component, Fragment } from 'react';
import contacts from '../contacts.json'
import ContactItem from './ContactItem.jsx';
import './ContactList.css';

export default class ContactList extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const contactBoxes = contacts.map(elem => {
      return <ContactItem className="row" contact={elem} key={elem.name} />
    });

    return (
      <Fragment>
        <div className="columns row">
          <div className="column"><h3 className="title">Picture</h3></div>
          <div className="column"><h3 className="title">Name</h3></div>
          <div className="column"><h3 className="title">Popularity</h3></div>
        </div>
        {contactBoxes}
      </Fragment>
    );
  }

}