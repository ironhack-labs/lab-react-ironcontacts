import React, {Component} from 'react';
// import logo from './logo.svg';
import contacts from './contacts.json';
import './App.css';



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
    const actName = [...this.state.contacts];
    actName.sort(function(a,b){
     if (a.name<b.name) {return -1}
     if (a.name>b.name) {return 1}
     return 0; 
    })
    this.setState({
      contacts: actName
    })
  }

  sortActorPop = () => {
    const actPop = [...this.state.contacts];
    actPop.sort(function(a,b){
      if (a.popularity>b.popularity) {return -1}
      if (b.popularity<b.popularity) {return 1}
      return 0;
    })
    this.setState({
      contacts: actPop
    })
  }

  delete(id){
    let filtered = this.state.contacts.filter(contact=> contact.id !== id)
    this.setState({contacts:[...filtered]})
  }

  render (){
    return (
    <div className="App"> 
      <h1>IronContacts</h1>
      <button onClick={()=> this.addActor()}>Add Random Contact</button>
      <button onClick={()=> this.sortActorName()}>Sort by Name</button>
      <button onClick={()=> this.sortActorPop()}>Sort by Popularity</button>

      <table>
        
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.contacts.map(oneActor => 
            
              <tr key={oneActor.id}>
                <td><img className="image" src={oneActor.pictureUrl} alt=""/></td>
                <td>{oneActor.name}</td>
                <td>{oneActor.popularity}</td>
                <td><button onClick={()=> this.delete(oneActor.id)}>Delete</button></td>
            </tr>   
          )} 
        
      </table>        
    </div>
  )
}
}

  

export default App;
