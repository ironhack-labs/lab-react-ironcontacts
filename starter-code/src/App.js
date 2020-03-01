import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import contacts from './contacts.json';
import ContactRow from './components/ContactRow'
class App extends Component {
  
  state={
      contactList : contacts.slice(0,5),
      data: contacts
    
  }

  addRandom = ()=>{
    const randomElement  =Math.floor(Math.random() * this.state.data.length ) + 0;  
    const newElement = this.state.data[randomElement];
   this.setState({
      contactList : [...this.state.contactList, newElement ] 
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
              <button onClick={this.addRandom}>Add random contact </button>
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
       
       
      </div>
    );
  }
}

export default App;
