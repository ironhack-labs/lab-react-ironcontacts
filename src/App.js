
import './App.css';
import contacts from "./contacts.json";
import React from 'react';


const fiveContacts = contacts.slice(0, 5);
console.log(fiveContacts);
console.log(fiveContacts[3]);

// randomActor = () => {
//   const newArr = this.state.initialContacts

//   let actorRandom = getActorRandomly();
//   console.log("pleasse")
//   this.setState((prevState, props) => {
//     return { initialContacts: prevState.initialContacts.push(randomActor) }

//   })
// }



class Contact extends React.Component {

  render() {
    return (
      <tr >
        <td>
          <img className="Picture" src={this.props.pictureUrl} alt="" />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td><button onClick={this.props.clickToDelete}>DELETE</button></td>
      </tr>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialContacts: fiveContacts
    }
  }

  addRandomContact = () => {
    const newContact= contacts[Math.floor(Math.random()*contacts.length)]  
    this.setState((prevState, props)=>{
    const newList =[...prevState.initialContacts, newContact]
    return {initialContacts: newList}
    })
   
  }

  sortbyName = ()=> {
    
    this.setState( (prevState,props) =>{
      const listOfNames = prevState.initialContacts.sort(function(a,b){
        return a.name.localeCompare(b.name)
      });
       
      return ({initialContacts: listOfNames})
    }
    ) 
  }

  sortbyPopularity = ()=>{
    this.setState( (prevState, props)=>{
      const listOfPopularity = prevState.initialContacts.sort(function(a,b){
        return a.popularity - b.popularity
      });
      return ({initialContacts: listOfPopularity})
    })
  }

 deleteContactHandler = id => {
   const initialContactsCopy = this.state.initialContacts;
   const intitialContactsIndex = initialContactsCopy.findIndex(contact => contact.id === id);
   initialContactsCopy.splice(intitialContactsIndex, 1);
   this.setState({
     initialContacts: initialContactsCopy
   })
 }

  render() {
    return (
      <div className="container">
        <h1>Iron Contacts</h1>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortbyName}>Sort the table by name</button>
        <button onClick={this.sortbyPopularity}>Sort the table by Popularity</button>
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

            {this.state.initialContacts.map((contact) => {
              return <Contact 
                key={contact.id} {...contact} clickToDelete = {()=> this.deleteContactHandler(contact.id)}
                name={contact.name}
                pictureUrl={contact.pictureUrl}
                popularity={contact.popularity}
                deleteContact={contact.deleteContact}
              />
            })}


          </tbody>


        </table>

      </div>
    );
  }
}


export default App;
