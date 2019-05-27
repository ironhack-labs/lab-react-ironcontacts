import React from 'react';

class Contacts extends React.Component {
  render() {
    console.log(this.props);
    const popularity = this.props.contact.popularity.toFixed(2);
    return (
      <tr className="contact-elem">
        <td><img src={this.props.contact.pictureUrl} alt={this.props.contact.name} height="100"/></td>
        <td>{this.props.contact.name}</td>
        <td>{popularity}</td>
      </tr>
    )
  }
}

export default Contacts