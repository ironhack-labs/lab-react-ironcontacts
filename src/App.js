import React, { Component } from 'react';
import contacts from './contacts.json';
import ContactRow from './components/contact/Contact';
import AddContact from './components/addcontact/AddContact';
import SortByName from './components/sortbyname/SortByName';
import SortByPopularity from './components/sortbypopularity/SortByPopularity';

class App extends Component {
  state = {
    //Avec le spread "..." nous sortons un nouvel array avec les 5 premiers
    contactsList5: [...contacts].slice(0, 5),
  };

  //START ITERACION 2
  addRandom = () => {
    //la variable newContact nous permettra de sortir un contact au hasard de l'array contacts grâce au Math.floor
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];

    //Ensuite on redéfini l'état contactsList5 en lui ajoutant le nouveau contact
    this.setState({
      contactsList5: [...this.state.contactsList5, newContact],
    });
  };
  //END ITERACION 2

  //START ITERACION 3
  sortByName = () => {
    const contactsSortedOut = this.state.contactsList5;
    contactsSortedOut.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contactsList5: contactsSortedOut,
    });
  };

  sortByPopularity = () => {
    const contactsByPopularity = this.state.contactsList5;
    contactsByPopularity.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contactsList5: contactsByPopularity,
    });
  };
  //END ITERACION 3

  render() {
    return (
      <div>
        <h1>IronContact</h1>
        <AddContact addRandomContact={this.addRandom} />
        <SortByName sortByName={this.sortByName} />
        <SortByPopularity sortByPopularity={this.sortByPopularity} />
        <br />
        <br />
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.contactsList5.map((contact) => (
            <ContactRow contact={contact} />
          ))}
        </table>
      </div>
    );
  }
}
export default App;
