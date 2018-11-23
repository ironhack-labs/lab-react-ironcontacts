import React, { Component } from "react";
import Item from "./Item";
import ContactsJ from "../contacts.json";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contactRandom: {
        name: "Random",
        pictureUrl: "RandomImg",
        popularity: 0
      },
      listContacts: ContactsJ,
      data: [ContactsJ]
    };
  }
  handleClick = () => {
    var indexRandom = Math.floor(Math.random() * ContactsJ.length);
    this.setState({ contactRandom: ContactsJ[indexRandom] });
  };
  sortName = () => {
    var sortName = this.state.listContacts.sort();
    this.setState({ listContacts: sortName });
  };
  deleteItem = index => {
    let {data} = this.state;
    data = data.splice(index, 1);
    this.setState({data})
  };
  render() {
    return (
      <div>
        <tr>
          <th>
            <button onClick={this.handleClick}>Add Random contacts</button>
          </th>
          <th>
            <button onClick="">Sort by name</button>
          </th>
          <th>
            <button onClick="">Sort by popularity</button>
          </th>
        </tr>
        <table className="App">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.listContacts.map((item, index) => {
            if (index < 5) {
              return (
                <Item
                  key={index}
                  index={index}
                  item={item}
                  deleteItem={this.deleteItem}
                />
              );
            }
          })}
          <Item item={this.state.contactRandom} />
        </table>
      </div>
    );
  }
}
