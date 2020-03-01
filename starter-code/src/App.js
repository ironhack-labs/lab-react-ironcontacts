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
  sortByName = ()=>{
    const sortArray = [...this.state.contactList];
      sortArray.sort(function(a, b){
      
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
    this.setState({
      contactList : sortArray
    })
  }
  sortByPopularity = () =>{
    const sortArray = [...this.state.contactList];
      sortArray.sort(function(a, b){
      
        if(a.popularity >   b.popularity) { return -1; }
        if(a.popularity < b.popularity) { return 1; }
        return 0;
    })
    this.setState({
      contactList : sortArray
    })
    
  }

deleteContacHandler = id =>{
  const contactsCopy = [...this.state.contactList];
  const contacIndex = contactsCopy.findIndex(contact => contact.id === id);
contactsCopy.splice(contacIndex,1);
this.setState({
  contactList: contactsCopy
})

}   
  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <div className="columns  is-desktop is-multiline ">
            <div className=" column is-12">
              <h1 className="title">IronContacts</h1>
            </div>
              <div className=" column is-4">
                <button className="button" onClick={this.addRandom}>Add random contact </button>
              </div>
              <div className=" column is-4">
                <button className="button" onClick={this.sortByName}>Sort by name </button>
              </div>
              <div className=" column is-4">
                <button className="button" onClick={this.sortByPopularity}>Sort by popularity</button>
              </div>
              <div className="column is-12">

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
                
                {this.state.contactList.map( (contact,index) =>{
                  return(<ContactRow key={contact.id}  contact={contact} clickToDelete={ () => this.deleteContacHandler(contact.id)}/>)
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
