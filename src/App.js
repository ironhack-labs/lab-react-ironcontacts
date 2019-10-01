import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Header from "./Header";
import Contact from "./Contact";
import Table from "./Table";

const sortLookup = {
  name: (a, b) => a.name.localeCompare(b.name),
  popularity: (a, b) => b.popularity - a.popularity,
  "name-dsc": false,
  "popularity-dsc": false
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContacts: contacts.slice(0, 5),
      allContacts: contacts,
    };
  }

  createRow = () => {
    return this.state.activeContacts.map((contact, i) => (
      <Contact
        key={i}
        remove={() => this.deleteByID(i)}
        contact={contact}
      ></Contact>
    ));
  };

  deleteByID = contactIndex => {
    let contactsCopy = [...this.state.activeContacts];
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      activeContacts: contactsCopy
    });
  };

  // makeRow = () => {
  //   // let reducedList = contacts.slice(0, 5);
  //   let mappedList = this.state.activeContacts.map((each, i) => {
  //     return (
  //       <tr key={i}>
  //         <td className="big-p">
  //           <img
  //             src={each.pictureUrl}
  //             alt={each.name}
  //             className="headshot"
  //           ></img>
  //         </td>
  //         <td>
  //           <p className="big-p">{each.name}</p>
  //         </td>
  //         <td>
  //           <p className="big-p">{each.popularity.toFixed(2)}</p>
  //         </td>
  //         <td>
  //           <button onClick={this.delete}>Delete</button>
  //         </td>
  //       </tr>
  //     );
  //   });
  //   return mappedList;
  // };

  addRandom = () => {
    // console.log(contacts);
    let i = ~~(Math.random() * this.state.allContacts.length);
    let newContact = this.state.allContacts[i];
    let addedContacts = this.state.activeContacts;
    addedContacts.push(newContact);
    // let contactsCopy = [...contacts];
    // contactsCopy.splice(i, 1);
    this.setState({
      activeContacts: addedContacts,
      // allContacts: contactsCopy
    });
  };

  // nameSort = () => {
  //   let nameSortedContacts = this.state.activeContacts.sort((a, b) => {
  //     const x = a.name.toUpperCase();
  //     const y = b.name.toUpperCase();
  //     return x < y ? -1 : 1;
  //   });
  //   this.setState({
  //     activeContacts: nameSortedContacts
  //   });
  // };

  // popSort = () => {
  //   let popSortedContacts = this.state.activeContacts.sort(
  //     (a, b) => b.popularity - a.popularity
  //   );
  //   this.setState({
  //     activeContacts: popSortedContacts
  //   });
  // };

  sortContacts = sortMethod => {
    let descending = sortLookup[sortMethod + "-dsc"];
    let sorted = [...this.state.activeContacts].sort(sortLookup[sortMethod]);
    if (descending) sorted.reverse();
    sortLookup[sortMethod + "-dsc"] = !descending;

    this.setState({
      activeContacts: sorted
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Header
            add={() => this.addRandom()}
            nameSort={() => this.sortContacts("name")}
            popSort={() => this.sortContacts("popularity")}
          />
          <Table body={this.createRow()}></Table>
        </div>
      </div>
    );
  }
}

export default App;
