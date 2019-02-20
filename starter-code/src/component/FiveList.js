import React, { Component } from "react";
import contacts from "../contacts.json";
import "./FiveList.css";

const fiveArray = contacts.slice(0, 5);

class FiveList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactArray: fiveArray
    };
  }

  addContact() {
    const randomContact = Math.floor(Math.random() * contacts.length);

    const newArray = this.state.contactArray;
    newArray.push(contacts[randomContact]);

    this.setState({ contactArray: newArray });
  }

  sortByName() {
    const sortedNames = contacts.sort();

    const sortedList = this.state.contactArray;
    sortedList.push(sortedNames);

    this.setState({ contactArray: sortedList });
  }

  render() {
    const { contactArray } = this.state;

    return (
      <section className="FiveList">
        {/* <h2>Five List</h2> */}
        <div>
          <button onClick={() => this.addContact()}>Add Random Contact</button>
          <button onClick={() => this.sortByName()}>Sort By Name</button>
          <button onClick={() => this.sortByPopularity()}>
            Sort By Popularity
          </button>
        </div>

        {contactArray.map(oneContact => {
          return (
            <div key={oneContact.name} className="contact">
              <table>
                {/* <tr>
                  <th>
                    <h2>Picture</h2>
                  </th>
                  <th>
                    <h2>Name</h2>
                  </th>
                  <th>
                    <h2>Popularity</h2>
                  </th>
                </tr> */}
                <tr>
                  <td>
                    <img className="img" src={oneContact.pictureUrl} />
                  </td>
                  <td>
                    <p>{oneContact.name}</p>
                  </td>
                  <td>
                    <p>{oneContact.popularity}</p>
                  </td>
                </tr>
              </table>
            </div>
          );
        })}
      </section>
    );
  }
}

export default FiveList;
