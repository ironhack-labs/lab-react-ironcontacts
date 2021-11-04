
import './App.css';
import contacts from "./contacts.json";
import React from 'react';


const fiveContacts = contacts.slice(0, 5);
console.log(fiveContacts);
console.log(fiveContacts[3]);

randomActor = () => {
  const newArr = this.state.initialActors
  console.log("please logg")
  let actorRandom = getActorRandomly();
  console.log("pleasse")
  this.setState((prevState, props)=> {
    return {initialActors: prevState.initialActors.push(randomActor)}

  })
}

class Contact extends React.Component {

  render() {
    return (
      <tr key="contact.id">
        <td>
          <img src={this.props.pictureURl} alt="" />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
      </tr>
    );
  }
}

class App extends React.Component {
 

  render() {
    return (
      <div className="container">
        <h1>Iron Contacts</h1>
        <table>
          <thead>
           <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            </tr>
           </thead>
          <tbody>
          {/* <h1>hello</h1> */  use map method!!!! }
            <Contact                                
            name={fiveContacts.name}
            image={fiveContacts.imageUrl}
            popularity={fiveContacts.popularity}
            />
          </tbody>
        </table>

      </div>
    );
  }
}


export default App;
