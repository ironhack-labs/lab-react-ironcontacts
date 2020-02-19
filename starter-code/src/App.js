import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'


// let contactsRandom = Math.floor(Math.random()*contacts.length)


let only5 = contacts.slice(0,5 )

class App extends Component {
  state={
    contacts,
    only5
  }

    addContact = contact => {
      let contactNew = contacts[Math.floor(Math.random()*contacts.length)]
      this.setState({contacts:[...this.state.contacts],only5: [...this.state.only5, contactNew]})
    }

    sortbyName= ()=> {
      let contacsByName = [...this.state.only5]
      let sortContacts = contacsByName.sort((a,b)=>{
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      })
      this.setState({contacts:[...this.state.contacts],only5: [...sortContacts]}) 
      
    }
sortbyPopularity = ()=> {
     let contacsByPop = [...this.state.only5]
      let sortPopu = contacsByPop.sort(function(a,b){
        if(a.popularity > b.popularity) return -1;
        if(a.popularity < b.popularity) return 1;
        return 0;
      })
      this.setState({contacts:[...this.state.contacts],only5: [...sortPopu]}) 
}

  delete = contactID => {
    // copiar el estado, por que jamas debería mutarlo directamente
    console.log("holi consoli");
    
    const only5Copy = [...this.state.only5];

    // Remover la pelicula que queremos borrar, del arreglo copia
    only5Copy.splice(contactID, 1);
    // guardar el arreglo copia como la pripiedad movies del estado para ver reflejado el cambio
    this.setState({
      only5: only5Copy
    });
  };

  render() {
    return (

      <div className="App">
        <br/>
        <br/>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortbyName}>Sort By Name</button>
        <button onClick={this.sortbyPopularity}>Sort By Popularity</button>
                <table>
                <tbody>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                  </tr>

                  
              {this.state.only5.map((el,i)=> (
                  <tr key={i}>
                    <td><img src={el.pictureUrl}/></td>
                    <td>{el.name}</td>
                    <td>{el.popularity.toFixed(2)}</td>
                    <td><button onClick={() => this.delete(i)}>Delete</button></td>
                  </tr>
              ))}
                  </tbody>
                </table> 
 

      </div>
    );
  }
}

export default App;
