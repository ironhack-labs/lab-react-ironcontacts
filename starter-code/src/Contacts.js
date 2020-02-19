import React from "react";
import contacts from "./contacts.json";

class Contacts extends React.Component {
  renderContactsData() {
    return this.props.contacts.map((contact, index) => {
      const { id, pictureUrl, name, popularity } = contact;
      return (
        <tr key={id}>
          <td>
            <img style={{ height: "100px" }} src={pictureUrl} alt={name} />
          </td>
          <td>{name}</td>
          <td>{popularity}</td>
          <td>
            <button
              onClick={() => {
                this.props.deleteContact(index);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table id="contacts">
          <tbody>{this.renderContactsData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
