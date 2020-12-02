import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

export default class App extends Component {
  state = {
    contactList: contacts.slice(0, 5),
  };
  // state = {
  //   counter: 0,
  //   picture: this.props.imgs[0],
  // };
  // nextPicture = () => {
  //   if (this.state.counter > 3) {
  //     this.setState({
  //       counter: this.state.counter - 4,
  //     });
  //   }
  //   this.setState({
  //     counter: this.state.counter + 1,
  //     picture: this.props.imgs[this.state.counter],
  //   });
  // };
  render() {
    console.log(this.state.contactList);
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactList.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} height="120" alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
