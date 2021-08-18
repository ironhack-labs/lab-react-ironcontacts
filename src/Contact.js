import React, { Component } from 'react';

class Contact extends React.Component {

    constructor() {
        super();
        this.deleteContact = this.deleteContact.bind(this);
      }
    

    deleteContact() {
        this.props.state.contactsArr.splice(this.props.contactObj, 1)
        this.props.parent.setState({contactsArr: this.props.state.contactsArr})
    }
    
    render() {
        return <div className="contact">
                <div><img className="contactImg" src={this.props.pictureUrl}></img></div>
                    <div className="property">{this.props.name}</div>
                    <div className="property">{this.props.popularity}</div>
                    <button className="deleteButton" onClick={this.deleteContact}>Delete Contact</button>
                </div>
    }
}

export default Contact;