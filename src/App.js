import React, { Component } from 'react'
import './App.css';
import contacts from './contacts.json';
import Celeb from './components/Celeb'



export default class App extends Component {
//state of App.js:
  state = {
    celebreties : contacts.slice(0,5)
  }

//function to add a random celebrity:
      randomCeleb = () => {
    //console.log('clicked random button')
    //console.log('this is a random cleb', contacts[Math.floor(Math.random() * contacts.length)])
    let randomCeleb = contacts[Math.floor(Math.random() * contacts.length)]


    //check if a celeb is already there:
    let checkContact = this.state.celebreties.find(celeb => {
      return celeb.id === randomCeleb.id
    })

    if (checkContact){
      //console.log(randomCeleb.id, "randomCeleb.id")
      this.randomCeleb()
    } else {
      //console.log('this is the else statement')  
    const celebretiescopy = this.state.celebreties.slice()
    celebretiescopy.push(randomCeleb);

    this.setState({
      celebreties: celebretiescopy,
    })
  }

      }

//function to sort celebrity by Name:
    sortByName = () => {
      //console.log('clicked sort by name button')
       const sortedName = this.state.celebreties.sort((a,b)=> {
      return a.name.localeCompare(b.name)

      })
      this.setState({
        celebreties: sortedName,
      })
      }


//function to sort celebrity by Popularity:
    sortbyPopularity = () => {
      //console.log('clicked sort by popularity button')

      const sortedPopularity = this.state.celebreties.sort((a,b)=> {
        //console.log('this is a', a)
        return b.popularity-a.popularity
  
        })
        this.setState({
          celebreties: sortedPopularity,
        })
    }

  render() {
    return (
      <div>
         <h1>IronContacts</h1>
        <button onClick={this.randomCeleb}> Add random Contact</button>
        <button onClick={this.sortByName}> Sort by name</button>
        <button onClick={this.sortbyPopularity}> Sort by popularity</button>
         <table>
                <thead>
                    <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    </tr>
                </thead>
                <Celeb celebreties={this.state.celebreties} />
          </table>
       
      </div>
    );
  };
}


