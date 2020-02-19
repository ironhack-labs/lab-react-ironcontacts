import React, { Component } from "react";
import contacts from "./contacts.json";

class Contacts extends Component {
  state = {
    firstFive: [
      {
        name: "Idris Elba",
        pictureUrl:
          "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
        popularity: 11.622713,
        id: "11731993-0604-4bee-80d5-67ad845d0a38"
      },
      {
        name: "Jessica Chastain",
        pictureUrl:
          "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
        popularity: 8.324357,
        id: "17980511-75ca-48b0-bea8-462fec2ee43d"
      },
      {
        name: "Johnny Depp",
        pictureUrl:
          "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
        popularity: 15.656534,
        id: "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
      },
      {
        name: "Emilia Clarke",
        pictureUrl:
          "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
        popularity: 16.211837,
        id: "e14aa81d-b812-412d-bc4d-4a0d2c9c66f4"
      },
      {
        name: "Leonardo DiCaprio",
        pictureUrl:
          "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
        popularity: 11.245333,
        id: "b4d2c7b8-fdd5-426a-85bd-011c3f50a6c6"
      }
    ]
  };

  randomContact = () => {
    let index = Math.floor(Math.random() * contacts.length);
    let newContact = contacts[index];

    this.state.firstFive.forEach(contact => {
      if (contact.id === newContact.id) {
        let index = Math.floor(Math.random() * contacts.length);
        newContact = contacts[index];
      }
      return newContact;
    });

    this.setState({ firstFive: [...this.state.firstFive, newContact] });
  };

  sortName = () => {
    this.setState({
      firstFive: this.state.firstFive.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    });
  };

  sortPopularity = () => {
    this.setState({
      firstFive: this.state.firstFive.sort((a, b) => {
        return b.popularity - a.popularity;
      })
    });
  };

  delete = props => {
    // contact.id --> index within firstFive
    // splice(index, 1)
    // const filteredArr = this.state.firstFive.filter()
    let copiedState = [...this.state.firstFive];

    let index;

    copiedState.forEach(contact => {
      if (contact.id === props.target.id) {
        index = copiedState.indexOf(contact);
      }
      return index;
    });

    copiedState.splice(index, 1);

    this.setState({ firstFive: copiedState });
  };

  render() {
    return (
      <div>
        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.firstFive.map(contact => {
              return (
                <tr>
                  <td>
                    <img
                      className="contact-img"
                      src={contact.pictureUrl}
                      alt={contact.name}
                    ></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button id={contact.id} onClick={this.delete}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
