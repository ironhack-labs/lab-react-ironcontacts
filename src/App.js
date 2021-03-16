import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

import React, { PureComponent } from "react";

export class Contacts extends PureComponent {
  state = {
    displayedContacts: contacts.slice(0, 5),
  };

  handleAddCeleb = () => {
   
    const contactCopy = [...contacts];

    let random = Math.floor(Math.random()*contactCopy.length);
    let celeb= contactCopy[random];

    // console.log(celeb)

    this.setState({displayedContacts: [celeb, ...this.state.displayedContacts]})
  }

  handleAlphOrder = () => {

    const listCopy = [...this.state.displayedContacts]
    
    let alph = listCopy.sort((a, b) => a.name.localeCompare(b.name))
    
    this.setState({displayedContacts: [...alph]})
  }


  handlePopOrder = () => {

    const listCopy = [...this.state.displayedContacts]
    
    let pop = listCopy.sort((a, b) => b.popularity - a.popularity)
    
    this.setState({displayedContacts: [...pop]})
  }


  render() {
    // console.log(contacts)
    return (
      <div>
        <button onClick={this.handleAddCeleb}>Add a random contact</button>
        <button onClick={this.handleAlphOrder}>Alphabetical order</button>
        <button onClick={this.handlePopOrder}>Popularity order</button>
        <table id="contacts">

          {/* <thead> */}
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          {/* </thead> */}
          {this.state.displayedContacts.map((contact) => (
            <tbody key={contact.id}>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt=""></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}



function App() {
  return (
    <div>
      
      <Contacts />
    </div>
  );
}

export default App;
