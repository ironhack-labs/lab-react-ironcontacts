import React from 'react';

class Contacts extends React.Component {
  render() {
    console.log(this.props);
    const popularity = this.props.contact.popularity.toFixed(2);
    return (
      //const {contact} = this.props.contact.name
      <ul className="contacts-header">
        <img src={this.props.contact.pictureUrl} alt={this.props.contact.name} height="100"/>
        <li>{this.props.contact.name}</li>
        <li>{popularity}</li>
      </ul>
    )
  }
}

export default Contacts