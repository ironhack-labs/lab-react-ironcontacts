import React, { Component } from "react";
import contacts from "../contacts.json";

export class Contacts extends Component {
  state = {
    firstFive: contacts.slice(0, 5)
  };

  addNew = () => {
    const random = Math.floor(Math.random() * 200);
    const randomOne = contacts.slice(random, random + 1);
    const currContact = [...this.state.firstFive, ...randomOne];
    this.setState({ firstFive: currContact });
  };
  sortByName = () => {
    const sortMap = [...this.state.firstFive];
    const sortedMap = sortMap.sort((a, b) => (a.name < b.name ? -1 : 1));
    this.setState({ firstFive: sortedMap });
  };
  sortByPop = () => {
    const sortMap = [...this.state.firstFive];
    const sortedMap = sortMap.sort((a, b) =>
      a.popularity > b.popularity ? -1 : 1
    );
    this.setState({ firstFive: sortedMap });
  };
  deleteCurr = e => {
    this.setState({
      firstFive: [
        ...this.state.firstFive.filter(
          contact => e.target.id != contact.popularity
        )
      ]
    });
  };

  render() {
    return (
      <main className='main'>
        <header className='sort'>
          {" "}
          <button className='btn' onClick={this.addNew}>
            Add Random
          </button>
          <button className='btn' onClick={this.sortByName}>
            Sort by name
          </button>
          <button className='btn' onClick={this.sortByPop}>
            Sort by popularity
          </button>
        </header>

        <table
          className='list'
          style={{ textAlign: "center", margin: " 1rem auto" }}
        >
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.firstFive.map((contact, i) => (
              <tr key={i}>
                <td>
                  <img
                    className='img'
                    src={contact.pictureUrl}
                    alt={contact.name}
                    style={{ height: "20%" }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button
                    className='btn'
                    id={contact.popularity}
                    onClick={this.deleteCurr}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default Contacts;
