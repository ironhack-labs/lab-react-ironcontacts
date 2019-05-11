import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    list: contacts.slice(0, 5)
  };

  getRandom = () => {
    const index = Math.floor(Math.random() * contacts.length);
    return contacts[index];
  };

  addToList = () => {
    this.setState({
      addToList: this.state.list.push(this.getRandom())
    });
  };

  sortByName = () => {
    let listByName = this.state.list.sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    this.setState({
      byName: listByName
    });
  };

  sortByPopularity = () => {
    let listByPopularity = this.state.list.sort((a, b) => {
      return a.popularity < b.popularity
        ? -1
        : a.popularity > b.popularity
        ? 1
        : 0;
    });
    this.setState({
      byPopularity: listByPopularity
    });
  };

  deleteContact = (item) => {
    const list = this.state.list;
    list.splice(item, 1);
    this.setState({ list });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>
        <button className="btn btn-random" onClick={this.addToList}>
          Add Random Contact
        </button>
        <button className="btn btn-name" onClick={this.sortByName}>
          Sort by Name
        </button>
        <button className="btn btn-popularity" onClick={this.sortByPopularity}>
          Sort by Popularity
        </button>
        <table className="table">
          <tbody>
            <tr className='tr-header'>
              <th>Name</th>
              <th>Picture</th>
              <th>Popularity</th>
              <th>Delete Item</th>
            </tr>
            {this.state.list.map((list, index) => {
              return (
                <tr className='tr-item' key={index}>
                  <td className="td-name">{list.name}</td>
                  <td>
                    <img
                      alt="contactImage"
                      className="td-img"
                      src={list.pictureUrl}
                    />
                  </td>
                  <td className="td-popularity">{list.popularity}</td>
                  <td className="td-delete">
                    <button
                      className="btn-delete"
                      onClick={() => this.deleteContact(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>{this.state.list[0].name}</p>
      </div>
    );
  }
}

export default App;
