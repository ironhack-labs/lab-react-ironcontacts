import React from 'react'

class Contact extends React.Component {

  render() {
    const {contacts} = this.props
    return (
      <div className="Contact">
        <div className="contact-item">
          <img src={contacts.pictureUrl} className="contact-image"/>
          <div className="contact-item-name">{contacts.name}</div>
          <div className="contact-item-name">{contacts.popularity}</div>
        </div>
      </div>
    );
  }
}

export default Contact