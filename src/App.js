import React, {Component} from 'react';
// import logo from './logo.svg';
import contacts from './contacts.json';
import ActorsCard from './components/ActorsCard';
import './App.css';


// function compareValues(name, order='asc'){
//   return function innerSort(a, b){
//     if (!a.hasOwnProperty(name) || !b.hasOwnProperty(name)){
//       return 0;
//     }
//   }
// }
class App extends Component {
  state= {
    contacts: contacts.slice(0, 5)
  } 
  addActor = () => {
    const randAct = contacts[Math.floor(Math.random() * contacts.length)];
    const newContacts = [...this.state.contacts]; 
    if (!newContacts.includes(randAct)){
      newContacts.push(randAct)
    }
    this.setState({
      contacts: newContacts
    })
  }; 
  sortActorName = () => {
    const actName = contacts.sort();
    
    this.setState()
  }

  sortActorPop = () => {
    this.setState()
  }

  render (){
    return (
    <div className="App"> 
      <h1>IronContacts</h1>
      <button onClick={()=> this.addActor()}>Add Random Contact</button>
      <button onClick={()=> this.sortActorName()}>Sort by Name</button>
      <button onClick={()=> this.sortActorPop()}>Sort by Popularity</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map(oneActor => {
            return (
              <ActorsCard
                key={oneActor.id}
                {...oneActor}
              />    
            )
          })} 
        </tbody>
      </table>        
    </div>
  )
}
}

  

export default App;
