import React, { Component } from 'react';
import ActorCard from './ActorCard';
import './App.css';
import contacts from './contacts.json';
class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  };


  clickHandler = () =>{
    let actores = [...this.state.contacts]
    let random =  contacts[Math.floor(Math.random()*contacts.length)]
    actores.push(random)
    console.log(actores)
    this.setState({contacts: actores})
  }

  sortByName = ()=> {
    let nombres = [...this.state.contacts]
    nombres.sort((a,b) =>{
       if(a.name < b.name){
        return -1
       } else if(a.name > b.name){
         return 1
       } else{
         return 0
       }
      }
       );
    console.log(nombres)
     this.setState({contacts: nombres})
  }

  sortByPopularity = () => {
    let popular = [...this.state.contacts]
    popular.sort((a,b) => {
      if(a.popularity < b.popularity){
          return 1
      } else{
        return -1
      }
    })
    this.setState({contacts: popular})
  }

  Delete = (famousIndex) => {
    let famous = [...this.state.contacts]
    famous.splice(famousIndex, 1)
    this.setState({
      contacts: famous
    })
  }
  



  render() {
    return (
      <div className="App">
      <div className="caja">
      <button className="but" onClick={this.clickHandler}><p>Add Random Contact</p></button>
      <button className="but"  onClick={this.sortByName}><p>Sort me!</p></button>
      <button className="but"  onClick={this.sortByPopularity}><p>Sort me!</p></button>
      </div>
        <h1>IRON CONTACTS</h1>
        {this.state.contacts.map((element, index) => {
          return (
            <ActorCard
              key={index}
              img={element.pictureUrl}
              name={element.name}
              popularity={element.popularity}
              delete={() => this.Delete(index)}
            />

          );
        })}
      </div>
    );
  }
}

export default App;
