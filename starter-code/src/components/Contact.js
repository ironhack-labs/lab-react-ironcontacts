import React, { Component } from "react";
import contacts from "../contacts.json";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { contactArray: contacts };
  }

  render() {
    const { contactArray } = this.state;
    const { celebrityName } = this.props;

    return (
      <div>
        <section>
          {contactArray.map(oneContact => {
            if (oneContact.name === celebrityName)
              return (
                <div key={oneContact.name} className="celebrity">
                  <div>
                    <img src={oneContact.pictureUrl} />
                  </div>
                  <p>{oneContact.name}</p>
                  <p>{oneContact.popularity}</p>
                </div>
              );
            return;
          })}
        </section>
      </div>
    );
  }
}

export default Contact;
