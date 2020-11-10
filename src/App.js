import React, {Component} from 'react';
import './App.css';
import contacts from './contacts.json';
import Movies5 from "./components/Movies5"

class App extends Component {
state={
  contactsFive: contacts.slice(0,5)
}
addRandom = () => {
  const copyFive = [...this.state.contactsFive]
  const random = contacts[Math.floor(Math.random()*contacts.length)]
  if(!copyFive.includes(random)){
    copyFive.push(random)
  }
this.setState({
  contactsFive:copyFive
})

}
sortName = () => {
  const copyFive = [...this.state.contactsFive]
  copyFive.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})

  this.setState({
    contactsFive: copyFive
  })
}

sortPopularity = () =>{
  const copyFive = [...this.state.contactsFive]
  copyFive.sort(function(a, b){
    if(a.popularity < b.popularity) { return -1; }
    if(a.popularity > b.popularity) { return 1; }
    return 0;
})
this.setState({
  contactsFive: copyFive
})
  
}

render(){
  return (
 <div className="App">
      <h1>Iron contacts</h1>
      <button onClick={()=>this.addRandom()}>Add random contact</button>
      <button onClick={()=>this.sortName()}>Sort by name</button>
      <button onClick={()=>this.sortPopularity()}>Sort by popularity</button>
      {this.state.contactsFive.map(oneActor=>{
        return(
          <Movies5
          key={oneActor.id}
          {...oneActor}/>
        )
      })}
    </div>
  );
}
 
}

export default App;