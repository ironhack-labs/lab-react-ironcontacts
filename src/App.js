import React, {Component} from 'react';
import './App.css';
import Card from './components/Card';
import contacts from './contacts.json';


class App extends Component {
  state = {
    contacts: contacts.splice(0, 5)
  }

  addRandomContact = () => {

    let pickRandomContact 

    let inList = true;

    while(inList){
      pickRandomContact  = contacts[Math.floor(Math.random() * contacts.length)];
      inList = false;
      this.state.contacts.forEach(e => {
        if(e.name === pickRandomContact.name) {
          inList = true;
        }
      });
      
    }

    // let arr1 = [{ nombre: 'marina' }, { nombre: 'julian' }]; // this.state.contacts
    // let arr2 = [
    //   { nombre: 'marina' },
    //   { nombre: 'julian' },
    //   { nombre: 'leandro' },
    //   { nombre: 'dani' },
    // ]; // contacts
    
    // //Find values that are in arr1 but not in arr2 
    // var uniqueResultOne = arr1.filter(function (obj) {
    //   return !arr2.some(function (obj2) {
    //     return obj.nombre == obj2.nombre;
    //   });
    // });//Find values that are in arr2 but not in arr1 
    // var uniqueResultTwo = arr2.filter(function (obj) {
    //   return !arr1.some(function (obj2) {
    //     return obj.nombre == obj2.nombre;
    //   });
    // });//Combine the two arrays of unique entries
    // var result = uniqueResultOne.concat(uniqueResultTwo);console.log(result); // [ { nombre: 'leandro' }, { nombre: 'dani' } ]
    console.log(pickRandomContact)
  
     this.setState({
      contacts: [...this.state.contacts,  pickRandomContact]

    })
    

  }

  sortByName = () => {
const listSorted = this.state.contacts.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

console.log(listSorted)
this.setState({
  contacts: listSorted

})
  }

  sortByPop = () => {
    const listSorted = this.state.contacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    this.setState({
      contacts: listSorted
    
    })
  }

  deleteContact = (contactIndex) => {
    // creamos una copia del array movies en la constante moviesCopy
    //const moviesCopy = [...this.state.movies];
    // eliminamos la posición que llega como argumento
    //moviesCopy.splice(movieIndex, 1);
    // usamos el método setState para setear en el estado el nuevo array


    //devuelve todas las movies cuyo id no coincide con el que llega por parámetro al método
    const filtered = this.state.contacts.filter(contact => contact.id !== contactIndex)
    this.setState({
      contacts: filtered,
    });
  };

  render() {
    return (
      <main>
        <h1>IronContacts</h1>
        <button onClick= {this.addRandomContact} >Add random Contact </button>
        <button onClick= {this.sortByName} >Sort by Name </button>
        <button onClick= {this.sortByPop} >Sort by popularity </button>

        <table>
                <thead>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                  </tr>
                  
                </thead>
                <tbody>
                {this.state.contacts.map(oneContact => {
                  //return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
                  return (
                    <Card key={oneContact.id} {...oneContact}
                      clickToDelete={() => this.deleteContact(oneContact.id)}
                    />
                  );
                })}

                </tbody>
              {/* <button onClick={() => this.toggleMovies()}>
                  {showOscarAwarded ? "Hide Oscar Awarded" : "Show Oscar Awarded"}
              </button> */}
            </table>
      </main>
    )
  }
}

export default App;
