import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

//console.log(contacts)

class App extends Component {
  state = {
    Celebrities: contacts.splice(0, 5)
  }

  addRandomContact = () => {
    let randomContact = Math.floor(Math.random() * contacts.length);
    let addContact = this.state.Celebrities;
    if(contacts.indexOf(randomContact) === -1){
      addContact.push(contacts[randomContact]);
    }

    this.setState({
      Celebrities: addContact
    })

    console.log(typeof addContact)

    return addContact
  }

  sortContactbyName = () => {
    let sorted = this.state.Celebrities
    sorted.sort((a, b) => {
      if (b.name > a.name) {
        return -1;
      }
      if (b.name < a.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      Celebrities: sorted
    })
  }

  sortContactbByPopularity = () => {
    let sortedByPop = this.state.Celebrities
    sortedByPop.sort((a, b) => b.popularity - a.popularity);

    this.setState({
      Celebrities: sortedByPop
    })
  }


  deleteContact = (index) => {
    console.log(index)
    let delCeleb= [...this.state.Celebrities]
    delCeleb.splice(index,1)


    this.setState({
      Celebrities: delCeleb
    })

  }

  render() {
    return (

      <div>
        <h1>Iron contacts</h1>
        {this.state.Celebrities.map((contacts, index)=> {
          return (
            <div key={contacts.id}>

              <table width='400px'>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
                <tr>
                  <td><img height='90px' src={contacts.pictureUrl} alt='' /></td>
                  <td><h3>{contacts.name}</h3></td>
                  <td><h3>{contacts.popularity}</h3></td>
                </tr>
                <button key={contacts.id} onClick={()=> this.deleteContact(index)}>Delete</button>
              </table>
            </div>
          );
        })}
        <button onClick={this.addRandomContact}> Add Random Contact</button>
        <button onClick={this.sortContactbyName}> Sort by Name</button>
        <button onClick={this.sortContactbByPopularity}> Sort by Popularity</button>

      </div>
    );
  }
}

export default App;
