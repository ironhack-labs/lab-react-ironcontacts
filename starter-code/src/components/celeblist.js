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
          <td>
            <button onClick={() => { this.deleteAContact(index) }}>
              Delete
           </button>
          </td>

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

  }

  sortByName = () => {

    // Make copy of the state
    let listToSort = [...this.state.list];

    // Create a function to sort the list
    function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }

    // Sort the list and update the state
    let sortedList = listToSort.sort(compare);
    this.setState({ list: sortedList })

  }

  sortByPopularity = () => {

    // Make copy of the state
    let listToSort = [...this.state.list];

    // Create a function to sort the list
    function compare(a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    }

    // Sort the list and update the state
    let sortedList = listToSort.sort(compare);
    this.setState({ list: sortedList })

  }

  deleteAContact = (indexOfContactToRemove) => {

    let newList = [...this.state.list];

    newList.splice(indexOfContactToRemove, 1);

    this.setState({ list: newList })

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

              <td>

                <button onClick={() => { this.sortByName() }}>
                  Sort By Name
                </button>

              </td>

              <td>

                <button onClick={() => { this.sortByPopularity() }}>
                  Sort By Popularity
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

