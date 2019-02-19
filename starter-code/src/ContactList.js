import React, { Component } from "react";

import "./ContactList.css";

class ContactList extends Component {
  // use constructor() only when you need a state
  constructor(props) {
    super(props);

    // initial state of our component
    this.state = {
      contactArray: [
        {
          name: "Idris Elba",
          pictureUrl:
            "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
          popularity: 11.622713
        },
        {
          name: "Jessica Chastain",
          pictureUrl:
            "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
          popularity: 8.324357
        },
        {
          name: "Johnny Depp",
          pictureUrl:
            "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
          popularity: 15.656534
        },
        {
          name: "Emilia Clarke",
          pictureUrl:
            "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
          popularity: 16.211837
        },
        {
          name: "Leonardo DiCaprio",
          pictureUrl:
            "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
          popularity: 11.245333
        }
      ]
    };
  }

  render() {
    const { contactArray } = this.state;

    return (
      <div className="ContactList">
        {contactArray.map(oneContact => {
          return (
            <table key={oneContact} className="List">
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
              <tr>
                <td>
                  <img src={oneContact.pictureUrl} />
                </td>
                <td>{oneContact.name}</td>
                <td>{oneContact.popularity}</td>
              </tr>
            </table>
          );
        })}
      </div>
    );
  }
}

export default ContactList;
