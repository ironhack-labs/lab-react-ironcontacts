import './App.css';
import contacts from "./contacts.json";
import React from 'react'


let shortArr = contacts.slice(0, 5)

function NewContacts(props) {
    return(
      <>
        <tr>
          <img src={props.pictureUrl} width="50px"/>
          <td>{props.name}</td>
          <td>{props.popularity.toFixed(2)}</td>
        </tr>
      </>
    )
}


class App extends React.Component {
  constructor(){
    super();
    this.state = {
        newActorArr: shortArr
    }
  }

  addNewActor = () => {
    this.setState((prevState)=>{
       const randomActor = contacts[Math.floor(Math.random()*contacts.length)]
       return prevState.newActorArr.push(randomActor)
    })
  }
  
  sortActors = () => {
    this.setState((prevState)=>{
      const sortedList = prevState.newActorArr.sort((a, b) => a.name.localeCompare(b.name))
      return {newActorArr: sortedList}
    })
  }

  render(){
    return (
      <>
        <div className="App">
          <h1>Iron Contacts</h1>
          <button onClick={this.addNewActor}>Add New Actor</button>
          <button onClick={this.sortActors}>Sort Actors</button>
        <hr/>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
                {shortArr.map((elem) => {
                  return (
                    <NewContacts 
                      pictureUrl = {elem.pictureUrl} 
                      name = {elem.name} 
                      popularity = {elem.popularity}/>);
                })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default App;
