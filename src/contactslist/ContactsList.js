import React from "react";
import "./ContactsList.css";


class ContactsList extends React.Component {

  render() {
    return (
        <table>
            <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
            </tr>
            </thead>
            <tbody>
            {this.props.contactsArray.map((contact) => {
                return (
                    <tr>
                        <td><img src={contact.pictureUrl} alt="img"/></td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>


    );
  }
}



export default ContactsList;
