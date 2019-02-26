import React from "react";
import contacts from "../contacts.json";
import "../TabContacts.css";

const fiveCeleb = contacts.slice(0, 5);

class TabContacts extends React.Component {
  constructor() {
    super();
    this.state = { celebrities: fiveCeleb };
  }

  addContact = () => {
    const randomIndex = Math.round(Math.random() * contacts.length);
    const newContact = contacts[randomIndex];

    const contactsCopy = [...this.state.celebrities];
    contactsCopy.push(newContact);
    this.setState({ celebrities: contactsCopy });
  };

  sortByName = () => {
    const contactsCopy = [...this.state.celebrities];
    contactsCopy.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name === b.name) return 0;
      else return 1;
    });
    this.setState({ celebrities: contactsCopy });
  };

  sortByPopularity = () => {
    const contactsCopy = [...this.state.celebrities];
    contactsCopy.sort((a, b) => {
      if (a.popularity < b.popularity) return -1;
      else if (a.popularity === b.popularity) return 0;
      else return 1;
    });
    this.setState({ celebrities: contactsCopy });
  };

  deleteContact = (index) => {
    const contactsCopy = [...this.state.celebrities];
    contactsCopy.splice(index, 1);
    this.setState({ celebrities: contactsCopy });
  };

  render() {
    return (
        <div className="container">
      <div className="Tab">
        <button className="choice" onClick={this.addContact}> Add New Random Contacts </button>
        <button className="choice" onClick={this.sortByName}> sortByName </button>
        <button className="choice" onClick={this.sortByPopularity}> sortByPopularity </button>

        <table>
          <thead className="Tab-head">
            <tr>
              <th>PICTURE</th>
              <th>NAME</th>
              <th>POPULARITY</th>
            </tr>
          </thead>
          <tbody className="Tab-body">
            {this.state.celebrities.map((oneCeleb, index) => (
              <tr>
                <td>
                  <img
                    src={oneCeleb.pictureUrl}
                    alt={oneCeleb.name}
                    width="60px"
                    height="60px"
                  />
                </td>
                <td>{oneCeleb.name}</td>
                <td>{oneCeleb.popularity.toFixed(2)}</td>
                <button className="delete" onClick = {()=> this.deleteContact(index)}> Delete </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default TabContacts;
