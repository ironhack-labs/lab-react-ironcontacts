import React, { Component } from 'react';
import contacts from '../contacts.json'

class CelebList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      
      list: contacts.slice(0, 5)

    }

  }

  displayTableRows = () => {

    // Return a row for every contact in current state
    return this.state.list.map((eachContact, index) => {

      return (

        <tr>

          <td> <img src={eachContact.pictureUrl} height="200px" alt="Celebrity" /> </td>
          <td> {eachContact.name} </td>
          <td> {eachContact.popularity} </td>

        </tr>

      )

    })

  }

  addRandomContact = () => {

    let randomIndex, randomContact;

    // Get length of list so we know how the random index can go
    // lengthOfList = this.state.list.length - 1;

    // A random number between the 5th in array and length of the list ex/ 5-20
    // This way we don't accidentally add any of the first 5 elements
    randomIndex = Math.floor(Math.random() * contacts.length);

    // Get a random contact from the data file (NOT OUR STATE)
    randomContact = contacts[randomIndex];

    // Make copy of state so we can manipulate it
    let updatedList = [...this.state.list];
    updatedList.push(randomContact);

    // Change the state of the list to updated list with random contact
    this.setState({ list: updatedList })
    console.log(this.state.list);

  }

  render() {

    return (

      <div>

        <h1> Iron Cart </h1>

        <table>

          <tbody>

            <tr>

              <td>

                <button onClick={() => { this.addRandomContact() }}>
                  Add Random Contact
                </button>

              </td>

            </tr>

            <tr>

              <td> Picture </td>
              <td> Name </td>
              <td> Popularity </td>

            </tr>

            {this.displayTableRows()}

          </tbody>


        </table>

      </div>

    );

  }

}

export default CelebList;

