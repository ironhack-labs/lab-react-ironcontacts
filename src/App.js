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
    //la variable randomContact nous permettra de sortir un contact au hasard de l'array contacts grâce au Math.floor
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    //-1 veut dire qu'il n'existe pas donc on peut l'ajouter
    if (this.state.contactsList5.indexOf(randomContact) === -1) {
      //Ensuite on redéfini l'état contactsList5 en lui ajoutant le nouveau contact
      this.setState({
        contactsList5: [...this.state.contactsList5, randomContact],
      });
    }
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

  //START ITERACION 4
  //l'id passé entre parenthèse provient de Contact.js
  deleteContact = (id) => {
    //Garde moi les contact qui ne correspondent pas à cet ID
    const deleteContact = this.state.contactsList5.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contactsList5: deleteContact,
    });
  };
  //END ITERACION 4

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
            <th>Action</th>
          </tr>
          {this.state.contactsList5.map((contact, index) => {
            return (
              <ContactRow
                //Ceci va nous rendre tous les contacts(photo, nom, popularité)
                contact={contact}
                //On ajoute ça pour pouvoir supprimer en cliquant sur le bouton.
                //Je passe cet fonction qui est "déjà prête à l'emploi" et on le passe en référence à notre composant ContactRow où on va l'éxécuter au moment du clic
                clickToDelete={this.deleteContact}
              />
            );
          })}
        </table>
      </div>
    );
  }
}
export default App;
