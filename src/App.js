
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
      <tr key="contact.id">
        <td>
          <img className="Picture" src={this.props.pictureUrl} alt="" />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
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
            </tr>
          </thead>



          <tbody>

            {this.state.initialContacts.map((contact) => {
              return <Contact
                name={contact.name}
                pictureUrl={contact.pictureUrl}
                popularity={contact.popularity}
              />
            })}


          </tbody>


        </table>

      </div>
    );
  }
}


export default App;
