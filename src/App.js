import './App.css';
import contacts from "./contacts.json";
import React from 'react'

let arrayOfFive = contacts.slice(0,5);

class App extends React.Component {

state = {
  Actors: arrayOfFive
}

  

addRandom = (props) => {
   const randomActor = contacts[Math.floor(Math.random() * contacts.length)] 
  const ActorsCopy = [ ...this.state.Actors]
      this.setState(() => {
        return { Actors: [...ActorsCopy, randomActor]}
      })
        
        //arrayOfFive.push(randomActor))
}

//delete = () => {

//   this.setState((state) => {
//     return {Actors:this.state.Actors }
//   })

// }

//arrayOfFive.push(contacts[Math.floor(Math.random()*contacts.length)])
//setState(Actors.state)

  render() {

    // let arrayOfFive = [];
    //   for (let contact of this.state.Actors) {
    //     if (arrayOfFive.length < 5) {
    //       arrayOfFive.push(contact)
    //   }
    // }

    const Actors = this.state.Actors.map(actor => {
      //const popularity = actor.popularity.toFixed(2);
      return (
      <tr key={ actor.id }>
        <td><img src= {actor.pictureUrl} id=""/></td>
        <td> { actor.name } </td>
        <td> { actor.popularity.toFixed(2) } </td>
      </tr>
    )}
    )


    return(
      <div className="App">
        <h1>IronContacts</h1>

        <button onClick={this.addRandom}>Add Random Contact</button>

        <table>
       
        <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>

          { Actors }
       
        </table>
    </div>
    )
  }
    
}



export default App;
