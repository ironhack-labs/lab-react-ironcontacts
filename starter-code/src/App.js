import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contact from './Contact';


class App extends Component {
constructor(props){
super(props)
this.state = {
contactIni: contacts.slice(0,5),
};


}


addNewContact() {
  let newContactIni = [...this.state.contactIni]
  let allTheContacts = contacts.length
  var contactRandom = Math.floor(Math.random()* allTheContacts)
  newContactIni.push(contacts[contactRandom])

  this.setState({
    ...this.state,
    contactIni: newContactIni
})
}


sortNameContact() {
  let newContactIniSort = [...this.state.contactIni]
  newContactIniSort.sort(function(a,b){
   if(a.name>b.name) return 1
   if(a.name<b.name) return -1
  })
  this.setState({
    ...this.state,
    contactIni: newContactIniSort

})
}

sortPopularityContact() {
  let newContactIniSort = [...this.state.contactIni]
  newContactIniSort.sort(function(a,b){
   if(a.popularity>b.popularity) return -1
   if(a.popularity<b.popularity) return 1
  })
  this.setState({
    ...this.state,
    contactIni: newContactIniSort

})
}


delete(name) {

  this.setState({
    ...this.state,
    contactIni: this.state.contactIni.filter(contact => contact.name !== name)
  })
}




  render() {
      return (
        <div className="container">
             <div className="btn">
       <button onClick={() => this.addNewContact()}>Add new Contact</button>
       <button onClick={() => this.sortNameContact()}>Sort By Name</button>
       <button onClick={() => this.sortPopularityContact()}>Sort By Popularity</button>
         </div>
         <table>
           <thead>IronContacts</thead>
          <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          </tr>
  
        {this.state.contactIni.map((contact,index)=>{
          return (

           <Contact 
          key ={index}
          name ={contact.name} 
          pictureUrl ={contact.pictureUrl} 
          popularity ={contact.popularity}
          delete ={()=> this.delete(contact.name)}>
          </Contact>
          );
        })}

></table>
    </div>
    );
  }
}


export default App;
