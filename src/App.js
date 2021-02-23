import React from "react";
import "./App.css";
import contacts from "./contacts.json";
// import ButtonToSayHello from "./components/AddRandomContact";

function compareName(a,b){
  if (a.name < b.name){
    return -1;
  } else if (a.name > b.name){
    return 1;
  } else {
    return 0;
  }
}

function compareP (a,b){
  if (a.popularity < b.popularity){
    return -1;
  } else if (a.popularity > b.popularity){
    return 1;
  } else {
    return 0;
  }
}

class App extends React.Component {
  state = {
    actors: contacts.slice(0, 5),
  };
  

 addRandom = (actorsId) => {
   const newArray = [...this.state.actors]
  const findActor = contacts[Math.floor(Math.random()*contacts.length)]
  newArray.push(findActor)
  this.setState({actors : newArray})
 }

 SortName = () => {
  this.setState({
    actors: [...this.state.actors].sort(compareName)
  })
}
SortPopularity = () => {
  this.setState({
    celebs: [...this.state.actors].sort(compareP)
  })
}


  render() {
    return (
      <div className="App">
        <h1>Iron Contact</h1>
        <button onClick={() => {this.addRandom()}}>Add celebrity</button>
        <button onClick={this.SortName}> Sort by Name </button>
        <button onClick={this.SortPopularity}> Sort by Popularity </button>
       
       
        {this.state.actors.map((contact) => {
          return (
            <table>
              <th>
                <img className="actorImg" src={contact.pictureUrl} img />{" "}
              </th>
              <th className="contact">{contact.name}</th>
              <th>{contact.popularity}</th>
            </table>

           
           // <button onClick={() => }>Sort by Popularity</button>

 
          );
        })}
      </div>
    );
  }
 }
export default App;