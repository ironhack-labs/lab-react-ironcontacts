import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import 'bulma/css/bulma.css'
import contacts from './contacts.json';
import ContactRow from './components/ContactRow'
class App extends Component {
  
  state={
      contactList : contacts.slice(0,5)
    
  }
  

  displayFiveElements = () =>{
    const contactsCopy = [...this.state.contactList]
    this.setState= ({
            contacts : contactsCopy.slice(0,3)
    })
  }
  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-12">
              <h1>IronContacts</h1>
              <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>  

                </thead>
                <tbody>
                {this.state.contactList.map( (contact,index) =>{
                  return(<ContactRow key={"contact-"+index}  contact={contact}/>)
                })}
                </tbody>
              
              </table>
              </div>
            </div>
          </div>
        </section>
       
       
=======
import List from './components/List'
import contactList from './contacts.json'

/* let data = dataContacts.slice(0,4);
 */
class App extends Component {

  state = {
    contactsList : contactList
  }
  
  render() {
    return (
      <div className="App">
        {/* elementsDisplay = #number the elements we want to display */}
        <List data={this.state.contactsList} elementsDisplay={4}  />;
>>>>>>> 01f66fe8d81c88803edacc6e49e1b9136aca2921
      </div>
    );
  }
}

export default App;
