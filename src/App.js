import './App.css';
import contacts from "./contacts.json";
import React from 'react'


let shortArr = contacts.slice(0, 5)
// console.log(shortArr);

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

  newActor = () => {
    this.setState((prevState)=>{
       const randomActor = contacts[Math.floor(Math.random()*contacts.length)]
       return prevState.newActorArr.push(randomActor)
    })
  }

  render(){
    return (
      <>
        <div className="App">
          <h1>Iron Contacts</h1>
          <button onClick={this.newActor}>Add new actor</button>
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
