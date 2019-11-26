import React, { Component } from "react";
//import components
import Element from "./Element";
// import Button from "./Button";
//Import Data
import contacts from "./contacts.json";

export default class Table extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  findRandomElmt() {
    const element = contacts.slice(5)[
      Math.floor(Math.random() * contacts.length)
    ];
    return element;
  }

  addRandomContact = evt => {
    const copy = [...this.state.contacts];
    console.log(copy);
    copy.push(this.findRandomElmt());
    this.setState({ contacts: copy });
  };
  sortByName = evt => {
    var copy = [...this.state.contacts];
    console.log(copy.name);
    copy.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (b.name > a.name) {
        return 1;
      }
      return 0;
    });
    this.setState({ contacts: copy });
  };
  sortByPopularity = evt => {
    var copy = [...this.state.contacts];
    copy.sort((a, b) => b.popularity - a.popularity);
    console.log(copy, "copied");
    this.setState({ contacts: copy });
  };
  deleteElement = index => {
    var copy = [...this.state.contacts];
    copy.splice(index, 1);
    this.setState({ contacts: copy });
  };
  render() {
    return (
      <>
        <section>
          <button onClick={this.addRandomContact}>Add random contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </section>
        <table id="Table">
          <thead>
            <tr id="title">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((e, i) => (
              <Element
                key={i}
                index={i}
                picture={e.pictureUrl}
                name={e.name}
                popularity={e.popularity.toFixed(2)}
                clbk={this.deleteElement}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

// import React from "react";

// export default function Table() {
//   return (
//     <table id="Table">
//       <thead>
//         <tr id="title">
//           <th>Picture</th>
//           <th>Name</th>
//           <th>Popularity</th>
//         </tr>
//       </thead>
//       <tbody>
//         {contacts.map(e => (
//           <Element
//             picture={e.pictureUrl}
//             name={e.name}
//             popularity={e.popularity}
//           />
//         ))}
//       </tbody>
//     </table>
//   );
// }
