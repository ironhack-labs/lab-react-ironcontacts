import React, {Component} from 'react';
import ActorsCard from './components/ActorsCard.js';
import './App.css';
import contacts from './contacts.json';
class App extends Component{
  state = {
    contacts: contacts.slice(0,5)
    
  }
  clickHandler = () =>{
    let actores = [...this.state.contacts]
    let random =  contacts[Math.floor(Math.random()*contacts.length)]
    actores.push(random)
    this.setState({contacts: actores})
  }
  sortByName= () => {
    let nombres = [...this.state.contacts]
    nombres.sort((a,b) => {
      if (a.name < b.name){
        return -1
      }else if(a.name > b.name){
        return 1
      }else {
        return 0
      }
    })
    this.setState({contacts : nombres})
  }
  sortByPopularity = () => {

    let popularity = [...this.state.contacts]
    popularity.sort((a,b) => {
      if (a.popularity < b.popularity){
        return 1
      }else {
        return -1
      }
    })
    this.setState({contacts:popularity})

  }

  Delete  = (famousindex) => {
    let famous = [...this.state.contacts]
    famous.splice(famousindex , 1)
    this.setState({
      contacts: famous
    })
  }

  
  render(){
  return (
    <div className="App">
    <button onClick={() => this.clickHandler()}>Add Random Contact</button>
    <button onClick={() => this.sortByName()}>Sort by name</button>
    <button onClick={() => this.sortByPopularity()}>Sort by Popularity</button>

    <h1>IRON CONTACTS</h1>
      {this.state.contacts.map((element, index) => {
        return <ActorsCard key = {index} img={element.pictureUrl} name={element.name} popularity={element.popularity}  delete={() => this.Delete(index)} />
      })}
      
  </div>
  );
  }
}
export default App;