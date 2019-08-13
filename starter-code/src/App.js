import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Card from './components/Card';

// import ActorList from './components/Dynamic-actor'

  
class App extends Component {
  constructor(){
    super()
    this.state =  {TheContacts: contacts.splice(0, 5)}        

}
  // pushContacts = num => {
  //   for (let i = 0; i < num; i++) {
  //     this.state.contacts.push(contacts[i]);
  //   }
  // };

  // componentWillMount() {
  //   this.pushContacts(5);
  // }

  //funciones para los botones

  addRandomContact = () =>{
    const updatedContacts = [...this.state.TheContacts];//copia del array inicial
    updatedContacts.push(contacts[Math.floor(Math.random() * contacts.length)])
    console.log(updatedContacts)
    this.setState({
      ...this.state, TheContacts: updatedContacts
    })
    
  }



  sortByName = () =>{
    const updatedContacts = [...this.state.TheContacts].sort(( a, b ) => b.name < a.name ? 1 : -1);

    this.setState({
      ...this.state, TheContacts: updatedContacts
    })
  
  }

  sortByPopularity = () =>{
    const updatedContacts = [...this.state.TheContacts].sort(( a, b ) => b.popularity - a.popularity );
    this.setState({
      ...this.state, TheContacts: updatedContacts
    })
  }


  deleteContact = idx => {
    const updatedContacts = [...this.state.contacts]

    updatedContacts.splice(idx, 1)

    this.setState ({
      contacts: updatedContacts
    })
 } 
// fin funciones de botones

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Iron Contacts</h1>
        </header>
         
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <button className = "btn btn-boton" onClick={this.addRandomContact}>Add Random Contact</button>
              <button className = "btn btn-boton" onClick={this.sortByName}>Sort by Name</button>
              <button className = "btn btn-boton" onClick={this.sortByPopularity}>Sort by popularity</button>  
            </div>
          </div>
          <div className="row">
            <div className="col-12">
            <table className="table-back">
                <thead className="thead-tab">
                  <tr className="cabecera">
                    <th className="cabecera-th">Picture</th>
                    <th className="cabecera-th">Name</th>
                    <th className="cabecera-th">Popularity</th>
                    <th className="cabecera-th"></th>
                  </tr>
                </thead>

                <tbody>

                {this.state.TheContacts.map((elm, idx) => {
                  return <Card key={idx} 
                                name={elm.name} 
                                pictureUrl={elm.pictureUrl} 
                                popularity={elm.popularity} 
                                deleteContact={() => this.deleteContact(idx)} /> 
                })}

                </tbody> 
            </table>
            
              
            </div>
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;
