import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './contacts.json';

export default class App extends React.Component {
  state = {
    firstContacts: Contacts.slice(0, 5),
  };
  //functions need to happen above render(), so you can just point to them there, but inside the class component, so you can point to them with "this."
  randomOnClick = () => {
    let randomNumber = Math.floor(Math.random() * Contacts.length + 1);
    //map is there because you should never mutate state!! you can change it Onclick, but never mutate, so when React loads DOM it comes back to first state. Map creates a copy of an array and that map I can mutate then with push and reasign state to the new copy of an array with pushed contact
    let copyArrayContacts = this.state.firstContacts.map((element) => element);
    let addedContact = copyArrayContacts.push(Contacts[randomNumber]);
    //  console.log will only work in function and not on class. Class takes ony functions and attributes, so new variables and console.logs HAVE to happen inside function
    console.log('new contact', copyArrayContacts);

    //I use copyArrayContacts because .push only added contact to THAT array
    this.setState({
      firstContacts: copyArrayContacts,
    });
  };

  sortByPopularity = () => {
    //.sort (a and b) compares one element in an array to another. This means that in array of objects it will comapare one object with another. that is why a.name works, as a is first object.popularity taps to value of popularity property.
    let sortedPopContacts = this.state.firstContacts.sort(
      (a, b) => b.popularity - a.popularity
    );
    this.setState({
      firstContacts: sortedPopContacts,
    });
  };

  sortByName = () => {
    //here sort (=>a.name -b.name) will not work as it will try to do mathematical calculation. That is why you need to write it manually, so .sort((a,b) =>  {if (a.name > b.name) {return 1  //put to the left of an array}  else {return -1 // put to the right of an array}} )
    let sortedPopContacts = this.state.firstContacts.sort((a, b) =>
      b.name > a.name ? 1 : -1
    );
    this.setState({
      firstContacts: sortedPopContacts,
    });
  };

  delete = (selected) => {
    // console.log(selected);
    // let removedArr = this.state.firstContacts.map((element) => element);
    // let removedContact = removedArr.splice(selected, 1);
    this.state.firstContacts.splice(selected, 1);
    this.setState({
      firstContacts: this.state.firstContacts,
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.randomOnClick}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.firstContacts.map((contact, selected) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img class="imgFirstIt" src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button onClick={() => this.delete(selected)}>
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

// class App extends () {
//   return (
//     <div className="App">
//       <table>
//         <thead>
//           <tr>
//             <th colspan="3">IronContacts</th>
//           </tr>
//           <tr>
//             <th>Picture</th>
//             <th>Name</th>
//             <th>Popularity</th>
//           </tr>
//         </thead>
//         <tbody>

//           <tr>
//             <td>Picture</td>
//             <td>Name</td>
//             <td>Popularity</td>
//           </tr>
//           <tr>
//             <td>1 col</td>
//             <td>2 col</td>
//             <td>3 col</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
