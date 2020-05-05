import React, { Component } from "react";
import data from "../contacts.json";
import Contact from "./Contact.jsx";

const mutatedArray = [...data];

const faces = [
  "😀",
  "😃",
  "😅",
  "🤨",
  "😩",
  "🥺",
  "😑",
  "🥴",
  "🤕",
  "🤠",
  "🙀",
  "🖕",
  "👨‍🦱",
  "👨‍🦳",
  "👩‍🦲",
  "👮‍♂️",
  "👩‍🌾",
  "🐨",
  "🐴",
  "🌞",
  "⛄️",
];

mutatedArray.map((contact) => {
  contact.picture = randomFace();
});

const topFive = mutatedArray.splice(0, 5);

function getRandomContact() {
  const max = mutatedArray.length + 1;
  console.log(max);
  const item = Math.floor(Math.random() * max);
  console.log(item);
  return mutatedArray.splice(item, 1)[0];
}

function randomFace() {
  return faces[Math.floor(Math.random() * (faces.length + 1))];
}

let asc = true;

class Contacts extends Component {
  state = {
    contacts: topFive,
  };

  handleAddRandom = (e) => {
    this.state.contacts.push(getRandomContact());
    this.setState({ contacts: this.state.contacts });
  };

  // sortAlphabetically = (e) => {
  //   this.state.contact.sort();
  //   return
  // }

  handleSort = (sortType) => {
    console.log("Sort!");
    console.log(this.state.contacts);
    const sortedArray = this.state.contacts.sort((el1, el2) => {
      if (asc) {
        return el1[sortType] > el2[sortType] ? 1 : -1;
      } else {
        return el1[sortType] > el2[sortType] ? -1 : 1;
      }
    });
    asc = !asc;
    console.log(sortedArray);
    this.setState({ contacts: sortedArray });
  };

  handleRemove = (index) => {
    const trimmedList = this.state.contacts;
    trimmedList.splice(index, 1);
    this.setState({ contacts: trimmedList });
  };

  render() {
    let contacts = 2;
    return (
      <div className="Contacts">
        <div class="buttons">
          <button onClick={this.handleAddRandom}>Add Random</button>
          <button onClick={(event) => this.handleSort("name")}>
            Sort Name
          </button>
          <button onClick={(event) => this.handleSort("popularity")}>
            Sort Popularity
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {topFive.map((contact, index) => (
              <tr>
                <td>{contact.picture}</td>
                <td>
                  <p>{contact.name}</p>
                </td>
                <td>
                  <p>{Math.round(contact.popularity * 100) / 100}</p>
                </td>
                <td>
                  <button onClick={(event) => this.handleRemove(index)}>
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
